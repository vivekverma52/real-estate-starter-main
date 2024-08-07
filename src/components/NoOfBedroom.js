import React, { useState, useContext } from 'react';

// importing icons
import { RiWallet3Fill, RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

// importing headless icons
import { Menu } from '@headlessui/react';

// importing house context
import { HouseContext } from '../components/HouseContext';

const NoOfBedroom = () => {
  const { bedrooms, setBedrooms } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const bedroomOptions = [
    { value: 'Price range(any)' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Fill className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{bedrooms}</div>
          <div className='text-[13px]'>Select bedroom</div>
        </div>
        {isOpen ? (
          <RiArrowUpLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {bedroomOptions.map((bedroom, index) => (
          <Menu.Item
            onClick={() => setBedrooms(bedroom.value)}
            className='cursor-pointer hover:text-purple-700 transition'
            as='li'
            key={index}
          >
            {bedroom.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default NoOfBedroom;
