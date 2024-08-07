import React from 'react';

import { housesData } from '../data'; 

import { useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea} from 'react-icons/bi';

import { Link } from 'react-router-dom'

const PropertyDetails = () => {

  const { id } = useParams();
 
  const house = housesData.find((house)  => {
    return house.id === parseInt(id);
  })



  return <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2x1 font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-blue-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3x1 font-semibold text-yellow-500'>$ {house.price}</div>
      </div>

    <div className='flex flex-col items-start gap-8 lg:flex-row'>
      <div className='max-w-[760px]'>
        <div className='mb-8'>
          <img src={house.imageLg} alt='' />
        </div>
        <div className='flex gap-x-6 text-red-500 mb-6 '>
          <div className='flex gap-x-2 items-center'>
            <BiBed className='text-2x1' />
            <div>{house.bedrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiBath className='text-2x1'/>
            <div>{house.bathrooms}</div>
          </div>
          <div className='flex gap-x-2 items-center'>
            <BiArea className='text-2x1' />
            <div>{house.surface}</div>
          </div>
        </div>
        <div>{house.description}</div>
      </div>
      <div className='flex-1 bg-green-300 wg-full mb-8 b0rder border-gray-300 rounded-lg px-6 py-8'>
        <div className='flex items-center gap-x-4 mb-8'>
          <div classname='w-20 h-2- p-1 border-gray-300 rounded-full' >
            <img src={house.agent.image} alt="" />
          </div>
          <div>
            <div className='font-bold text-lg'>{house.agent.name}</div>
            <Link to='text=orange-700 text-sm'>
           
            </Link> 
          </div>
        </div>
        <form className='flex flex-col gap-y-4'>
          <input  className='border border-gray=800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm' type = 'text' placeholder='Name' />
          <input className='border border-gray=800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm' type = 'email' placeholder='Email' />
          <input className='border border-gray=800 focus:border-green-700 outline-none rounded w-full px-4 h-14 text-sm'type = 'date'  placeholder='Booking Date'/>
          <div className='flex'>
            <button className='bg-red-700 hover:bg-red-800 text-white rounded p-4 text-sm w-full transition'>BOOK NOW</button>
          </div>

        </form>
      </div>
    </div>
    </div>
  </section>
};

export default PropertyDetails;
