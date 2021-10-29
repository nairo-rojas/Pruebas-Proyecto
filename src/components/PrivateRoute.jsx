import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
//import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
        const fetchAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: `api-autenticacion-gestion-ventas`,
            });
            
            localStorage.setItem("token", accessToken);
            console.log("Info token;",accessToken);
            
            await obtenerDatosUsuario(
                (response)=>{
                    console.log("responde", response);
            },
                (err)=>{
                    console.log("err", err);

            });
           

        };
        if (isAuthenticated) {
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading) return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
    if (!isAuthenticated) {
        return loginWithRedirect()
    }
    return <>{children}</>

    
    // return isAuthenticated ? (<>{children}</>) : (
    //     <div>
    //         <div className='text-9xl text-red-900'>No está autorizado para ver este sitio</div>)
    //         <Link to='/'>
    //             <span className='text-blue-500 font-bold'>Llévame al Home</span>
    //         </Link>
    //     </div>
    // )
};

export default PrivateRoute
