import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { energeticPalette, defaultChartOptions } from '../../utils/chartConfig';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DigitalLiteracyChart = () => {
  const data = {
    labels: ['Trained in Digital Literacy', 'Not Formally Trained'],
    datasets: [
      {
        data: [23.2, 76.8],
        backgroundColor: [energeticPalette.blue, energeticPalette.gray],
        borderColor: '#ffffff',
        borderWidth: 4,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    ...defaultChartOptions,
    cutout: '60%',
  };

  return <Doughnut data={data} options={options} />;
};

export default DigitalLiteracyChart;
