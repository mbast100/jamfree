import React from 'react'
import LoginForm from './Components/LoginForm'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        backgroundColor: '#F8F8F8',
        [theme.breakpoints.up('md')]: {
            width: "600px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        }
    }
}))

export default function Login() {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm />
        </div>
    )
}
