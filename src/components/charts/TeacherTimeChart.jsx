import React from 'react';
import { Bar } from 'react-chartjs-2';
import { energeticPalette, defaultChartOptions } from '../../utils/chartConfig';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TeacherTimeChart = () => {
  const data = {
    labels: ['Time Allocation'],
    datasets: [
      {
        label: 'Direct Teaching',
        data: [40],
        backgroundColor: energeticPalette.blue,
        borderColor: energeticPalette.blue,
        borderWidth: 1,
      },
      {
        label: 'Administrative Tasks',
        data: [60],
        backgroundColor: energeticPalette.orange,
        borderColor: energeticPalette.orange,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    ...defaultChartOptions,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage of Time',
          color: '#4A5568',
          font: { size: 14, weight: 'bold' },
        },
        grid: { color: '#E2E8F0' },
      },
      y: {
        stacked: true,
        grid: { display: false },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TeacherTimeChart;
