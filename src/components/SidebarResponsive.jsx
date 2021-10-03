import React, {useState}from 'react'
import {Link} from 'react-router-dom';

const SibarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion]=useState(false)
    return (
        <div 
            className="md:hidden" 
            onClick={()=>{
                setMostrarNavegacion(!mostrarNavegacion)
                }}>
            <i className={`fas fa-${mostrarNavegacion ? 'times': 'bars'}  hover:text-yellow-600`}/>
            {mostrarNavegacion && 
            <ul>
            <SidebarResponsible nombre="Productos" ruta="/admin/Productos"/>
            <SidebarResponsible nombre="Ventas" ruta="/admin/Ventas"/>
            <SidebarResponsible nombre="Usuarios" ruta="/admin/Usuarios"/>
            </ul>
            }
        </div>
    );
};

const SidebarResponsible =({nombre, ruta})=>{
    return(
        <Link to= {ruta}>
        <li className="text-gray-200 border border-gray- p-1">{nombre}</li>
        </Link>

    );
};
export default SibarResponsive
