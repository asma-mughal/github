import React from 'react'
import Widget from '../widget/Widget'
import Select from 'react-select';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { hero } from '../../assets';
const Section1 = () => {
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
    <section className="flex-grow p-6 bg-primary">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Div */}
        <div className=" p-6 rounded-md shadow-md">
        <div className="flex items-center mb-4 ">
            <h1 className="text-lg font-semibold text-white">Recent stats</h1>
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
                <div className="flex flex-col items-start  mt-10">
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

        {/* Right Div */}
        <div className="bg-primary rounded-md shadow-md">
  <img src={hero} alt="Your Image" className="w-full pl-6 h-10/12 object-cover" />
</div>
      </div>
  </section>
  )
}

export default Section1
