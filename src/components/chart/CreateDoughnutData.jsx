import React from 'react';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ['United Kingdom', 'Ireland', 'India', 'Others/Unknown'],
  datasets: [
    {
      data: [6, 48, 16, 15],
      backgroundColor: ['#8A70D6', '#F3C130', '#FF6666', '#5AB177'],
      borderWidth: 1,
      radius: '100%',
    },
  ],
};

const customTooltips = (tooltipModel) => {
  let tooltipEl = document.getElementById('custom-tooltip');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'custom-tooltip';
    tooltipEl.innerHTML = '<div></div>';
    document.body.appendChild(tooltipEl);
  }

  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add('no-transform');
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  if (tooltipModel.body) {
    const bodyLines = tooltipModel.body.map(getBody);

    // Use the first line as the label and display dots as labels
    const label = bodyLines[0][0];
    const dots = label.split('').map(() => '•').join('');

    const innerHtml = '<div>' + dots + '</div>';
    tooltipEl.innerHTML = innerHtml;
  }

  const position = this._chart.canvas.getBoundingClientRect();

  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
};

const options = {
  plugins: {
    legend: {
      position: 'right',
      title: {
        display: true,
        text: '60 of 100 Done',
        font: { family: 'Helvetica Neue' },
      },
    },
    tooltip: {
      enabled: false,
      custom: customTooltips,
    },
  },
};

function CreateDoughnutData() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CreateDoughnutData;
