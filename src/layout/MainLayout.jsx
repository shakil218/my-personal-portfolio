import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
// import Projects from '../pages/Projects';
import SkillsSection from '../pages/skills/SkillsSection';
import ProjectsSection from '../pages/projects/ProjectsSection';
import ExperienceSection from '../pages/experience/ExperienceSection';
import ServicesSection from '../pages/service/ServicesSection';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>   
      <main>
        <Home></Home>
        <About></About>
        <SkillsSection></SkillsSection>
        <ServicesSection></ServicesSection>
        <ExperienceSection></ExperienceSection>
        <ProjectsSection></ProjectsSection>
      </main>
    </>
  );
};

export default MainLayout;