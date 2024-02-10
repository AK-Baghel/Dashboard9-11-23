import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FaHome } from "react-icons/fa"
import { FaTasks } from "react-icons/fa"
import { FaShieldAlt } from "react-icons/fa"
import { PiBagFill } from "react-icons/pi"
import { BsFillGearFill } from "react-icons/bs"
import { BiSolidCylinder } from "react-icons/bi"
import { AiFillLike } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import profile from "../../assets/profile.jpg"

import "./style.css"

function Menu() {

    const navigate = useNavigate();

    return (
        <div className="menuContainer">
            <div className="menuBox1">
                <img className='menuImg' src={profile} alt="" />
                <div className="menuName">Ankit Baghel</div>
            </div>
            <div className="menuLine"></div>
            <div className="menuLists">
                <div className={`menuList ${location.pathname === "/" ? "menuListActive" : ""}`} onClick={() => { navigate("/") }}><FaHome />Home</div>
                <div className={`menuList ${location.pathname === "/grievance" ? "menuListActive" : ""}`} onClick={() => { navigate("/grievance") }}><FaTasks />Grievance Report<RiArrowDropDownLine /></div>
                {/* <div className="menuList"><FaShieldAlt />Policies</div>
                <div className="menuList"><PiBagFill />Job Profile</div>
                <div className="menuList"><BiSolidCylinder />Induction</div>
                <div className="menuList"><BsFillGearFill />Utilities<RiArrowDropDownLine /></div>
                <div className="menuList"><AiFillLike />Suggestion</div> */}
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

export default Menu