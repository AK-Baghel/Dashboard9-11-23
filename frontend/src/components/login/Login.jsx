import React, { useState } from 'react'
import { BiSolidUserCircle } from "react-icons/bi"
import { AiFillLock } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.css"


function Login({ checkLogin, checking }) {

    const [remember, setRemember] = useState(false);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {

        const data = await fetch("http://localhost:8080/signin", {
            method: "post",
            body: JSON.stringify({ login, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await data.json();

        if (result) {
            checkLogin();
        }

        // if (checking) {
        //     toast.error(`Invalid Credentials`, {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        // }

    }

    return (
        <div className="loginContainer">
            <ToastContainer />
            <div className="loginBlackShade">
                <div className="loginSection">
                    <div className="loginHeading">VPulse</div>
                    <div className="loginText">Login</div>
                    <div className="loginUser">
                        <input type="text" className="loginInput" placeholder='Username' value={login} onChange={(e) => { setLogin(e.target.value) }} />
                        <BiSolidUserCircle className='loginIcon' />
                    </div>
                    <div className="loginUser">
                        <input type="password" className="loginInput" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <AiFillLock className='loginIcon' />
                    </div>
                    <label className="loginRememberBox">
                        <input type="checkbox" defaultChecked={remember} onChange={() => setRemember(!remember)} />
                        Remember Me
                    </label>
                    <div className="loginButton" onClick={signIn}>Sign in</div>
                </div>
            </div>
        </div>
    )
}

export default Login