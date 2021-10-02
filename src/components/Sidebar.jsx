import React from 'react'
import ImagenLogo from 'components/ImagenLogo';
import { Link } from 'react-router-dom';
import Ruta from 'components/Ruta';
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
    return (
        <nav className='hidden md:flex md:w-72 h-full border border-gray-300 flex-col bg-gray-200 p-4'>
                <Link to='/admin'>
                    <ImagenLogo/>
                </Link>
                <div className='my-4'>
                <FontAwesomeIcon icon={faUsers} />
                    <Ruta icono="fas fa-user" ruta="/admin/Perfil" nombre="Productos"/>
                    <Ruta icono="fas fa-product-hunt" ruta="/admin/Productos" nombre="Productos"/>
                    <Ruta ruta='/admin/Ventas' icono='fas fa-cash-register' nombre='Ventas'/>
                    <Ruta ruta='/admin/Usuarios' icono='fas fa-users' nombre='Usuarios'/>
                </div>
                <button>Cerrar Sesión</button>
        </nav>
        
    );
};
export default Sidebar;
