import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './kanban.scss';
import KanbanBoard from '../../components/Kanban/KanbanBoard';
const Kanban = () => {
  return (
    <div className="list font-poppins">
    <Sidebar/>
    <div className="listContainer font-poppins">
      <Navbar/>
     <KanbanBoard />
    </div>
  </div>
  )
}

export default Kanban
