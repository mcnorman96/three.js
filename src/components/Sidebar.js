import React from 'react'
import { AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { HiOutlineMail  } from 'react-icons/hi';





const Sidebar = () => {
  return (
    <div className='sidebar fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <Sidebaricons icon="MN" text='Home' />
      <Divider />
      <Sidebaricons icon={<AiOutlineFundProjectionScreen size="22" />} text='Projects' />
      <Sidebaricons icon={<IoPerson size="22" />} text='About me' />
      <Sidebaricons icon={<HiOutlineMail size="20" />}  text='Contact'/>
      <Divider />
      
    </div>
  )
}

const Divider = () => <hr className="sidebar-hr" />;

const Sidebaricons = ({ icon, text = 'tooltip' }) => (
    <div className='sidebar-icon group'>
      {icon}
      <span class='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
);

export default Sidebar