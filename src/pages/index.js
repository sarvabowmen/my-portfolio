import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { SkillsSection } from '../components/SkillsSection' ;
import { InfoSection } from '../components/InfoSection' ;
import { homeObjOne } from '../components/InfoSection/Data';
import { heroObjOne } from '../components/HeroSection/Data';
import { skillsObjOne } from '../components/SkillsSection/Data';

const Home = () => {
    const [isOpen, setIsOpen ] = useState(false);
    
    const toggle= () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection { ...heroObjOne } />
            <SkillsSection id="skills" {... skillsObjOne} />
        </>
    )
}

export default Home
