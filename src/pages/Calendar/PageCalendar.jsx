import React from 'react'
import GoogleCalendar from '../../components/google/Calendar'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const PageCalendar = () => {
  return (
    <div className="list font-poppins">
    <Sidebar/>
    <div className="listContainer font-poppins">
      <Navbar/>
    <GoogleCalendar />
    </div>
  </div>
  )
}

export default PageCalendar
