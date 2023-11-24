import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import { hero } from '../../assets';
import Select from 'react-select';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    <div className="home font-sans bg-primary">
    <Sidebar />
    <div className="homeContainer bg-primary ">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-10 bg-primary ">
      {/* Left side */}
      <div className="w-full md:w-1/2 p-4">
         {/* Headings */}
         <div className="flex items-center mb-4">
          <h1 className="text-lg font-semibold text-white">Recent stats</h1>
          {/* Dropdown */}
          <div className="ml-auto">
          <Select
              options={options}
              placeholder="Select an option"
              styles={customStyles}
            />
          </div>
        </div>
        <div class="flex flex-wrap gap-3 justify-between ">
  <div class="w-full md:w-1/2 lg:w-5/12">
    <Widget title="Profile views of you"  subtitle={3500}
   value={30}
   colorCard="blue"
    />
  </div>
  <div class="w-full md:w-1/2 lg:w-5/12">
    <Widget title="Viewing time"  subtitle={"0.18 minutes"}
    value={70}
    colorCard="yellow"
    />
  </div>
  <div class="w-full md:w-1/2 lg:w-5/12">
    <Widget title="Return visitors"  subtitle={"1500"} 
    value={30}
    colorCard="yellow"
    />
  </div>
  <div class="w-full md:w-1/2 lg:w-5/12">
    <Widget title="New visitors"  subtitle={"2000"}
    colorCard="yellow"
       value={25}
    />
  </div>
</div>

      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 xs:w-1/2 md:w-1/2 bg-primary">
        <img
          src={hero}
          alt="Your Image"
          className="w-auto h-auto"
        />
      </div>
    </div>


        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (RFPs)" aspect={2 / 1} />
        </div>
</div>
</div>
  )
}

export default Home
