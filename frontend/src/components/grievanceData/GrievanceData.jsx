import React, { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { Context } from '../../context/AppContext';
import "./style.css"
import { LuLoader } from "react-icons/lu";

function GrievanceData() {
    const [fetchData, setFetchData] = useState([])
    const getData = async () => {
        try {
            const data = await fetch('http://localhost:8080/vamani');
            const result = await data.json();
            setFetchData([...result]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (

        fetchData.length ?
            <div className='masterContainer '>
                <div className="masterBox1">{`Grievance List`}</div>

                <div className="masterHeaderBox3">

                    <div className="masterHeaderBox3Th">
                        <div className="masterHeaderBox3ThItem1">#</div>
                        <div className="masterHeaderBox3ThItem2">Name</div>
                        <div className="masterHeaderBox3ThItem2">Emp No.</div>
                        <div className="masterHeaderBox3ThItem2">Gender</div>
                        <div className="masterHeaderBox3ThItem2">Unit</div>
                        <div className="masterHeaderBox3ThItem2">Reason</div>
                        <div className="masterHeaderBox3ThItem2">Status</div>
                        <div className="masterHeaderBox3ThItem2">Complaint</div>
                        {/* <div className="masterHeaderBox3ThItem3">Action</div> */}
                    </div>


                    <div className="masterHeaderBox3TrParent">
                        {
                            fetchData.map((value, index) => {
                                return (
                                    <div className="masterHeaderBox3Th " key={index}>
                                        <div className="masterHeaderBox3ThItem1 masterHeaderBox3Tr">{index + 1}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_emp_name}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_emp_no}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_emp_gender === 1 ? `Male` : `Female`}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_emp_unit}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_reason}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr masterHeaderBox3TrGreen">{value.comp_close}</div>
                                        <div className="masterHeaderBox3ThItem2 masterHeaderBox3Tr">{value.comp_emp_type}</div>



                                        {/* <div className="masterHeaderBox3ThItem3 masterHeaderBox3Tr masterHeaderBox3Action ">
                                        <FaEdit className='masterHeaderEdit' />
                                        <MdDelete className='masterHeaderDelete' onClick={() => { dataModal(value.comp_emp_name) }} />
                                    </div> */}
                                    </div>
                                )

                            })
                        }
                    </div>

                </div>
            </div> :
            <div className="loaderContainer">
                <LuLoader className='loaderIcon' />
                <div className='loaderText'>Please Wait...</div>
            </div>
    )
}

export default GrievanceData