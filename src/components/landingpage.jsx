import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Logo from './logo.png'
export default function Landingpage() {
    return (
        <div className="lander">
            <div className="h">
            <h1>Welcome to Mailer</h1>
            </div>
          <Link to="/admin"> <img src={Logo} alt="" /></Link>  
           <Link to="/user"> <button id="main"> <h2>Register to Mailer</h2></button> </Link>
        </div>
    )
}
