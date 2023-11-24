import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import ZoomPage from '../../components/Zoom/ZoomPage';
const Newfolder = () => {
  return (
    <div className="list font-poppins">
    <Sidebar/>
    <div className="listContainer font-poppins">
      <Navbar/>
     <ZoomPage />
    </div>
  </div>
  )
}

export default Newfolder
