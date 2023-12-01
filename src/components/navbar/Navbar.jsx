import React, {useState} from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import './navbar.scss';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
  
  return (
    <div>
  <div class="navbar h-50 border-b-0.5 border-gray-200 flex items-center text-red-500 text-sm">
    <div class="wrapper w-full px-20 flex items-center justify-between">
    <div class="search flex items-center border border-transparent p-3">
    <form className="max-w-md flex items-center mx-auto bg-primary rounded-full px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 h-full pl-12 pr-4 text-xs
                    text-black bg-secondary-blue rounded-md outline-none"
                />
            </div>
        </form>
        
      </div>
      <div class="items flex items-center">
        
        <div class="item flex items-center mr-2">
        <span class="icon w-30 h-30 rounded-full p-1
        border border-white text-white">
    <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 20 }} />
    <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
  </span>
        </div>
        <div class="item flex items-center mr-2">
        <span class="icon rounded-full p-1 border border-white text-white">
    <NotificationsNoneOutlinedIcon style={{ fontSize: 20 }} />
    <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
  
  </span>
        </div>
        <div class="item flex items-center relative">
        <img
        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        class="avatar w-30 h-30 max-w-full max-h-full rounded-full"
    />
          
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Navbar;
