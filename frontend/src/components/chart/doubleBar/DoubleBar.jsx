import React from 'react'
import Chart from 'react-apexcharts';


class DoubleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Male',
                data: [44, 55, 101, 98, 87, 44, 55, 101, 98, 87, 76]
            }, {
                name: 'Female',
                data: [76, 57, 56, 61, 76, 85, 85, 45, 57, 56, 61],
                color: "#FF7E47"
            }],

            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    background: '#1F2940',
                    foreColor: '#ffffff',
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        endingShape: 'rounded'
                    },
                },

                title: {
                    text: "Gender Wise Type of Grievance Solution",

                    align: "center",
                    style: { fontSize: 15, color: "white" },
                },

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['PF', 'ESI', 'Wages/Incentive', 'Attendance', 'Workplace Stress', 'Supervisor Behaviour', 'Health & Safety', 'Job Assignment', 'Complaint Again Co-Workers', 'Sexual Harassment', 'Work Related Issues'],
                },
                yaxis: {
                    title: {
                        text: 'Report',
                        style: { fontSize: 14, color: "white" }

                    }
                },
                fill: {
                    opacity: 1
                },
                // tooltip: {
                //     y: {
                //         formatter: function (val) {
                //             return "$ " + val + " thousands"
                //         }
                //     }
                // }
            },


        };
    }

    render() {

        return (
            <>
                <div className="chartContainer">

                    <div id="chart">
                        <Chart options={this.state.options} series={this.state.series} type="bar" width={this.props.toggleMenu ? 600 : 700} height={this.props.toggleMenu ? 320 : 400} />
                    </div>
                </div>

            </>
        )
    }
}

export default DoubleBar