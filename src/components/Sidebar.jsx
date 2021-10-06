import React from 'react'
import ImagenLogo from 'components/ImagenLogo';
import { Link } from 'react-router-dom';
import Ruta from 'components/RutaSidebar';


const Sidebar = () => {
    return (
        <nav className='hidden sm:flex sm:w-72 h-full border border-gray-300 flex-col bg-gray-50 p-4 m-4'>
                <Link to='/admin'>
                    <ImagenLogo/>
                </Link>
                <div className='my-8'>
                    <Ruta icono="fas fa-user" ruta="/admin/Perfil" nombre="Perfil"/>
                    <Ruta icono="fas fa-cart-arrow-down" ruta="/admin/Productos" nombre="Productos"/>
                    <Ruta ruta='/admin/Ventas' icono='fas fa-cash-register' nombre='Ventas'/>
                    <Ruta ruta='/admin/Usuarios' icono='fas fa-users' nombre='Usuarios'/>
                </div>
                <button>Cerrar Sesión</button>
        </nav>
        
    );
};
export default Sidebar;
