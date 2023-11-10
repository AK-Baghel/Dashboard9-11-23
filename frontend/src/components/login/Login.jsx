import React, { useState } from 'react'

import { BiSolidUserCircle } from "react-icons/bi"
import { AiFillLock } from "react-icons/ai"

import "./style.css"

function Login() {
    const [remember, setRemember] = useState(false);

    return (
        <div className="loginContainer">
            <div className="loginBlackShade">
                <div className="loginSection">
                    <div className="loginHeading">VPulse</div>
                    <div className="loginText">Login</div>
                    <div className="loginUser">
                        <input type="text" className="loginInput" placeholder='Enter User name' />
                        <BiSolidUserCircle />
                    </div>
                    <div className="loginUser">
                        <input type="text" className="loginInput" placeholder='Password' />
                        <AiFillLock />
                    </div>
                    <label className="loginRememberBox">
                        <input type="checkbox" defaultChecked={remember} onChange={() => setRemember(!remember)} />
                        Remember Me
                    </label>
                    <div className="loginButton">Sign in</div>
                </div>
            </div>
        </div>
    )
}

export default Login