import React, { useEffect, useState, useContext } from 'react'
import { BsBarChartLineFill } from "react-icons/bs"
import { BsFillPieChartFill } from "react-icons/bs"
import { FaChartSimple } from "react-icons/fa6"
import { ImPieChart } from "react-icons/im"
import { Context } from '../../../context/AppContext'
import "./style.css"

function AboutBox1Tile({ value, heading, logo }) {

    const { totalComplaint, resolvedComplaint, pendingComplaint } = useContext(Context)
    const [count, setCount] = useState(0)

    const counter = () => {
        var data;
        value === 0 ?
            data = totalComplaint :
            value === 1 ?
                data = resolvedComplaint :
                value == 2 ?
                    data = pendingComplaint : data = null

        const intervalId = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= (data - 1)) {
                    clearInterval(intervalId);
                }
                return prevCount + 1;
            });
        }, 10);
    };

    useEffect(() => {
        counter();
    }, [totalComplaint > 0]);



    return (
        <div className="aboutBox1TileContainer" >
            <div className="aboutBox1TileSection">
                <div className="aboutBox1TileCount" >{value === 3 ? 0 : count}</div>
                <div className="aboutBox1TileText">
                    <div className="aboutBox1TileHeading">{heading}</div>
                    {
                        (logo === 1) ? <BsBarChartLineFill className='aboutBox1TileLogo' /> :
                            (logo === 2) ? <BsFillPieChartFill className='aboutBox1TileLogo' /> :
                                (logo === 3) ? <FaChartSimple className='aboutBox1TileLogo' /> :
                                    (logo === 4) ? <ImPieChart className='aboutBox1TileLogo' /> : ""
                    }


                </div>
            </div>
            <div className="aboutBox1TileLine"></div>
        </div>
    )
}

export default AboutBox1Tile