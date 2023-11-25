import React,{useState} from "react";
import { Pie } from "react-chartjs-2";
import { UserData } from "../../assets/data";
function PieChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Views of open projects",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#DDB02D",
          "#836BCD",
          "#E65D60",
          "#5AB177",
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
  return <div style={{
    width:'300px'
  }}><Pie data={userData} /></div>;
}

export default PieChart;
