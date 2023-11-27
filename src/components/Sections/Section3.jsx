import React from 'react'
import LineChart from '../chart/LineChart'
import { UserDataLine2 } from '../../assets/data'
import PieChart from '../chart/CreateDoughnutData'
const Section3 = () => {
  return (
    <section className="flex-grow p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> 
    {/* Left Div */}
    <div className="bg-secondary-blue p-4 rounded-md shadow-md"> 
      <h2 className="text-sm font-semibold text-white mb-4">Track your Recruitment Activities</h2>
      <LineChart color={"#0A163B"} data={UserDataLine2} />
    </div>

    {/* Right Div */}
    <div className="bg-secondary-blue p-4 rounded-md shadow-md"> 
      <h2 className="text-sm font-semibold text-white mb-4">Viewer's IP address</h2>

      <div className="flex justify-center items-center">
        <PieChart />
      </div>
    </div>
  </div>
</section>
  )
}

export default Section3
