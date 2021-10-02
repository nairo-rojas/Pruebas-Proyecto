import React from 'react';
//import Sidebar2 from 'components/Sidebar2';
import Sidebar from 'components/Sidebar';
import 'font-awesome/css/font-awesome.min.css';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Sidebar />
        <div>
        <FontAwesomeIcon icon={faUsers} />
        </div>
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;