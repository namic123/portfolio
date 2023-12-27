import React, {useEffect} from 'react';
import "./css/style.css";
import {Box, Image} from "@chakra-ui/react";
import mainPic from "./img/KakaoTalk_20231227_025533035-removebg.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBlog} from "@fortawesome/free-solid-svg-icons";

function App(props) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  return (
    <div className="container">
      <header className="header">
        <a href="#" className="logo">Porfolio</a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active" >Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* 홈화면 */}
      <section className="home" id="home">
        <div className="home-img">
          <Image src={mainPic} alt="" w={"22vw"} bg={"linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"} borderRadius={"50%"}
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
      <section className="about" id="about">
        <div className="about-img">
          <Image src={mainPic} alt="" w={"22vw"} bg={"linear-gradient(to top, #1F242D,#232833, #333841, #3f4654, #565c66, #7e8289)"} borderRadius={"50%"} boxShadow={"0 0 2rem black"}/>
        </div>
        <div className="about-content">
          <h2 className="heading">About<span>Me</span></h2>
          <h3>FullStack Developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, cum cupiditate excepturi explicabo facilis illo minima minus neque nesciunt obcaecati perferendis rerum sed sit tenetur vel vero voluptatum! Est, ratione.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi debitis ducimus ea enim eveniet ipsa iure labore magnam, modi molestias mollitia non optio qui quia reprehenderit tempora veniam voluptates?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, animi, atque beatae blanditiis commodi doloribus, esse et hic in incidunt molestiae porro possimus ratione temporibus tenetur ullam vel veritatis! Sint.</p>
        </div>
        <a href="#" className="btn">Read More</a>
      </section>
    </div>
  );
}

export default App;