import { makeStyles } from '@material-ui/core';
import React from 'react'
import RestaurantQrReader from "../../../RestaurantQrReader";

const useStyles = makeStyles((theme) =>({
    qr_reader:{
        margin:"auto",
        [theme.breakpoints.up('md')]:{
            width:"450px"
        },
        [theme.breakpoints.down('sm')]:{
            width:"200px"
        }
    }
}));
export default function RestaurantHome() {
    const classes = useStyles()
    return (
        <div style={{margin:"auto"}}  >
            <h2>Resto</h2>
            <div className={classes.qr_reader} >
            <RestaurantQrReader/>
            </div>
        </div>
    )
}
