import React, { useContext } from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DuoIcon from '@mui/icons-material/Duo';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from "react-router-dom";
import './sidebar.css'
import EventIcon from '@mui/icons-material/Event';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Sidebar = () => {
  return (
    <div className="flex">
    <div className="sidebar bg-secondary-blue flex-1 border-r
     min-h-screen w-48 text-center" >
      <div className="top h-16 flex items-center justify-center">
        <Link to="/" className="no-underline">
          <span className="logo text-sm text-white">Logo Here</span>
        </Link>
      </div>
    
      <div className="flex justify-center items-center">
        <ul className="list-none  m-0 p-0">
          <Link to="/" className="no-underline">
          <li className="flex items-center py-2  hover:bg-gray-200 mb-2">
            <DashboardIcon style={{ fontSize: 15, color:'white' }} />
            <span className="text-sm text-white ml-2">My Account</span>
          </li>
          </Link>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <WorkOutlineIcon  style={{ fontSize: 15, color:'white' }} />
            <span className=" text-sm text-white ml-2">My Adverts</span>
          </li>
          <Link to="/users/kanban" className="no-underline">
            <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
              <CreditCardIcon style={{ fontSize: 15, color:'white' }}  />
              <span className="text-sm text-white ml-2">My Projects</span>
            </li>
          </Link>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <Link to="/users/calendar">
              <AddCircleOutlineIcon style={{ fontSize: 15, color:'white' }} />
              <span className="text-sm text-white ml-2">Post a project</span>
            </Link>
          </li>
          <li className="flex items-center  py-2 hover-bg-gray-200 mb-2">
            <Link to="/users/zoom">
              <WorkOutlineIcon style={{ fontSize: 15, color:'white' }}  />
              <span className="text-sm text-white ml-2">My Jobs</span>
            </Link>
          </li>
          <li className="flex items-center  py-2 hover-bg-gray-200 mb-2">
            <AccountCircleOutlinedIcon  style={{ fontSize: 15, color:'white' }}  />
            <span className="text-sm text-white ml-2">Post a Job</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <ExitToAppIcon style={{ fontSize: 15, color:'white' }} />
            <span className="text-sm text-white ml-2">Applicants</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <ChatIcon style={{ fontSize: 15, color:'white' }} />
            <span className="text-sm text-white ml-2">Interviews</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <CheckCircleOutlineIcon style={{ fontSize: 15, color:'white' }}  />
            <span className="text-sm text-white ml-2">Shortlisted</span>
          </li>
          <li className="flex items-center  py-2 hover-bg-gray-200 mb-2">
            <ThumbUpIcon style={{ fontSize: 15, color:'white' }}  />
            <span className="text-sm text-white ml-2">My Votes</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <ThumbDownIcon style={{ fontSize: 15, color:'white' }}  />
            <span className="text-sm text-white ml-2">My Reviews</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
          <WorkOutlineIcon style={{ fontSize: 15, color: 'white' }} />
          <span className="text-sm text-white ml-2">Project</span>
          <AddCircleOutlineIcon style={{ fontSize: 15, color: 'white', marginLeft: '10px' }} />
        </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <VisibilityIcon style={{ fontSize: 15, color:'white' }}  />
            <span className="text-sm text-white ml-2">My WatchList</span>
          </li>
          <li className="flex items-center py-2 hover-bg-gray-200 mb-2">
            <EventIcon style={{ fontSize: 15, color:'white' }} />
            <span className="text-sm text-white  ml-2">Events</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default Sidebar;
