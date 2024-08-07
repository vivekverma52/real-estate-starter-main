import React, { useState, useEffect, useContext } from 'react';

//importing icons
import { RiHome5Line, RiArrowDownLine, RiArrowUpLine} from 'react-icons/ri';

//importing headless icons
import { Menu } from '@headlessui/react';

//importing house context
import { HouseContext } from '../components/HouseContext';


const PropertyDropdown = () => { 
  const { property, setProperty, properties } = useContext(HouseContext);

  
 const  [ isOpen, setIsOpen ] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick= {() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left '>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text=[13px]'> Select Place</div>
          </div>
          { isOpen? ( <RiArrowUpLine className='dropdown-icon-secondary' /> ) :
         ( <RiArrowDownLine className='dropdown-icon-secondary' />
          )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
       {properties.map((property, index) => {
        return (
          <Menu.Item 
          onClick={() => setProperty(property)}
          className='cursor-pointer hover:text-purple-700 transition' as='li' key= {index}> 
          {property}
          </Menu.Item>
        )
       }
      )}
        
      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;
