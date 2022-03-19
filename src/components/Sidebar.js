import React from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'


const Sidebar = () => {
  return (
    <div className='sidebar fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <i>a</i>
      <i>a</i>
      <i>a</i>
      <i>a</i>
      <i>a</i>
      <i>a</i>
      <Sidebaricons icon={<AiOutlineFundProjectionScreen />} />
    </div>
  )
}

const Sidebaricons = ({ icon, text = 'tooltip' }) => (
    <div className='sidebar-icon'>
      {icon}
      <span class='sidebar-tooltip'>
        {text}
      </span>
    </div>
);

export default Sidebar