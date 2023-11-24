import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Text from '../../components/TextEditor/Text'
const TextEditor = () => {
  return (
    <div className="list font-poppins">
    <Sidebar/>
    <div className="listContainer font-poppins">
      <Navbar/>
      <Text />
    </div>
  </div>
  )
}

export default TextEditor
