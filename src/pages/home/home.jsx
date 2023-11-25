import React, {useState} from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Chart from '../../components/chart/Chart';
import BarChart from '../../components/chart/BarChart';
import { FaEye } from "react-icons/fa"; 
import LineChart from '../../components/chart/LineChart';
import PieChart from '../../components/chart/PieChart';
import { UserDataLine, UserDataLine2 } from '../../assets/data';
import Section1 from '../../components/Sections/Section1';
import Section2 from '../../components/Sections/Section2';
const Home = () => {
  
 
  return (
    <div className="flex h-screen bg-primary">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary">
       <Section1 />
       <Section2 />
      </main>
    </div>
  </div>
  )
}

export default Home
