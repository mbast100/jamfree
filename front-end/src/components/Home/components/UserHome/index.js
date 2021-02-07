import React from 'react'
import UserQrCode from "../../../UserQrCode";

export default function UserHome(props) {
    const {id} = props
    return (
        <div>
            <UserQrCode id={id}/>
        </div>
    )
}
