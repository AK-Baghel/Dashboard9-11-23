import React from 'react'
import ReactApexChart from 'react-apexcharts';


class HorizontalBarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "",
                data: [488, 123, 43],
                // color: "#E76CD2"
            }],



            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    background: '#1F2940',
                    foreColor: '#ffffff',
                },
                // plotOptions: {
                //     bar: {
                //         borderRadius: 4,
                //         horizontal: true,
                //     }
                // },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['HR Executive', 'Manager', 'Not Resolve'],
                },

                colors: ['#BB800D', '#DEDFE3', '#00E396'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        distributed: true
                    }
                },
                title: {
                    text: "Level Of Grievance Resolution",

                    align: "center",
                    // fontSize: "4"

                    style: { fontSize: 13, color: "white" },
                },
            },


        };
    }

    render() {

        return (
            <>
                <div className="chartContainer">

                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={this.props.toggleMenu ? 480 : 500} height={this.props.toggleMenu ? 360 : 410} />
                    </div>

                </div>

            </>
        )
    }
}

export default HorizontalBarChart