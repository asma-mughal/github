import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });


  return (
    <div className="relative ">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
        
        </span>

        <span className="h-12 w-12 rounded-full">
          <img 
          className='rounded-full h-10 mt-1 w-10'
          src={"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="User" />
      
        </span>
        

      
      </Link>

      {/* <!-- Dropdown Start --> */}
      
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
