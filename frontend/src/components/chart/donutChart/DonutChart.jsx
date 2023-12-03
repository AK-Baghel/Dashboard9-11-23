import React from "react";
import Chart from 'react-apexcharts';

function Donutchart({ heading, arr, data, colorArr, toggleMenu }) {

    return (
        <>
            <div className="chartContainer">
                <Chart
                    type="donut"
                    width={toggleMenu ? 250 : 300}
                    height={toggleMenu ? 250 : 300}
                    series={data}

                    options={{
                        labels: arr,
                        chart: {
                            background: '#1F2940',
                            foreColor: '#ffffff',

                        },
                        colors: colorArr,
                        title: {
                            text: heading,
                            style: { color: "white" },
                            align: "center",
                        },
                        legend: {
                            position: 'bottom'
                        },

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            showAlways: true,
                                            // formatter: () => '343',
                                            fontSize: 20,
                                            color: 'white',

                                        }
                                    }
                                }
                            }

                        },

                        dataLabels: {
                            enabled: true,
                        },

                        fill: {
                            colors: colorArr
                        }


                    }}

                />
            </div>

        </>
    );
}
export default Donutchart;