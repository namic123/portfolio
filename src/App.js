import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";
import "./css/project-modal.css";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import homePic from "./img/KakaoTalk_20231228_142341381.jpg";
import mainPic from "./img/KakaoTalk_20231227_025533035-removebg.png";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";
import jsLogo from "./img/js-logo.png";
import reactLogo from "./img/react-logo.png";
import axiosLogo from "./img/axios-logo.png";
import chakraLogo from "./img/chakra-logo.png";
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import githubLogo from "./img/GitHub-Logo.png";
import tstoryLogo from "./img/tstoryLogo.png";
import javaLogo from "./img/java-logo.png";
import springBootLogo from "./img/springboot_logo.png";
import mybatisLogo from "./img/mybatis-logo.png";
import mariadbLogo from "./img/mariadb-logo.png";
import jwtLogo from "./img/jwt-logo.png";
import gitLogo from "./img/git-logo.png";
import ec2Logo from "./img/ec2-logo.png";
import s3Logo from "./img/s3-logo.png";
import rdsLogo from "./img/rds-logo.png";
import postmanLogo from "./img/postman-logo.png";
import myResume from "./resume/박재성.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faBlog } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import { ChootubeModal } from "./project-modal/ChootubeModal";
import { WebPortfolioModal } from "./project-modal/WebPortfolioModal";
import { Helmet } from "react-helmet";

function App(props) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const repositoryRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const el = useRef(null);

  /*Chakra UI Modal*/
  let chootubeModal = useDisclosure();
  let portfolioModal = useDisclosure();

  /* React 스크롤 Reveal*/
  useEffect(() => {
    const config = {
      distance: "80px",
      duration: 2000,
      delay: 100,
    };

    ScrollReveal().reveal(".home-content, .heading", {
      ...config,
      origin: "top",
    });
    ScrollReveal().reveal(
      ".home-img, .skills-container, .repository-container, .project-box",
      { ...config, origin: "bottom" },
    );
    ScrollReveal().reveal(
      ".home-content h1, .about-img, .brackets, .about-content",
      { ...config, origin: "left" },
    );
    ScrollReveal().reveal(".home-content p, .about-content .json-content", {
      ...config,
      origin: "right",
    });
  }, []);

  /* typed.js */
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "새로운 도전에 적극적입니다.",
        "효율적인 문제 처리를 추구합니다.",
        "팀워크와 협업을 중시합니다.",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
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
      const refs = [
        homeRef,
        aboutRef,
        repositoryRef,
        skillsRef,
        projectRef,
        contactRef,
      ];
      const currentSection = refs.find((ref) => {
        const element = ref.current;
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        return (
          window.scrollY >= offsetTop - 150 &&
          window.scrollY < offsetTop + offsetHeight
        );
      });
      if (currentSection && currentSection.current) {
        setActiveSection(currentSection.current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div>
        <Helmet>
          <title>박재성 웹 포트폴리오</title>
          <link
            rel="icon"
            href="%PUBLIC_URL%/shortcut-icon.png"
            type="image/png"
          />
        </Helmet>
        {/* 페이지 내용 */}
      </div>
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <a href="#" className="logo">
          ParkJaySung
        </a>
        <i
          className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        ></i>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Intro
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#project"
            className={activeSection === "project" ? "active" : ""}
          >
            Project
          </a>
          <a
            href="#repository"
            className={activeSection === "repository" ? "active" : ""}
          >
            Repository
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>
      {/* Intro 화면 */}
      <section className="home" id="home" ref={homeRef}>
        <div className="home-img">
          <Image className="home-image" src={homePic} alt="" />
        </div>
        <div className="home-content">
          <h3>안녕하세요, 신입 풀스택 개발자</h3>
          <h1>
            박재성 <span>입니다.</span>
          </h1>
          <h3 className="typed-js">
            저는, <span ref={el}></span>
          </h3>
          <br />
          <p>
            기술에 대한 호기심과 새로움을 향한 도전은 제가 코딩을 즐기는
            이유입니다.
          </p>
          <p>창의적인 해결책을 찾는 과정은 저의 가장 큰 열정이며,</p>
          <p>
            이를 통해 스스로의 기술적 한계를 뛰어넘는 데 큰 영감을 얻습니다.{" "}
          </p>
          <br />
          <p>
            협업은 서로의 아이디어를 나누고 성장하는 데 있어 가장 중요한
            부분이라고 생각합니다.
          </p>
          <p>
            저의 열정이 팀과 프로젝트에 새로운 시각과 실질적인 개선을 가져올 수
            있기를 기대합니다.
          </p>
          <p>
            함께 성공을 만들어가는 과정에서 제 능력을 최대한 발휘하겠습니다.
          </p>
          <br />
          <br />
          <p className="home-content-footer"></p>
          <div className="social-media">
            <a href="https://github.com/namic123">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://pjs-world.tistory.com/">
              <FontAwesomeIcon icon={faBlog} />
            </a>
          </div>
          <a href={myResume} className="btn" download>
            이력서 다운로드
          </a>
        </div>
      </section>
      {/*about 화면*/}
      <section className="about" id="about" ref={aboutRef}>
        <div className="about-img">
          <Image
            className="about-image"
            src={mainPic}
            alt=""
            w={"22vw"}
            bg={
              "linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"
            }
            borderRadius={"50%"}
            boxShadow={"0 0 3rem black"}
          />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>FullStack Developer</h3>
          <p className="about-quotes">
            "나를 죽이지 못하는 고통은, 나를 더욱 더 강하게 해줄 뿐이다."
          </p>
          <p>
            니체의 이 불후의 명언은 제 삶의 모토이자 운동을 통해 실제로 경험하고
            체득한 교훈입니다
          </p>
          <br />
          <p>
            운동을 통한 고통과 도전이 제 육체적, 정신적 강인함을 키운 것처럼,
          </p>
          <p>
            프로그래밍의 복잡한 문제들과 기술적인 도전 또한 저를 성장시키는
            중요한 요소로 자리잡았습니다.
          </p>
          <br />
          <p>
            이 경험은 저에게 단순한 기술적 능력의 향상을 넘어서, 지속적인 개선과
            학습의 중요성을 깨닫게 해주었습니다.
          </p>
          <p>
            코딩을 통해 저는 끊임없이 새로운 도전을 마주하고, 각각의 문제를
            해결함으로써 저 자신을 발전시키고 있습니다.
          </p>
          <p>
            이는 프로그래밍 기술뿐만 아니라, 창의적인 사고, 효과적인 문제 해결,
            그리고 팀워크와 같은 더 넓은 영역에서의 성장을 의미합니다.
          </p>
          <br />
          <p>제 프로그래밍 여정은 끊임없는 학습과 도전의 연속입니다.</p>
          <br />
          <p>
            아직은 부족한 것이 많지만, <br /> 스스로가 정해놓은 길을 묵묵히
            따라가면서 지속적으로 성장하는 능숙한 개발자가 되겠습니다.
          </p>

          <br />
          <br />
          <br />
          <div className="about-profile">
            <span className="brackets">&#123;</span>
          </div>
          <br />
          <div className="about-profile json-content">
            <span className="json-key">
              <span className="brackets">"</span>name
              <span className="brackets">"</span>
            </span>{" "}
            :{" "}
            <span className="json-string">
              <span className="brackets">"</span>박재성
              <span className="brackets">"</span>
            </span>
            ,
          </div>
          <div className="about-profile json-content">
            <span className="json-key">
              <span className="brackets">"</span>age
              <span className="brackets">"</span>
            </span>{" "}
            : <span className="json-integer">28</span> ,
          </div>
          <div className="about-profile json-content">
            <span className="json-key">
              <span className="brackets">"</span>address
              <span className="brackets">"</span>
            </span>{" "}
            :{" "}
            <span className="json-string">
              <span className="brackets">"</span>인천광역시 서구
              <span className="brackets">"</span>
            </span>
            ,
          </div>
          <div className="about-profile json-content">
            <span className="json-key">
              <span className="brackets">"</span>phone
              <span className="brackets">"</span>
            </span>{" "}
            :{" "}
            <span className="json-string">
              <span className="brackets">"</span>+82 010-8324-6149
              <span className="brackets">"</span>
            </span>
            ,
          </div>
          <div className="about-profile json-content">
            <span className="json-key">
              <span className="brackets">"</span>email
              <span className="brackets">"</span>
            </span>{" "}
            :{" "}
            <span className="json-string">
              <span className="brackets">"</span>namic123123@naver.com
              <span className="brackets">"</span>
            </span>
            ,
          </div>
          <br />
          <div className="about-profile">
            <span className="brackets">&#125;</span>
          </div>
        </div>
      </section>
      {/*Skill 화면*/}
      <section className="skills" id="skills" ref={skillsRef}>
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Frontend</h3>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={htmlLogo} />
              <div className="skill-logo-layer">
                <div>HTML</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={cssLogo} />
              <div className="skill-logo-layer">
                <div>CSS</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={jsLogo} />
              <div className="skill-logo-layer">
                <div>JavaScript</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={reactLogo} />
              <div className="skill-logo-layer">
                <div>React</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={axiosLogo} />
              <div className="skill-logo-layer">
                <div>Axios</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image
                className="skill-logos chakraLogo"
                src={chakraLogo}
                h={"10rem"}
              />
              <div className="skill-logo-layer">
                <div>Chakra</div>
                <div>UI</div>
              </div>
            </div>
          </div>

          <div className="skills-box">
            <h3>Backend</h3>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={javaLogo} />
              <div className="skill-logo-layer">
                <div>Java</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={springBootLogo} />
              <div className="skill-logo-layer">
                <div>SpringBoot</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={jwtLogo} />
              <div className="skill-logo-layer">
                <div>JWT</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={mybatisLogo} />
              <div className="skill-logo-layer">
                <div>myBatis</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={mariadbLogo} h={"8rem"} />
              <div className="skill-logo-layer">
                <div>MariaDB</div>
              </div>
            </div>
          </div>
          <div className="skills-box">
            <h3>etc.</h3>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={gitLogo} h={"10rem"} />
              <div className="skill-logo-layer">
                <div>GIT</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={ec2Logo} h={"10rem"} />
              <div className="skill-logo-layer">
                <div>EC2</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={s3Logo} h={"10rem"} />

              <div className="skill-logo-layer">
                <div>S3</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={rdsLogo} h={"10rem"} />
              <div className="skill-logo-layer">
                <div>RDS</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={githubLogo} h={"10rem"} />
              <div className="skill-logo-layer">
                <div>GitHub</div>
              </div>
            </div>
            <div className="skill-logo-box">
              <Image className="skill-logos" src={postmanLogo} h={"10rem"} />
              <div className="skill-logo-layer">
                <div>PostMan</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project 화면 */}
      <section className="project" id="project" ref={projectRef}>
        <h2 className="heading">
          Project <span>Experience</span>
        </h2>
        <div className="project-container">
          <div className="project-box">
            <Image src={project1} className="project-image" />
            <div className="project-layer">
              <h4>ChooTube</h4>
              <p>
                늘 비슷한 것만 추천하는 유튜브 알고리즘에 한계를 느낀다. 나만
                아는 재밌는, 유익한 유튜버를 모두에게 알리고 싶다. 나와 비슷한
                관심사를 가진 사람들의 알고리즘이 궁금하다.
              </p>
              <button className="project-btn" onClick={chootubeModal.onOpen}>
                더보기
              </button>
              {/*----ChooTube Modal 시작-------------------*/}
              <Modal
                onClose={chootubeModal.onClose}
                isOpen={chootubeModal.isOpen}
                size={"5xl"}
                bg={""}
              >
                <ModalOverlay />
                <ModalContent p={0}>
                  <ModalHeader bg={"#1f242d"}>
                    <div className="modal-header">ChooTube</div>
                  </ModalHeader>
                  <ModalCloseButton
                    color={"#dcdcdc"}
                    fontSize={"1.4rem"}
                    pt={3}
                    pr={2}
                  />
                  <ModalBody bg={"#323946"}>
                    <ChootubeModal />
                  </ModalBody>
                  <ModalFooter bg={"#1f242d"}>
                    <Button
                      fontSize="2rem"
                      variant={"link"}
                      onClick={chootubeModal.onClose}
                    >
                      닫기
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
          <div className="project-box">
            <Image src={project2} className="project-image" />
            <div className="project-layer">
              <h4>Web Portfolio</h4>
              <p>
                기술에 대한 호기심과 새로움을 향한 도전은 제가 코딩을 즐기는
                이유입니다.
              </p>
              <button className="project-btn" onClick={portfolioModal.onOpen}>
                더보기
              </button>
              {/*---- Portfolio Modal 시작-------------------*/}
              <Modal
                onClose={portfolioModal.onClose}
                isOpen={portfolioModal.isOpen}
                size={"5xl"}
                bg={""}
              >
                <ModalOverlay />
                <ModalContent p={0}>
                  <ModalHeader bg={"#1f242d"}>
                    <div className="modal-header">Web Portfolio</div>
                  </ModalHeader>
                  <ModalCloseButton
                    color={"#dcdcdc"}
                    fontSize={"1.4rem"}
                    pt={3}
                    pr={2}
                  />
                  <ModalBody bg={"#323946"}>
                    <WebPortfolioModal />
                  </ModalBody>
                  <ModalFooter bg={"#1f242d"}>
                    <Button
                      fontSize="2rem"
                      variant={"link"}
                      onClick={portfolioModal.onClose}
                    >
                      닫기
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </section>
      {/*Repository 화면*/}
      <section className="repository" id="repository" ref={repositoryRef}>
        <h2 className="heading">
          My <span>Repository</span>
        </h2>
        <div className="repository-container">
          <div className="repository-box">
            <div className="repository-img">
              <Image className="repository-image" src={githubLogo} />
            </div>
            <h3>GitHub</h3>
            <p>
              제 Github 저장소는 제 개인적인 작업물과 학습 과정에서 얻은 지식을
              기록하는 중요한 공간입니다. 프로젝트 소스 코드, 실험적인 코드
              조각, 그리고 개발 관련 학습 자료들이 이곳에 저장되어 있습니다.{" "}
              <br />
              <br /> 이 저장소는 제가 개발자로서 성장해 나가는 과정을 보여주는
              디지털 아카이브 역할을 합니다. 또한, 이곳에 저장된 코드와 문서들은
              향후 프로젝트에 대한 이해도를 높이고, 개발 기술을 다듬는 데 도움을
              줍니다.
            </p>
            <a href="https://github.com/namic123" className="btn">
              방문하기
            </a>
          </div>
          <div className="repository-box">
            <div className="repository-img">
              <Image className="repository-image" src={tstoryLogo} />
            </div>
            <h3>Tistory</h3>
            <p>
              저의 개인 블로그는 제가 개발 공부를하며 배운 지식과 경험을
              공유하는 공간입니다. 여기에서는 제가 공부한 개발 관련 주제들을
              정리하고, 이를 다른 사람들과 공유하고자 합니다. <br />
              <br /> 블로그 글들은 제가 공부한 개념을 명확히 이해하고 정리하는
              과정을 통해, 제 지식을 확장하고 다른 이들에게도 도움을 제공하는
              것을 목표로 합니다. 이 블로그는 저의 학습 여정을 기록하고, 개발
              커뮤니티와 지식을 공유하는 플랫폼으로 자리매김하고 있습니다.
            </p>
            <a href="https://pjs-world.tistory.com/" className="btn">
              방문하기
            </a>
          </div>
        </div>
      </section>
      <section className="contact" id="contact" ref={contactRef}>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <div className="contact-box">
          <p>
            새로운 환경과 도전에 빠르게 적응하는 것은 저의 가장 큰 장점 중
            하나입니다. <br /> 프로그래밍과 개발에 대한 제 열정은 어떠한
            어려움에도 굴하지 않고, 항상 최선의 결과를 만들어내는 데 도움이
            됩니다.
          </p>
          <br />
          <p>
            팀의 목표와 비전에 부합하는 개발자가 되기 위해, 지속적으로 학습하고,
            적응하며, 혁신을 추구하겠습니다. 제 끈기와 열정이 팀에 새로운 활력을
            불어넣고, 함께 성장할 수 있는 기회를 만들 것입니다.
          </p>
          <br />
          <p>
            만약 여러분의 팀이나 프로젝트에 지속적으로 도전하는 마인드와 열정이
            필요하다면, 저는 그 역할을 충실히 수행할 준비가 되어 있습니다. 저와
            함께라면 어떠한 어려움도 극복할 수 있으리라 확신합니다.
          </p>
          <br />
          <br />
          <h3>연락처:010-8324-6149</h3>
          <h3>이메일:namic123123@naver.com</h3>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </section>
      {/*/!*footer*!/*/}
      {/*<footer className="footer">*/}
      {/*  <div className="footer-iconTop">*/}
      {/*    <a href="#home">*/}
      {/*      <FontAwesomeIcon icon={faArrowUp} />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </div>
  );
}

export default App;
