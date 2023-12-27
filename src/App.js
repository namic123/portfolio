import React, {useEffect, useRef, useState} from 'react';
import "./css/style.css";
import {Box, Image} from "@chakra-ui/react";
import mainPic from "./img/KakaoTalk_20231227_025533035-removebg.png";
import project1 from "./img/project1.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBlog} from "@fortawesome/free-solid-svg-icons";

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
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 100;
      setIsSticky(shouldStick);
      const refs = [homeRef, aboutRef, skillsRef, projectRef, contactRef];
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
        <a href="#" className="logo">Portfolio</a>
        <i className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></i>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} >Intro</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#project" className={activeSection === 'project' ? 'active' : ''}>Project</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>
      {/* Intro 화면 */}
      <section className="home" id="home"  ref={homeRef}>
        <div className="home-img">
          <Image className="home-image" src={mainPic} alt="" w={"22vw"} bg={"linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"} borderRadius={"50%"}
          boxShadow={"0 0 2rem var(--main-color)"}/>
        </div>
        <div className="home-content">
          <h3>안녕하십니까 저는</h3>
          <h1>박재성입니다</h1>
          <h3>저는 <span>풀스택 개발자입니다</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos dolore dolorum eaque error nulla quos sint suscipit. Beatae dicta dolor excepturi libero magni nesciunt nostrum officiis provident, tempora veritatis.</p>
          <div className="social-media">
            <a href="#"><i className='bx bxl-github' ></i></a>
            <a href="#">
              <FontAwesomeIcon icon={faBlog} /></a>
          </div>
          <a href="#" className="btn">이력서 다운로드</a>
        </div>
      </section>
      {/*about 화면*/}
      <section className="about" id="about"  ref={aboutRef}>
        <div className="about-img">
          <Image className="about-image" src={mainPic} alt="" w={"22vw"} bg={"linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"} borderRadius={"50%"} boxShadow={"0 0 2rem black"}/>
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>FullStack Developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, cum cupiditate excepturi explicabo facilis illo minima minus neque nesciunt obcaecati perferendis rerum sed sit tenetur vel vero voluptatum! Est, ratione.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi debitis ducimus ea enim eveniet ipsa iure labore magnam, modi molestias mollitia non optio qui quia reprehenderit tempora veniam voluptates?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, animi, atque beatae blanditiis commodi doloribus, esse et hic in incidunt molestiae porro possimus ratione temporibus tenetur ullam vel veritatis! Sint.</p>
          <a href="#" className="btn">Read More</a>
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
      <section className="project" id="project"  ref={projectRef}>
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="project-container">
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer" >
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="project-box">
            <Image src={project1}  className="project-image"/>
            <div className="project-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid aperiam, assumenda blanditiis commodi dolore esse, explicabo impedit ipsa nam, pariatur porro quam quibusdam quidem rem repudiandae sunt totam vel.</p>
              <a href="http://3.39.233.240:8082/"><i className='bx bx-link-external' ></i></a>
            </div>
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