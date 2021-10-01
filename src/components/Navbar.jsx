import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'media/logoAnt.ico';
//import TriggerDarkMode from './TriggerDarkMode';

const Navbar = () => {
  return (
    <nav className='bg-gray-50 h-20'>
      <ul className='flex w-full justify-between my-3'>
        <li className='max-w-md w-full'><img className='mx-auto h-20 w-auto rounded-full p-3' src={Logo} alt='Workflow' /></li>
        <li>Bienvenidos al Modulo de Gestión de Ventas</li>
       <li className='px-3'>
          <Link to='/login'>
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
              Iniciar Sesión
            </button>
          </Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;
