const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {Client} = require('pg');
const uniqid = require('uniqid');
const cors = require('cors');


connectionString = 'postgres://kyrellos:BUrJN6v87zMhsxlf@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert='+ __dirname + '/cert/cc-ca.crt&options=--cluster=unripe-monkey-509';

const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const client = new Client({
    connectionString,
});

client.connect();


app.get('/api/users', (req, res) => {
    client.query('SELECT * FROM jamfree.users', (err,resp) => {
        if (err) {
            res.send(err.stack);
        } else {
            res.send(resp.rows);

        }
    });
});

app.get('/api/users/:id', (req, res) => {
    client.query(`SELECT * FROM jamfree.users WHERE id = '${req.params.id}'`, (err,resp) => {
        if (err) {
            res.send(err.stack);
        } else {
            res.send(resp.rows);

        }
    });
});

app.get('/api/organizations', (req, res) => {
    client.query('SELECT * FROM jamfree.organization', (err,resp) => {
        if (err) {
            res.send(err.stack);
        } else {
            res.send(resp.rows);

        }
    });
});

app.get('/api/restaurant/:id/users', (req, res) => {
    client.query(`SELECT * FROM org_${req.params.id}.users`, (err,resp) => {
        if (err) {
            res.send(err.stack);
        } else {
            res.send(resp.rows);

        }
    });
});

app.post('/api/users/new', (req,res) => {
    const userData = req.body;
    const id = uniqid()
    var values = [userData.email, userData.first_name, userData.last_name,  userData.phone_number, userData.password, id];
    client.query("INSERT INTO jamfree.users VALUES ($1, $2, $3, $4, $5, $6);", values, (err) => {
        if(err){
            res.send({
                status: 409,
                stack: err.stack
            });
            return;
        }
        res.send({
            status: 200,
            id, 
            message: "Successfully created new user"
        });

    });
});


app.post('/api/organizations/new', (req,res) => {
    const orgData = req.body;
    const id = uniqid();
    var values = [orgData.email, orgData.restaurant_name,  orgData.phone_number, orgData.password, orgData.address, id];
    client.query("INSERT INTO jamfree.organization VALUES ($1, $2, $3, $4, $5, $6);", values, (err) => {
        if(err){
            res.send({
                status: 409,
                stack: err.stack
            });
            return;
        }

        res.send({
            status: 200,
            id, 
            message: "Successfully created new organization"
        });

        client.query(`CREATE DATABASE org_${id};`, (errDB, resDB) => {
            if(errDB){
                console.log(errDB);
                return;
            }
             console.log(`restaurant org_${id} DB successfully created`);
             const query = `
             CREATE TABLE org_${id}.users (
                 email varchar,
                 first_name varchar,
                 last_name varchar,
                 phone_number varchar,
                 last_visit DATE,
                 group_id varchar,
                 id varchar PRIMARY KEY
             );
             `;

             client.query(query, (errT, resT) => {
                if(errT){
                    console.log(errT);
                    return;
                }
                console.log("restaurant users table created");
             })

        });

    });
});

app.post('/api/restaurant/:id/users/new', (req,res) => {
    const userData = req.body;
    client.query(`SELECT * FROM jamfree.users WHERE id = '${userData.id}'`, (err, resp)=>{
        if(err){
            res.send({
                status: 'error',
                stack: err.stack()
            });
            return
        }
        const user = resp.rows[0];
        var last_visit = new Date();
        last_visit = last_visit.toISOString().slice(0,10)
        var values = [user.email, user.first_name, user.last_name,  user.phone_number, last_visit ,userData.group_id ,userData.id];
        client.query(`INSERT INTO org_${req.params.id}.users VALUES ($1, $2, $3, $4, $5, $6, $7);`, values, (err) => {
            if(err){
                res.send({
                    status: 409,
                    stack: err.stack
                });
                return;
            }
            res.send({
                status: 200,
                id: userData.id,
                message: "Successfully created new user"
            });
    
        });
    });
    
});

app.post("/api/login", (req,res) => {
    const authData = req.body;
    client.query(`SELECT * FROM jamfree.users WHERE email = '${authData.email}'`, (err, resp) => {
        if(err){
            res.send({
                status: "error",
                stack: err.stack
            });
            return;
        }
        if(resp.rows.length === 0){
            client.query(`SELECT * FROM jamfree.organization WHERE email = '${authData.email}'`, (err2, resp2) => {
                if(err2){
                    res.send({
                        status: "error",
                        stack: err.stack
                    });
                    return;
                }

                if(resp2.rows.length === 0){
                    res.send({
                        status: 403,
                        message: "email not found"
                    });
                    return;
                }
                
                if(authData.password === resp2.rows[0].password){
                    res.send({
                        status: 200,
                        message: "login in successful",
                        body: resp2.rows[0],
                        type: 'organization'
                    });
                } else {
                    res.send({
                        status: 403,
                        message: "wrong password",
                    })
                }
            });
            return;
        }
        if(authData.password === resp.rows[0].password){
            res.send({
                status: 200,
                message: "login in successful",
                body: resp.rows[0],
                type: 'user'
            });
        } else {
            res.send({
                status: 403,
                message: "wrong password",
            })
        }

    })
});

app.listen(port, () => console.log("listening on port " +port));