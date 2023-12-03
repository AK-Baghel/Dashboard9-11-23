import React from 'react'
import Chart from "react-apexcharts";
function PieChart({ toggleMenu }) {
    return (
        <div className="chartContainer">
            <Chart
                type="pie"
                width={toggleMenu ? 450 : 500}
                height={toggleMenu ? 400 : 450}

                series={[76, 57, 56, 61, 76, 85, 85, 45, 57, 56, 61]}

                options={{
                    title: {
                        text: "Type Of Grievance ",

                        align: "center",
                        // fontSize: "4"

                        style: { fontSize: 13, color: "white" },
                    },
                    noData: { text: "Empty Data" },
                    // colors: ["#f90000", "#f0f"],
                    labels: ['PF', 'ESI', 'Wages/Incentive', 'Attendance', 'Workplace Stress', 'Supervisor Behaviour', 'Health & Safety', 'Job Assignment', 'Complaint Again Co-Workers', 'Sexual Harassment', 'Work Related Issues'],
                    chart: {
                        background: '#1F2940',
                        foreColor: '#ffffff',

                    },
                    legend: {
                        position: 'bottom'
                    },

                    subtitle: {
                        text: "",
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