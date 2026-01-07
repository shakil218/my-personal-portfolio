import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
// import Projects from '../pages/Projects';
import SkillsSection from '../pages/skills/SkillsSection';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>   
      <main>
        <Home></Home>
        <About></About>
        <SkillsSection></SkillsSection>
        {/* <Projects></Projects> */}
      </main>
    </>
  );
};

export default MainLayout;