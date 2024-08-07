import React from 'react';

//importing components
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';


const Home = () => {
  return <div className='min-h-[1800px]'>
    <Banner />
    <HouseList />
  </div>;
};

export default Home;
