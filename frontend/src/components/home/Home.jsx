import React, { useEffect, useState, useContext } from 'react'
import BarChart from '../chart/barChart/BarChart'
import AboutBox1Tile from './homeBox1Tile/HomeBox1Tile'
import PieChart from '../chart/pieChart/PieChart'

import "./style.css"
import Donutchart from '../chart/donutChart/DonutChart'
import DoubleBar from '../chart/doubleBar/DoubleBar'
import { Context } from '../../context/AppContext'
import { LuLoader } from "react-icons/lu";
import HorizontalBarChart from '../chart/horizontalBarChart/HorizontalBarChart'


function Home({ toggleMenu }) {

    const { totalComplaint, resolvedComplaint, pendingComplaint, male, female, day1, day2, day3, day4, day5, moreThan5Days } = useContext(Context)

    return (


        totalComplaint ?
            <div className='homeContainer'>
                <div className="homeBox1">
                    <AboutBox1Tile toggleMenu={toggleMenu} value={0} heading={"Total Complaint"} logo={1} />
                    <AboutBox1Tile toggleMenu={toggleMenu} value={1} heading={"Resolved Complaint"} logo={2} />
                    <AboutBox1Tile toggleMenu={toggleMenu} value={2} heading={"Pending Complaint"} logo={3} />
                    <AboutBox1Tile toggleMenu={toggleMenu} value={3} heading={"Others"} logo={4} />
                </div>
                <div className="homeCharts">

                    <Donutchart toggleMenu={toggleMenu} heading={"Grievance Report"} arr={["Resolved", "Pending"]} data={[resolvedComplaint, pendingComplaint]} colorArr={['#08773C', '#FF0000']} />
                    <Donutchart toggleMenu={toggleMenu} heading={"Gender Wise Complaints"} arr={["Male", "Female"]} data={[male, female]} colorArr={['#371E9B', '#FF7E47']} />
                    <Donutchart toggleMenu={toggleMenu} heading={"Satifaction Level"} arr={["Satisfy", "Not Satisfy"]} data={[53, 5]} colorArr={['#E76CD2', '#7C7C7C']} />
                    <Donutchart toggleMenu={toggleMenu} heading={"Origin"} arr={["HR", "UP", "Other"]} data={[35, 25, 55]} colorArr={['#58BDFF', '#FFE15D', '#00DB8F']} />

                    <BarChart toggleMenu={toggleMenu} data={[day1, day2, day3, day4, day5, moreThan5Days, pendingComplaint]} />
                    <DoubleBar toggleMenu={toggleMenu} />

                    <HorizontalBarChart toggleMenu={toggleMenu} />

                    <PieChart toggleMenu={toggleMenu} />


                </div>
            </div> :
            <div className="loaderContainer">
                <LuLoader className='loaderIcon' />
                <div className='loaderText'>Please Wait...</div>
            </div>
    )
}

export default Home