import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/Form/ContactForm'
const MyAccount = () => {
  return (
    <>
    <div className="flex bg-primary font-poppins">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary p-6">
     <ContactForm />
      </main>
     
    </div>
  
  </div>
  <Footer />
  </>
  )
}

export default MyAccount
