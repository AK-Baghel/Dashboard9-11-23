import React, { useState, useContext } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";


// import { RiArrowDropDownLine } from "react-icons/ri"
import { AiFillHome } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Context } from "../../context/AppContext"

const Header = ({ toggleMenuHandle, toggleMenu }) => {

    const { showMenu } = useContext(Context);

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [headerVerticalToggle1, setHeaderVerticalToggle1] = useState(true)
    const [headerVerticalToggle2, setHeaderVerticalToggle2] = useState(false)


    const headerVerticalToggle = (value) => {
        if (value === 1) {
            setHeaderVerticalToggle1(true)
            setHeaderVerticalToggle2(false)
        }
        else {
            setHeaderVerticalToggle1(false)
            setHeaderVerticalToggle2(true)

        }
    }

    const toggleBar = () => {
        setShow(!show);
    }
    const navigate = useNavigate();

    const routing = (para) => {
        navigate(para);
        setShow(true)
        setPopUp(false)
    }

    return (
        <div className="headerContainer">
            <div className="headerItems">

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>
                    <div className="headerLeft">
                        <div className="headerVerticalToggle">
                            <div className={`headerVerticalToggles ${headerVerticalToggle1 ? "headerVerticalToggleActive" : ""}`} onClick={() => { headerVerticalToggle(1); showMenu(true) }} ><AiFillHome /> Menu</div>
                            <div className={`headerVerticalToggles ${headerVerticalToggle2 ? "headerVerticalToggleActive" : ""}`} onClick={() => { headerVerticalToggle(2); showMenu(false) }}><FaUserAlt /> User</div>
                        </div>

                        <div className=" headerLogo">VAMANI</div>
                        <div className={`headerItem ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>Home</div>
                        {/* <div className={`headerItem ${location.pathname === "/methods" ? "active" : ""}`} onClick={() => { routing("/methods") }} >Methods</div> */}
                        <div className={`headerItem ${location.pathname === "/dashboard" ? "active" : ""}`} onClick={() => { routing("/dashboard") }} >Dashboard</div>
                        <div className="showDashboard" onClick={toggleMenuHandle}>
                            {
                                toggleMenu ?
                                    <FaToggleOn className="toggleMenu" /> :
                                    <FaToggleOff className="toggleMenu" />

                            }
                        </div>
                    </div>

                    <div className="headerRight">
                        <div className=" headerLogo">VPulse</div>
                        <div ><img className="headerFlag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /></div>
                    </div>
                </div>



            </div>
            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }

        </div>
    )
}
export default Header;