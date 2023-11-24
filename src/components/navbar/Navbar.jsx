import React, {useState} from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
  
  return (
    <div className="navbar h-16 bg-primary flex items-center text-sm text-gray-500">
      <div className="wrapper w-full px-5 flex items-center justify-between">
        <div className="search flex items-center border border-transparent p-1 mx-auto lg:w-1/2 xl:w-1/3">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg 
           overflow-hidden">
            <div className="grid place-items-center h-full w-12 bg-secondary-blue  text-gray-300">
              <SearchOutlinedIcon fontSize="small" />
            </div>

            <input
              className="peer h-full w-full bg-secondary-blue outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="items flex items-center">
          <div className="item flex items-center mr-5 relative">
            <div className="notification-dot absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></div>
            <IconButton
              color="inherit"
             
              style={{ border: '1px solid #ddd', borderRadius: '30%', padding: '5px' }}
            >
              <NotificationsNoneOutlinedIcon fontSize="small" style={{ color: 'white' }} />
            </IconButton>
            <Popover
             
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="p-2">You have new notifications!</div>
            </Popover>
          </div>
          <div className="item flex items-center mr-5 relative">
            <div className="notification-dot absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></div>
            <IconButton
              color="inherit"
             
              style={{ border: '1px solid #ddd', borderRadius: '30%', padding: '5px' }}
            >
              <ChatBubbleOutlineOutlinedIcon fontSize="small" style={{ color: 'white' }} />
            </IconButton>
            <Popover
             
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className="p-2">You have new notifications!</div>
            </Popover>
          </div>
          <div className="item flex items-center mr-5 relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-8 h-8 rounded-md"
            />
            {/* Add your notification counter component here */}
          </div>
          {/* Add other items/icons here */}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
