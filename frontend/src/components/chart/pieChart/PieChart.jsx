import React from 'react'
import Chart from "react-apexcharts";
function PieChart() {
    return (
        <div className="chartContainer">
            <Chart
                type="pie"
                width={330}
                height={330}



                series={[10, 29, 3, 1, 12, 20]}

                options={{
                    title: {
                        text: "PieChart",
                        style: { color: "white" }
                    },
                    noData: { text: "Empty Data" },
                    // colors: ["#f90000", "#f0f"],
                    labels: ['Hindi', 'English', 'Math', 'Physics', 'Chemistry', 'Java'],
                    chart: {
                        background: '#1F2940',
                        foreColor: '#ffffff',

                    },
                    legend: {
                        position: 'bottom'
                    },
                    subtitle: {
                        text: "This is BarChart Graph",
                        // style: { color: "pink", fontSize: 8 }
                        // style: { fontSize: 18 },
                    },

                }}


            >
            </Chart>
        </div>
    )
}

export default PieChart