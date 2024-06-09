import React, { useEffect, useState } from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Image from './img.jpg';
import Shape from './irregular.png';
import Avatar from './avatar.png';
import arrow from './downarrow.svg';
import aboutme from './users.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import dj from './images/django.png';
import Gsap from './images/gsap.png';
import reactlogo from './images/react.png';
import sql from './images/sql.png';
import python from './images/python.png';
import java from './images/java.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import mail from './images/email.png';
import menu from './images/image.png';
import Contact from './Contact';
import Pdf from './images/Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const handle = (i) => {
    if (i === 1) {
      window.location.href = 'https://www.linkedin.com/in/rahul-vudathu/';
    } else if (i === 2) {
      window.location.href = 'https://github.com/Rahul2405v';
    } else {
      window.location.href = 'mailto:rahulvudathu@gmail.com';
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const isMobileWidth = windowWidth <= 600;
      setIsMobile(isMobileWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    const scrollingElement = document.querySelector('.scrolling');
  if (scrollingElement) {
    const elementWidth = scrollingElement.scrollWidth;
    const viewportWidth = window.innerWidth;
    let x=4;
    if(isMobile) 
        x=3
    let y=-111
    if(isMobile){
    gsap.to(".scrolling", {
      x: -elementWidth,
      delay: 0,
      repeat: -1,
      ease: 'none',
      duration: 4 * (elementWidth / viewportWidth), // Adjust duration based on width ratio
      stagger: '0.1'
    });}
    else{
      gsap.to(".scrolling", {
        transform: 'translateX(-111%)',
        delay: 0,
        repeat: -1,
        ease: 'none',
        duration: 4,
        stagger: '0.1'
      });
    }
  }
    
    gsap.from(".avatar", {
      y: 150,
      opacity: 0,
      duration: 2
    });
    if(isMobile){
      gsap.from('.icon',{
        scale:0,
        duration:1,
        opacity:0,
      })
    }
    gsap.from('.icon',{
      scale:0,
      duration:1,
      opacity:0
    })
    gsap.from('.about p', {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.about p',
        start: 'top 90%',
        end: 'bottom 0%',
      },
    });
    gsap.from("p:not(subnav)", {
      x: -500,
      opacity: 0,
      duration: 2
    });
    gsap.from("h2", {
      x: 500,
      opacity: 0,
      duration: 2
    });
  });

  const scrolled = () => {
    var header = document.querySelector('.navbar');
    header.classList.toggle("fixed", window.scrollY > 0);
  };

  let open = true;
  const openit = () => {
    let x = document.getElementById('sub');
    if (open) {
      open = false;
      x.classList.add('add');
    } else {
      open = true;
      x.classList.remove('add');
    }
  };
  const handleTouch=()=>{
    const url = '#redirect';
    const link = document.createElement('a');
    link.href = url;
   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownload = () => {
    const url = Pdf;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rahul_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const redirectC=()=>{
    const url = '/Contact';
    const link = document.createElement('a');
    link.href = url;
   
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const displayNone=()=>{
    let x=document.getElementsByClassName('icon');
    x[0].style.display='none'
  }

  return (
    
      <>
        <div className='icon'><span className='close' onClick={displayNone}>X</span><hr /><h1>Email sent successfully</h1><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
          
        </div>
        
        <div className='main'>
          <div className='navbar ' onScroll={scrolled}>
            <a className='port'>Rahul</a>
            <div className='subnav' id='sub'>
              <a href='#about'>About me</a>
              <a href='#skills'>Skills</a>
              {isMobile ? <Link to='/Contact'>Contact</Link> : <a href='#redirect'>Contact me</a>}
            </div>
          </div>
        </div>
        <hr />
        <div className='content'>
          <div className='avatar'>
            <img src={Avatar} />
          </div>
        </div>
        <div>
        </div>
        <div className='divv'>
          <h2>I do code and
            and <br />make content<span className='gradient-text'> about it</span></h2><span className='spanned'>
            <p>I'm a college student with a passion for building engaging web experiences.<br /> I'm well-versed in front-end development, particularly React.js, and <br />always eager to tackle new challenges.</p></span></div>
        <div className='buttons butt'><button className='touch' onClick={handleTouch}>Get in Touch</button>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
        <div className='skills'>
          <div>
          </div>
        </div>
        <div className='about' id='about'>
          <h1>Get To Know More</h1>
          <h2>About me</h2>
          <p>
            Driven by curiosity and a thirst for knowledge, I embarked on my academic journey at Vellore Institute of Technology, AP Campus. Currently in my second year, this esteemed institution has provided a nurturing environment that fosters intellectual growth.
            From an early age, I have been captivated by the limitless possibilities of learning. Each new concept ignites a fire within me, fueling my desire to unravel the mysteries of the world around us. This innate curiosity propels me to explore diverse fields and embrace challenges.
            At VIT AP, I've had the privilege of being surrounded by brilliant minds from various backgrounds, facilitating engaging discussions and thought-provoking exchanges. These interactions have taught me to question conventions, think critically, and approach problems from multiple perspectives.
            Beyond academics, I actively seek opportunities to expand my horizons through workshops, seminars, and extracurricular activities. This allows me to broaden my understanding and cultivate a well-rounded personality.
            As I continue this journey of self-discovery and intellectual growth, I remain committed to embracing new challenges and pushing the boundaries of my knowledge. With each experience, I aspire to contribute positively to society and leave a lasting impact. </p>
        </div>
        <div className='skills' id='skills'>
          <div className='exp'>
            Explore My
          </div>
          <h1>Skill set</h1>
        </div>
        <div className='scrolling'>
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={reactlogo} />
          <img src={Gsap} />
          <img src={dj} />
          <img src={sql} />
          <img src={java} />
          <img src={python} />
          <div className='pad'></div>
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={reactlogo} />
          <img src={Gsap} />
          <img src={dj} />
          <img src={sql} />
          <img src={java} />
          <img src={python} />
        </div>
        <div className='web'>
          <p className='front'>
            <h1>FrontEnd </h1>
            In the frontend, I excel at building dynamic and interactive user interfaces with React. My experience encompasses components, state management, props, and lifecycles, allowing me to craft engaging user experiences.  For visual impact, I'm skilled in using GSAP, a powerful animation library, to create smooth and eye-catching animations. Additionally, I'm proficient in leveraging Tailwind CSS, a utility-first framework, to rapidly develop responsive and visually appealing UIs with low-level CSS classes.
          </p>
          <p className='back'>
            <h1>BackEnd </h1>
            On the backend, I possess a strong grasp of SQL, enabling me to effectively communicate with relational databases. This allows me to efficiently retrieve, manipulate, and store data. Furthermore, I'm comfortable working with Django, a high-level Python web framework. This expertise enables me to build robust backend applications that include user authentication, database interactions, and API development.
          </p>
        </div>
        <div className='contactinformation' id='redirect'>
          <div className='contactone contact'>
            <p className='hi'>&lt; hi &gt;</p>
            <h1>Contact me</h1>
            <p>I specialize in creating dynamic and engaging web experiences using React and GSAP. Contact me to discuss your project needs!</p>
            <p className='hi end'>&lt; /hi &gt;</p>
            <p onClick={redirectC} className='redirectContactpage'>{isMobile ? 'Let\'s Connect' : <></>}</p>
            <div className='last'>
              <span onClick={() => { handle(1) }}>Linkedin</span> | <span onClick={() => { handle(2) }}>Github </span>|<span> rahulvudathu@gmail.com</span>
            </div>
          </div>
          <div className='contactemail'>
            <Contact />
          </div>
        </div>
      </>
      
  );
}
