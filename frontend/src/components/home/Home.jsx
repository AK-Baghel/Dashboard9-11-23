import React, { useEffect, useState, useContext } from 'react'
import BarChart from '../chart/barChart/BarChart'
import AboutBox1Tile from './homeBox1Tile/HomeBox1Tile'
import PieChart from '../chart/pieChart/PieChart'

import "./style.css"
import Donutchart from '../chart/donutChart/DonutChart'
import DoubleBar from '../chart/doubleBar/DoubleBar'
import { Context } from '../../context/AppContext'
import { LuLoader } from "react-icons/lu";


function Home() {

    const { totalComplaint, resolvedComplaint, pendingComplaint, male, female, day1, day2, day3, day4, day5, moreThan5Days } = useContext(Context)

    return (


        totalComplaint ?
            <div className='homeContainer'>
                <div className="homeBox1">
                    <AboutBox1Tile value={0} heading={"Total Complaint"} logo={1} />
                    <AboutBox1Tile value={1} heading={"Resolved Complaint"} logo={2} />
                    <AboutBox1Tile value={2} heading={"Pending Complaint"} logo={3} />
                    <AboutBox1Tile value={3} heading={"Others"} logo={4} />
                </div>
                <div className="homeCharts">

                    <Donutchart heading={"Grievance Report"} arr={["Resolved", "Pending"]} data={[resolvedComplaint, pendingComplaint]} colorArr={['#08773C', '#FF0000']} />
                    <Donutchart heading={"Gender Wise Complaints"} arr={["Male", "Female"]} data={[male, female]} colorArr={['#371E9B', '#FF7E47']} />
                    <Donutchart heading={"Satifaction Level"} arr={["Satisfy", "Not Satisfy"]} data={[53, 5]} colorArr={['#E76CD2', '#7C7C7C']} />

                    <BarChart data={[day1, day2, day3, day4, day5, moreThan5Days, pendingComplaint]} />
                    <DoubleBar />

                    <PieChart />
                    <PieChart />
                    <PieChart />
                    <DoubleBar />
                </div>
            </div> :
            <div className="loaderContainer">
                <LuLoader className='loaderIcon' />
                <div className='loaderText'>Wait Please...</div>
            </div>
    )
}

export default Home