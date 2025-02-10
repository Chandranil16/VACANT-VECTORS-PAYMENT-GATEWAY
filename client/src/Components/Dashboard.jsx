import { Bar, Pie, Line, Scatter, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { motion } from 'framer-motion';
import 'chart.js/auto';

ChartJS.register(...registerables);

const Dashboard = () => {
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Transaction Volume',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 100, 55]
            }
        ]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Average Transaction Value',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55]
            }
        ]
    };

    const heatmapData = {
        labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia'],
        datasets: [
            {
                label: 'Payments by Region',
                data: [300, 200, 400, 150, 100, 250],
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2
            }
        ]
    };
    const areaData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Revenue Trends',
                data: [65, 59, 80, 81, 56, 55],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)'
            }
        ]
    };
    const paymentMethodsPieData = {
        labels: ['Bank Transfer', 'Net Banking', 'EMI', 'UPI', 'Credit/Debit Card'],
        datasets: [
            {
                label: 'Payment Methods',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                data: [300, 50, 100, 150, 200]
            }
        ]
    };

    const stackedBarData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Success',
                backgroundColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55]
            },
            {
                label: 'Failure',
                backgroundColor: 'rgba(255,99,132,1)',
                data: [35, 41, 20, 19, 44, 45]
            }
        ]
    };

    const donutData = {
        labels: ['Active Subscriptions', 'Cancelled Subscriptions', 'Expired Subscriptions'],
        datasets: [
            {
                label: 'Subscription Metrics',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                data: [300, 50, 100]
            }
        ]
    };

    const scatterData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'Customer Segmentation by Spend',
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: 65, y: 75 },
                    { x: 59, y: 49 },
                    { x: 80, y: 90 },
                    { x: 81, y: 29 },
                    { x: 56, y: 36 },
                    { x: 55, y: 25 }
                ]
            }
        ]
    };

    const realTimeLineData = {
        labels: ['1s', '2s', '3s', '4s', '5s', '6s'],
        datasets: [
            {
                label: 'Real-Time Payments',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55]
            }
        ]
    };

    const groupedBarData = {
        labels: ['Gateway 1', 'Gateway 2', 'Gateway 3', 'Gateway 4', 'Gateway 5'],
        datasets: [
            {
                label: 'Success Rate',
                backgroundColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56]
            },
            {
                label: 'Failure Rate',
                backgroundColor: 'rgba(255,99,132,1)',
                data: [35, 41, 20, 19, 44]
            }
        ]
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Payment Dashboard</h1>
            <div className="flex flex-wrap justify-center space-x-4 mb-8 gap-5">
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    View Transactions
                </button>
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Make Payment
                </button>
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Upcoming Transactions
                </button>
            </div>
            <h1 className="text-3xl font-bold mb-8 text-center">Payment Statistics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Transaction Volume</h2>
                    <Bar data={barData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Average Transaction Value</h2>
                    <Line data={lineData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Payments by Region</h2>
                    <Bar data={heatmapData} options={{ scales: { x: { stacked: true }, y: { stacked: true } } }} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Revenue Trends</h2>
                    <Line data={areaData} options={{ elements: { line: { tension: 0.4 } } }} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
                    <Pie data={paymentMethodsPieData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Payment Success vs Failure</h2>
                    <Bar data={stackedBarData} options={{ scales: { x: { stacked: true }, y: { stacked: true } } }} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Subscription Metrics</h2>
                    <Doughnut data={donutData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Customer Segmentation by Spend</h2>
                    <Scatter data={scatterData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Real-Time Payments</h2>
                    <Line data={realTimeLineData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Payment Gateway Performance</h2>
                    <Bar data={groupedBarData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Completed Payments</h2>
                    <Line data={lineData} />
                </motion.div>
                <motion.div
                    className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                >
                    <h2 className="text-lg font-semibold mb-2">Refunds</h2>
                    <Scatter data={scatterData} />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;