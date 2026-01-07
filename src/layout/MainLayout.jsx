import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>   
      <main>
        <Home></Home>
      </main>
    </>
  );
};

export default MainLayout;