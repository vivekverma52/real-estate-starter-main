import React, { useState, useEffect, useContext } from 'react';

//importing icons
import { RiMapPinLine, RiArrowDownLine, RiArrowUpLine} from 'react-icons/ri';

//importing headless icons
import { Menu } from '@headlessui/react';

//importing house context
import { HouseContext } from '../components/HouseContext';


const CountryDropdown = () => { 
  const { country, setCountry, countries } = useContext(HouseContext);
  
  const  [ isOpen, setIsOpen ] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick= {() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left '>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text=[13px]'> Select Place</div>
          </div>
          { isOpen? ( <RiArrowUpLine className='dropdown-icon-secondary' /> ) :
         ( <RiArrowDownLine className='dropdown-icon-secondary' />
          )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
       {countries.map((country, index) => {
        return (
          <Menu.Item 
          onClick={() => setCountry(country)}
          className='cursor-pointer hover:text-purple-700 transition' as='li' key= {index}> 
          {country}
          </Menu.Item>
        )
       }
      )}
        
      </Menu.Items>
    </Menu>
  )
};

export default CountryDropdown;
