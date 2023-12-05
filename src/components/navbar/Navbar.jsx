import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DropdownMessage from './DropdownMessage';
import { GridSearchIcon } from '@mui/x-data-grid';
const Navbar = (props) => {
  
  return (
    <header className="sticky top-0 z-999 flex 
    w-full bg-primary-blue drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          

          
        </div>

        <div className="hidden  sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
             

              <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
    {/* Your icon component or image here */}
   <GridSearchIcon style={{color:'grey', fontSize:20}} />
  </div>
  <input
    type="text"
    placeholder="Search here"
    className="w-full bg-secondary-blue p-2
    
    text-xs rounded-md pl-9 focus:outline-none"
  />
</div>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-2 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
