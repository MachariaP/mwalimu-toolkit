export const energeticPalette = {
  blue: '#00A6A6',
  lightBlue: '#75B7B7',
  orange: '#E55B3C',
  yellowOrange: '#F28E13',
  yellow: '#F2E205',
  gray: '#A0AEC0',
};

export const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#4A5568',
        font: {
          size: 14,
          weight: '600',
        },
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleFont: { size: 16, weight: 'bold' },
      bodyFont: { size: 14 },
    },
  },
};
