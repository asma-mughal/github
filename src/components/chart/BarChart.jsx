import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../../assets/data";
function BarChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Views of open projects",
        data: UserData.map((data) => data.userGain),
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
          color: "white", // Change y-axis grid color here,
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
  };
  return <div style={{backgroundColor:'#56A973',  borderRadius: '10px',}}>
    <Bar data={userData} options={options} /></div>;
}

export default BarChart;
