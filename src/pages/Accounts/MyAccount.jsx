import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const MyAccount = () => {
  return (
    <>
    <div className="flex bg-primary">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
     
      </main>
     
    </div>
  
  </div>
  <Footer />
  </>
  )
}

export default MyAccount
