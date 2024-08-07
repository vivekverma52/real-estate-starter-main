import React, { useState, useEffect, useContext } from 'react';

//importing icons
import { RiWallet3Fill, RiArrowDownLine, RiArrowUpLine} from 'react-icons/ri';

//importing headless icons
import { Menu } from '@headlessui/react';

//importing house context
import { HouseContext } from '../components/HouseContext';


const PriceRangeDropdown = () => { 
  const { price, setPrice } = useContext(HouseContext);

 const  [ isOpen, setIsOpen ] = useState(false);

 const prices = [{
  value:  'Price range (any)',
},
{
  value: '0 - 20000',
 },
{
  value: '20000 - 50000',
 },
 {
  value: '50000 - 150000',
 },
 {
  value: '150000 - 500000',
 }

]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick= {() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left '>
        <RiWallet3Fill
          className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text=[13px]'>Select Range</div>
          </div>
          { isOpen? ( <RiArrowUpLine className='dropdown-icon-secondary' /> ) :
         ( <RiArrowDownLine className='dropdown-icon-secondary' />
          )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
       {prices.map((price, index) => {
        return (
          <Menu.Item 
          onClick={() => setPrice(price.value)}
          className='cursor-pointer hover:text-purple-700 transition' as='li' key= {index}> 
          {price.value}
          </Menu.Item>
        )
       }
      )}
        
      </Menu.Items>
    </Menu>
  )
};

export default PriceRangeDropdown;
