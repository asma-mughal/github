import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/Tables/Table';
import './list.scss';
const List = () => {
  return (
    <div className="list font-poppins">
    <Sidebar/>
    <div className="listContainer font-poppins">
      <Navbar/>
      <Table/>
    </div>
  </div>
  )
}

export default List
