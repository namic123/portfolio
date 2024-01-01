import React, {useEffect, useRef, useState} from 'react';
import "./css/style.css";
import {Box, Image} from "@chakra-ui/react";
import homePic from "./img/KakaoTalk_20231228_142341381.jpg";
import mainPic from "./img/KakaoTalk_20231227_025533035-removebg.png";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";
import jsLogo from "./img/js-logo.png";
import reactLogo from "./img/react-logo.png";
import axiosLogo from "./img/axios-logo.png";
import chakraLogo from "./img/chakra-logo.png";
import project1 from "./img/project1.png";
import githubLogo from "./img/GitHub-Logo.png";
import tstoryLogo from "./img/tstoryLogo.png";
import javaLogo from "./img/java-logo.png";
import springBootLogo from "./img/springboot_logo.png";
import mybatisLogo from "./img/mybatis-logo.png";
import mariadbLogo from "./img/mariadb-logo.png";
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
    ScrollReveal().reveal('.home-content h1, .about-img, .brackets, .about-content' ,{ ...config, origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content .json-content', { ...config, origin: 'right' });
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
          <Image className="home-image" src={homePic} alt="" />
        </div>
        <div className="home-content">
          <h3>안녕하세요, 신입 풀스택 개발자</h3>
          <h1>박재성 <span>입니다.</span></h1>
          <h3 className="typed-js">저는, <span ref={el}></span></h3>
          <br/>
          <p>기술에 대한 호기심과 새로움을 향한 도전은 제가 코딩을 즐기는 이유입니다.</p>
          <p>창의적인 해결책을 찾는 과정은 저의 가장 큰 열정이며,</p>
          <p>이를 통해 스스로의 기술적 한계를 뛰어넘는 데 큰 영감을 얻습니다. </p>
          <br/>
          <p>협업은 서로의 아이디어를 나누고 성장하는 데 있어 가장 중요한 부분이라고 생각합니다.</p>
          <p>저의 열정이 팀과 프로젝트에 새로운 시각과 실질적인 개선을 가져올 수 있기를 기대합니다.</p>
          <p>함께 성공을 만들어가는 과정에서 제 능력을 최대한 발휘하겠습니다.</p>
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
          <p className="about-quotes">"나를 죽이지 못하는 고통은, 나를 더욱 더 강하게 해줄 뿐이다."</p>
          <p>니체의 이 불후의 명언은 제 삶의 모토이자 운동을 통해 실제로 경험하고 체득한 교훈입니다</p>
          <br/>
          <p>운동을 통한 고통과 도전이 제 육체적, 정신적 강인함을 키운 것처럼,</p>
          <p>프로그래밍의 복잡한 문제들과 기술적인 도전 또한 저를 성장시키는 중요한 요소로 자리잡았습니다.</p>
          <br/>
          <p>이 경험은 저에게 단순한 기술적 능력의 향상을 넘어서, 지속적인 개선과 학습의 중요성을 깨닫게 해주었습니다.</p>
          <p>코딩을 통해 저는 끊임없이 새로운 도전을 마주하고, 각각의 문제를 해결함으로써 저 자신을 발전시키고 있습니다.</p>
          <p>이는 프로그래밍 기술뿐만 아니라, 창의적인 사고, 효과적인 문제 해결, 그리고 팀워크와 같은 더 넓은 영역에서의 성장을 의미합니다.</p>
          <br/>
          <p>제 프로그래밍 여정은 끊임없는 학습과 도전의 연속입니다.</p>
          <br/>
          <p>아직은 부족한 것이 많지만, <br/> 스스로가 정해놓은 길을 묵묵히 따라가면서 지속적으로 성장하는 능숙한 개발자가 되겠습니다.</p>

          <br/>
        <br/>
          <br/>
          <div className="about-profile"><span className="brackets">&#123;</span></div>
          <br/>
          <div className="about-profile json-content"><span className="json-key"><span className="brackets">"</span>name<span className="brackets">"</span></span> : <span className="json-string"><span className="brackets">"</span>박재성<span className="brackets">"</span></span>,</div>
          <div className="about-profile json-content"><span className="json-key"><span className="brackets">"</span>age<span className="brackets">"</span></span> : <span className="json-integer">28</span> ,</div>
          <div className="about-profile json-content"><span className="json-key"><span className="brackets">"</span>address<span className="brackets">"</span></span> : <span className="json-string"><span className="brackets">"</span>인천광역시 서구<span className="brackets">"</span></span>,</div>
          <div className="about-profile json-content"><span className="json-key"><span className="brackets">"</span>phone<span className="brackets">"</span></span> : <span className="json-string"><span className="brackets">"</span>+82 010-8324-6149<span className="brackets">"</span></span>,</div>
          <div className="about-profile json-content"><span className="json-key"><span className="brackets">"</span>email<span className="brackets">"</span></span> : <span className="json-string"><span className="brackets">"</span>namic123123@naver.com<span className="brackets">"</span></span>,</div>
          <br/>
          <div className="about-profile"><span className="brackets">&#125;</span></div>
          {/*<a href="#" className="btn">Read More</a>*/}
        </div>
      </section>
      {/*Skill 화면*/}
      <section className="skills" id="skills"  ref={skillsRef}>
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-container">

          <div className="skills-box">
            <h3>Frontend</h3>
            <Image className="skill-logos" src={htmlLogo}/>
            <Image className="skill-logos" src={cssLogo}/>
            <Image className="skill-logos" src={jsLogo}/>
            <Image className="skill-logos" src={reactLogo}/>
            <Image className="skill-logos" src={axiosLogo} borderRadius={"20%"}/>
            <Image className="skill-logos chakraLogo" src={chakraLogo} borderRadius={"20%"} h={"10rem"}/>
          </div>
          <div className="skills-box">
            <h3>Backend</h3>
            <Image className="skill-logos" src={javaLogo}/>
            <Image className="skill-logos" src={springBootLogo} />
            <Image className="skill-logos" src={mybatisLogo} />
            <Image className="skill-logos" src={mariadbLogo} />
            <Image className="skill-logos" src={jwtLogo} />
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