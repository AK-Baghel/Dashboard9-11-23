import React from 'react'
import Chart from 'react-apexcharts';


class DoubleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87]
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

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },


        };
    }

    render() {

        return (
            <>
                <div className="chartContainer">

                    <div id="chart">
                        <Chart options={this.state.options} series={this.state.series} type="bar" width={400} height={300} />
                    </div>
                </div>

            </>
        )
    }
}

export default DoubleBar