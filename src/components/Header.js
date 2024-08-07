import React from 'react';

//importing links
import { Link } from'react-router-dom';

//importing logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center'>
    {/*logo*/}
    <Link to="/">
    <img src={Logo} alt ="" />
    </Link>
    {/*buttons */}
    <div className='flex items-center gap-6'>
      <Link className='bg-purple-700 hover:bg-voilet-800 text-white px-4 py-3 rounded-lg transition' to=''>
      Login 
      </Link>
      <Link className='bg-green-700 hover:bg-voilet-800 text-white px-4 py-3 rounded-lg transition' to=''>
      SignUp
      </Link>
    </div>
    </div>
  </header>;
};

export default Header;
