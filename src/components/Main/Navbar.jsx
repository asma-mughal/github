import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from './constants';
import styles from './styles';
import { navVariants } from './utils/motion';
const DropdownMenu = ({ isVisible }) => {
  const dropdownVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <motion.div
    className="absolute top-[48px] right-0 mt-2 w-[200px] bg-white border rounded 
    shadow-md overflow-hidden z-10"
      variants={dropdownVariants}
      initial={isVisible ? 'open' : 'closed'}
      animate={isVisible ? 'open' : 'closed'}
    ><ul className="p-4 space-y-2">
      {navLinks.map((i)=>{
        return (
<li className="text-gray-700 text-md capitalize hover:text-gray-900 cursor-pointer"
key={i.id}
>{i.href}</li>
        )
      })}
       </ul>    
    </motion.div>
  );
};
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return  (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative font-poppins`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.png"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-black">
        CUSTOMER RELATIONSHIP
      </h2>
      <img
        src="/menu.png"
        alt="menu"
        className="w-[24px] h-[24px] object-contain cursor-pointer text-black"
        onClick={toggleDropdown} 
      />
         <DropdownMenu isVisible={isDropdownOpen} />
  
    </div>
 
  </motion.nav> )
  
};

export default Navbar;
