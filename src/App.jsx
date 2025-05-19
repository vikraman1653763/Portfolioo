import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import './App.css';
import Skill from './component/Skill';
import Projects from './component/Projects';
import MiniProjects from './component/MiniProject';
import Academic from './component/Academic';
import Service from './component/Service';
import Contact from './component/Contact';
import GitHubHeatmap from './component/GitHubHeatmap';
import AnimatedCursor from "react-animated-cursor";

function App() {
  const isMobile = window.innerWidth <=768;
  return (
    <div className='main'>
      {!isMobile &&(
        <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="00ffa6"
        outerAlpha={1}
        innerScale={.6}
        outerScale={4}
        outerStyle={{
          border: '3px solid #ff9900',
        }}
        innerStyle={{
          backgroundColor: '#00ffa6'
        }}
        />
      )}
    <Navbar/>
      <Hero/>
      <Skill/>
      <Academic/>
      <GitHubHeatmap/>
      <Projects/>
      <MiniProjects/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default App

