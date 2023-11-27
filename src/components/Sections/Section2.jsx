import React from 'react'
import BarChart from '../chart/BarChart'
import LineChart from '../chart/LineChart'
import { UserDataLine , UserDataLine2 } from '../../assets/data'
const Section2 = () => {
  return (
    <section className="flex-grow pr-6 pb-6 pl-6 bg-primary">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
       
    <div className="rounded-md shadow-md ">
  <h2 className="text-sm text-white mb-3 mr-2">Project Views</h2>
 <div className=' w-full h-full rounded-md shadow-md'
 style={{
  backgroundColor:'#56A973'
 }}
 ><BarChart data={UserDataLine} /></div>
      
</div>

      <div className="rounded-md shadow-md">
      <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Job Advertisments Views</h2>
    </div>
    <div className='h-full w-full' style={{
      backgroundColor:"#E65D60"
    }}>    <LineChart  data={UserDataLine}/>
    </div>

      </div>
      <div className="rounded-md shadow-md">
      <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Applications Received</h2>
    </div>
    <div className='w-full h-full rounded-md shadow-md' style={{
      backgroundColor:'#DDB02D'
    }}>
    <LineChart data={UserDataLine}/>
    </div>
      </div>
      <div className=" rounded-md shadow-md">
      <div className="flex items-center">
      <h2 className="text-sm text-white mb-3 mr-2">Expressions  Received</h2>
    </div>
    <div className='w-full h-full rounded-md shadow-md' 
    style={{
      backgroundColor:'#836BCD'
    }}>
    <LineChart  data={UserDataLine}/> 
    </div>
      </div>
    </div>
  </section>
  )
}

export default Section2
