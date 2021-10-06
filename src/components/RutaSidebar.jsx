import useActiveRoute from 'hooks/useActiveRoute';
import React from 'react'
import {Link} from 'react-router-dom';

const RutaSidebar = ({icono, ruta, nombre})=>{
    const isActive = useActiveRoute(ruta);
    return(
        <Link to={ruta}>
            <button className={`p-1 my-2 bg-${isActive? 'indigo':'gray'}-700 hover:bg-indigo-900 flex justify-items-start w-full text-white rounded-md`}>
            <i class={`${icono} w-10`}></i>
                {nombre}
            </button>
           </Link>
    );
};
 export default RutaSidebar;