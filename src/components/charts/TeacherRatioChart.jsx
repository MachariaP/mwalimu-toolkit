import React from 'react';
import { Bar } from 'react-chartjs-2';
import { energeticPalette, defaultChartOptions } from '../../utils/chartConfig';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TeacherRatioChart = () => {
  const data = {
    labels: ['Recommended Ratio', 'Actual Ratio (Worst Case)'],
    datasets: [
      {
        label: 'Pupils per Teacher',
        data: [40, 77],
        backgroundColor: [energeticPalette.lightBlue, energeticPalette.orange],
        borderColor: [energeticPalette.blue, energeticPalette.orange],
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    ...defaultChartOptions,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Pupils',
          color: '#4A5568',
          font: { size: 14, weight: 'bold' },
        },
        grid: { color: '#E2E8F0' },
      },
      x: { grid: { display: false } },
    },
    plugins: { ...defaultChartOptions.plugins, legend: { display: false } },
  };

  return <Bar data={data} options={options} />;
};

export default TeacherRatioChart;
