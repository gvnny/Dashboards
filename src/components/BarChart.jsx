'use client'

import {useState, useEffect} from 'react'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = () => {
    const [chartData, setChartdata] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartdata({
            label:['Mon', 'Trues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets:[
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 15498, 54923, 65952, 16532],
                    borderColor: 'rgb(53, 162,235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },

                title: {
                    display: true,
                    text: 'Daile revenue'
                }
            }, 
            maintainAspectRatio: false,
            responsiva: true
        })
    }, [])

    return(
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[vh] m-auto border rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart