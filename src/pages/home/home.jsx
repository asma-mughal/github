import React, {useState} from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import { hero } from '../../assets';
import Select from 'react-select';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from '../../components/Footer/Footer';
import Chart from '../../components/chart/Chart';
import BarChart from '../../components/chart/BarChart';
import { FaEye } from "react-icons/fa"; 
import LineChart from '../../components/chart/LineChart';
import PieChart from '../../components/chart/PieChart';
import { UserDataLine, UserDataLine2 } from '../../assets/data';
const Home = () => {
  const options = [
    { value: 'option1', label: '7 days' },
    { value: 'option2', label: '7 days' },
    { value: 'option3', label: '7 days' },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid grey', 
      borderRadius: 8,
      backgroundColor: '#010D25',
      boxShadow: 'none',

    }),
    indicatorSeparator: (provided, state) => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: 'grey',  // Text color
      
      borderRadius: '0 0px 0px 0',  // Adjust border radius as needed
      paddingLeft: '10px',  // Adjust padding as needed
      paddingRight: '10px',  // Adjust padding as needed
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: 'white',
    }),
  };
 
  return (
    <>
    <div className="home font-sans bg-primary">
    <Sidebar />
    <div className="homeContainer bg-primary ">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-10 bg-primary ">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-4">
          {/* Headings */}
          <div className="flex items-center mb-4 ">
            <h1 className="text-lg font-semibold text-white">Recent stats</h1>
            {/* Dropdown */}
            <div className="ml-auto">
              <Select options={options} placeholder="Select an option" styles={customStyles} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-between ">
          <div class="w-full lg:w-5/12">
    <Widget title="Profile views of you"  subtitle={3500}
   value={30}
   colorCard="blue"
    />
  </div>
  <div class="w-full lg:w-5/12">
    <Widget title="Viewing time"  subtitle={"0.18 minutes"}
    value={70}
    colorCard="yellow"
    />
  </div>
  <div class="w-full lg:w-5/12">
    <Widget title="Return visitors"  subtitle={"1500"} 
    value={30}
    colorCard="yellow"
    />
  </div>
  <div class="w-full lg:w-5/12">
    <Widget title="New visitors"  subtitle={"2000"}
    colorCard="yellow"
       value={25}
    />
  </div>
          </div>
          <div className="flex flex-col items-start  mt-4">
          <h2 className="text-lg font-semibold text-white mb-2">Activity these days</h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center mx-4">
          <CircularProgressbar
            value={6}  // Set your desired value here
            text="6%"  // Set your desired text here
            className='w-20 h-20'
              styles={buildStyles({
              textColor: '#fff',
              pathColor: '#DF5D26',
              trailColor: 'rgba(255, 255, 255, 0.2)',
              textSize:'20px',
             
            })}
          />
          <p className="text-xs text-center text-white mt-1">Job Seekers visitors</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <CircularProgressbar
            value={60}  // Set your desired value here
            text="60%"  // Set your desired text here
            className='w-20 h-20'
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#1DC524',
              trailColor: '#6F7170',
              textSize:'20px',
              strokeWidth: 5, 
            })}
          />
          <p className="text-xs  text-center text-white mt-1">Employe Visitors</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <CircularProgressbar
            value={31}  // Set your desired value here
            text="31%"  // Set your desired text here
            className='w-20 h-20'
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#9E9E9E',
              trailColor: 'white',
              textSize:'20px'
            })}
          />
          <p className="text-xs text-center text-white mt-1">Service Provider Visitors</p>
        </div>
        <div className="flex flex-col items-center mx-4">
          <CircularProgressbar
            value={7}  // Set your desired value here
            text="7%"  // Set your desired text here
            className='w-20 h-20'
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#FEBF43',
              trailColor: 'rgba(255, 255, 255, 0.2)',
              textSize:'20px'
            })}
          />
          <p className="text-xs  text-center text-white mt-1">Fan Visitors</p>
        </div>
      </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <img src={hero} alt="Your Image" className="w-auto h-auto max-w-full" />
        </div>
      </div>
      <div className="flex mt-10 ">
  <div style={{ flex: 1, maxWidth: '24%' ,padding: '0 9px' }}>
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Project Views</h2>
    </div>
    <BarChart />
  </div>
  <div style={{ flex: 1, maxWidth: '24%' ,  padding: '0 9px'}}>
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Job Advertisments Views</h2>
    </div>
    <LineChart color={"#E65D60"} data={UserDataLine}/>
  </div>
  <div style={{ flex: 1, maxWidth: '24%',  padding: '0 9px' }}>
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Applications Received</h2>
    </div>
    <LineChart color={"#DDB02D"} data={UserDataLine} />
  </div>
  <div style={{ flex: 1, maxWidth: '24%',  padding: '0 9px'}}>
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Expressions of interest Received</h2>
    </div>
    <LineChart color={"#836BCD"} data={UserDataLine} />
  </div>
</div>
<div className="flex flex-col md:flex-row w-full">
  <div className="w-full md:w-1/3 bg-secondary-blue">
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Track your Recruitment Activities</h2>
    </div>
    <LineChart color={"#1B54A9"} data={UserDataLine2}/>
  </div>
  <div className="w-full md:w-1/3 md:ml-auto bg-secondary-blue rounded-md ml-2 mr-24 flex items-center">
    <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">{/* Empty for centering */}</h2>
    </div>
    <PieChart />
  </div>
</div>
</div>

    </div>

    <Footer />
  </>
  )
}

export default Home
