import React, {useEffect, useRef, useState} from 'react';
import "./css/style.css";
import {Box, Image} from "@chakra-ui/react";
import mainPic from "./img/KakaoTalk_20231227_025533035-removebg.png";
import project1 from "./img/project1.png";
import githubLogo from "./img/GitHub-Logo.png";
import tstoryLogo from "./img/tstoryLogo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBlog} from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

function App(props) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const repositoryRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const el = useRef(null);

  /* React 스크롤 Reveal*/
  useEffect(() => {
    const config = {
      distance: '80px',
      duration: 2000,
      delay: 100,
    };

    ScrollReveal().reveal('.home-content, .heading', { ...config, origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .repository-container, .project-box', { ...config, origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { ...config, origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { ...config, origin: 'right' });
  }, []);

  /* typed.js */
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:['새로운 도전에 적극적입니다.', '효율적인 문제 처리를 추구합니다.','팀워크와 협업을 중시합니다.'],
      typeSpeed:100,
      backSpeed:100,
      backDelay:1000,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 100;
      setIsSticky(shouldStick);
      const refs = [homeRef, aboutRef, repositoryRef, skillsRef, projectRef, contactRef];
      const currentSection = refs.find(ref => {
        const element = ref.current;
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        return window.scrollY >= offsetTop - 150 && window.scrollY < offsetTop + offsetHeight;
      });
      if (currentSection && currentSection.current) {
        setActiveSection(currentSection.current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <a href="#" className="logo">JaySung</a>
        <i className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></i>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} >Intro</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#project" className={activeSection === 'project' ? 'active' : ''}>Project</a>
          <a href="#repository" className={activeSection === 'repository' ? 'active' : ''}>Repository</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>
      {/* Intro 화면 */}
      <section className="home" id="home"  ref={homeRef}>
        <div className="home-img">
          <Image className="home-image" src={mainPic} alt="" />
        </div>
        <div className="home-content">
          <h3>안녕하세요, 신입 풀스택 개발자</h3>
          <h1>박재성 <span>입니다.</span></h1>
          <h3 className="typed-js">저는, <span ref={el}></span></h3>
          <p>새로운 기술에 대한 <span>도전을 즐기고</span></p>
          <p><span>효율적인 문제 해결을 추구</span>하는 신입 풀스택 개발자입니다.</p>
          <br/>
          <p>코딩을 통해 <span>창의적인 해결책을 찾는 것</span>이 제 열정이며,</p>
          <p>협업을 통해 더 <span>큰 가치를 창출</span>하고 서로의 <span>성장을 돕는 것</span>이 중요하다고 생각합니다.</p>
          <br/>
          <br/>
          <br/>
          <p className="home-content-footer">저와 함께 새로운 도전을 시작해보시겠습니까?</p>
          <div className="social-media">
            <a href="https://github.com/namic123"><i className='bx bxl-github' ></i></a>
            <a href="https://pjs-world.tistory.com/">
              <FontAwesomeIcon icon={faBlog} /></a>
          </div>
          <a href="#" className="btn">이력서 다운로드</a>
        </div>
      </section>
      {/*about 화면*/}
      <section className="about" id="about"  ref={aboutRef}>
        <div className="about-img">
          <Image className="about-image" src={mainPic} alt="" w={"22vw"} bg={"linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"} borderRadius={"50%"} boxShadow={"0 0 3rem black"}/>
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>FullStack Developer</h3>
          <div className="about-profile">이름: <span>박재성</span></div>
          <div className="about-profile">나이: <span>1996.09.15(만 27세)</span></div>
          <div className="about-profile">연락처: <span>+82 010.8324.6149</span></div>
          {/*<a href="#" className="btn">Read More</a>*/}
        </div>
      </section>
      {/*Skill 화면*/}
      <section className="skills" id="skills"  ref={skillsRef}>
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-container">

          <div className="skills-box">
            <i className='bx bxl-html5'></i>
            <h3>Front-End</h3>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="skills-box">
            <i className='bx bxl-html5'></i>
            <h3>Back-End</h3>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="skills-box">
            <i className='bx bxl-html5'></i>
            <h3>More</h3>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="skills-box">
            <i className='bx bxl-html5'></i>
            <h3>More</h3>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
      {/* Project 화면 */}
      <section className="project" id="project" ref={projectRef}>
        <h2 className="heading">Project <span>Experience</span></h2>
        <div className="project-container">
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer" >
              <h4>ChooTube</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
        </div>
      </section>
      {/*Repository 화면*/}
      <section className="repository" id="repository"  ref={repositoryRef}>
        <h2 className="heading">My <span>Repository</span></h2>
        <div className="repository-container">

          <div className="repository-box">
            <div className="repository-img">
              <Image  className="repository-image" src={githubLogo}/>
            </div>
            <h3>GitHub</h3>

            <a href="#" className="btn">Read More</a>
          </div>
          <div className="repository-box">
            <div className="repository-img">
              <Image  className="repository-image" src={tstoryLogo}/>
            </div>
            <h3>T-Story</h3>

            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
      {/*footer*/}
      <footer className="footer">
        <div className="footer-iconTop">
          <a href="#home"></a>
        </div>
      </footer>
    </div>
  );
}

export default App;