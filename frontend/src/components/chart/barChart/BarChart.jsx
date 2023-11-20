import React from 'react'
import Chart from "react-apexcharts"

import "./style.css"

function ChartBar({ data }) {
    return (
        <>
            <div className="chartContainer">
                <Chart className="chart"
                    type="bar"
                    width={380}
                    height={300}


                    series={[
                        {
                            name: "Resolve",
                            data: data,
                            // style: { color: "#00FFFF" },
                        },

                    ]}

                    options={{


                        // toolbar: {
                        //     show: false
                        // },

                        chart: {
                            background: '#1F2940',
                            toolbar: {
                                show: false,
                            },
                        },

                        title: {
                            text: "Grievance Resolution (No. Of Days Taken To Resolve)",

                            align: "center",
                            // fontSize: "4"

                            style: { fontSize: 13, color: "white" },
                        },



                        xaxis: {
                            tickPlacement: "on",
                            categories: [
                                "1st Day",
                                "2nd Day",
                                "3rd Day",
                                "4th Day",
                                "5th Day",
                                "More than 5 Days",
                                "Not Resolved",

                            ],
                            // title: {
                            //     text: "Social Media User",
                            //     style: { color: "#00FFFF", fontSize: "0.8rem" },

                            // },
                            labels: {
                                style: {
                                    fontSize: "14px",
                                    colors: "white",
                                    backgroundColor: "black",
                                },
                            },
                        },

                        yaxis: {
                            labels: {
                                formatter: (val) => {
                                    return `${val}`;
                                },
                                style: { colors: ["#E6EDF3"] },
                            },
                            // title: {
                            //     text: "User In (K)",
                            //     style: { color: "#00FFFF" },
                            // },


                        },

                        legend: {
                            show: true,
                            position: "right",
                            toolbar: {
                                show: false
                            },
                        },


                        // dataLabels: {
                        //     formatter: (val) => {
                        //         return `${val}K`;
                        //     },
                        //     style: {
                        //         colors: ["#f4f4f4"],
                        //         fontSize: 10,
                        //     },
                        // },

                    }}
                ></Chart>
            </div>

        </>
    )
}

export default ChartBar