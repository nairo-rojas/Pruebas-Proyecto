import React from 'react'
import ImagenLogo from 'components/ImagenLogo';
import { Link } from 'react-router-dom';
import Ruta from 'components/RutaSidebar';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './PrivateComponent';



const Sidebar = () => {
    const { user, logout } = useAuth0();

  const cerrarSesion = () => {
    logout({ returnTo: 'http://localhost:3000/admin' });
    localStorage.setItem('token', null);
  };
    return (
        <nav className='hidden lg:flex lg:w-72 h-full border border-gray-300 flex-col bg-gray-50 p-4 m-4'>
                <Link to='/admin'>
                    <ImagenLogo/>
                </Link>

                <div className='my-8'>
                    <Ruta icono="fas fa-user" ruta="/admin/Perfil" nombre="Perfil" usuario={user}/>
                    <PrivateComponent roleList={['admin']}>
                    <Ruta icono="fas fa-cart-arrow-down" ruta="/admin/Productos" nombre="Productos"/>
                    </PrivateComponent>
                    <PrivateComponent roleList={['admin', 'vendedor']}>
                    <Ruta icono='fas fa-cash-register' ruta='/admin/Ventas' nombre='Ventas'/>
                    </PrivateComponent>
                    <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fas fa-users' ruta='/admin/Usuarios' nombre='Usuarios'/>
                    </PrivateComponent>
                </div>
                <div className='flex justify-center bg-gray-500 rounded-md p-2 text-white font-bold'>
                <button onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
                </div>
        </nav>
        
    );
};
export default Sidebar;
