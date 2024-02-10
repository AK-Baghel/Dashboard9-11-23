import React from "react"
import profile from "../../assets/profile.jpg"

import "./style.css"

const User = () => {
    return (
        <div className="menuContainer">
            <div className="menuBox1">
                <img className='menuImg' src={profile} alt="" />
                <div className="menuName">Ankit Baghel</div>
            </div>
            <div className="menuLine"></div>
            <div className="menuLists">

                <div className="userList">
                    <span className="userBold">Emp No. :</span> 103071651
                </div>
                <div className="userList">
                    <span className="userBold">Age :</span> 23
                </div>
                <div className="userList">
                    <span className="userBold">Gender :</span> Male
                </div>
                <div className="userList">
                    <span className="userBold">D.O.B :</span> 09 Sep 2000
                </div>
                <div className="userList">
                    <span className="userBold">Dept :</span> 55Ab
                </div>
                <div className="userList">
                    <span className="userBold">Shift :</span> Morning
                </div>
                <div className="userList">
                    <span className="userBold">Email :</span> ak9664773@gmail.com
                </div>
                <div className="userList">
                    <span className="userBold">Phone :</span> 9283283744
                </div>
                <div className="userList">
                    <span className="userBold">Joined :</span> 20 March 2019
                </div>
                <div className="userListSocial">
                    <a className="userLink" href="https://www.linkedin.com/in/ankit-kumar-baghel/" target="_blank">Linkedin</a>
                    {/* </div>
                <div className="userList"> */}
                    <a className="userLink" href="https://github.com/ak-baghel" target="_blank">Github</a>
                </div>
            </div>
            <footer className='menuFooter'>
                <div className="menuLine"></div>
                <div className="menuFooterText">
                    &copy;2019 Vamani Overseas Pvt Ltd
                </div>
            </footer>
        </div>
    )
}
export default User;