import React, { useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import { useAuth0 } from '@auth0/auth0-react'
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';


const PrivateLayout = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const [loadinUserInformation, setLoadinUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      //1. pedir token a Auth0
      setLoadinUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-gestion-ventas`,
      });
      //2. Recibe token de Auth0 
      localStorage.setItem("token", accessToken);
      console.log("Info token;", accessToken);
      //3. Enviar token al backen
      await obtenerDatosUsuario(
        (response) => {
          console.log("responde datos usuario:", response);
          setUserData(response.data);
          setLoadinUserInformation(false);
        },
        (err) => {
          console.log("error", err);
          setLoadinUserInformation(false);
          logout({ returnTo: 'http://localhost:3000/admin' });

        });
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);


  if (isLoading || loadinUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />
  if (!isAuthenticated) {
    return loginWithRedirect()
  }

  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
        <Sidebar />
        <SidebarResponsive />
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;