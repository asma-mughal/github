import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import { UserDataLine } from "../../assets/data";

function LineChart({ label , color }) {
  const [userData, setUserData] = useState({
    labels: UserDataLine.map((data) => data.year),
    datasets: [
      {
        label: "7 days",
        data: UserDataLine.map((data) => data.userGain),
        backgroundColor: [
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  });
  const options = {
    scales: {
      x: {
        grid: {
          color: "", // Change x-axis grid color here
          borderDash: [2, 5], // Set borderDash for a dotted grid
        },
        ticks: {
          color: "white", // Change x-axis tick color here
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "", // Change y-axis grid color here,
          borderDash: [1, 1], // Set borderDash for a dotted grid
        },
        ticks: {
          color: "white", // Change y-axis tick color here
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Change legend label color here
          font: {
            size: 14, // Change legend label font size here
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderColor: 'white',
        borderWidth: 1,
        shadow: {
          color: 'rgba(255, 255, 255, 0.3)', // Color of the shadow
          offsetX: 3, // X offset of the shadow
          offsetY: 3, // Y offset of the shadow
          blur: 5, // Blur level of the shadow
        },
      },
    },
  };
  return  <div style={{
    backgroundColor:`${color}`,
    borderRadius: '10px',
    
  }}> <Line data={userData} options={options} />
  
  </div>;
}

export default LineChart;
