import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Section1 from '../../components/Sections/Section1';
import Section2 from '../../components/Sections/Section2';
import Section3 from '../../components/Sections/Section3';
const Home = () => {
  
 
  return (
    <>
    <div className="flex bg-primary font-poppins">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
       <Section1 />
       <Section2 />
       <Section3 />
      </main>
     
    </div>
  
  </div>
  <Footer />
  </>
  )
}

export default Home
