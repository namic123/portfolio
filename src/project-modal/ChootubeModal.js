import React, { useEffect, useState } from "react";
import signUp from "./task-img/sign-up.png";
import login from "./task-img/login.png";
import minihomepy from "./task-img/minihomepy.png";
import loginProfile from "./task-img/login-profile.png";
import boardProfile from "./task-img/board-profile.png";

import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export function ChootubeModal() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMinihomepyModalOpen, setIsMinihomepyModalOpen] = useState(false);
  const [isLoginProfileModalOpen, setIsLoginProfileModalOpen] = useState(false);
  const [isBoardProfileModalOpen, setIsBoardProfileModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    if (selectedImage.includes("sign-up.")) {
      setIsSignUpModalOpen(true);
    } else if (selectedImage.includes("login.")) {
      setIsLoginModalOpen(true);
    } else if (selectedImage.includes("minihomepy.")) {
      setIsMinihomepyModalOpen(true);
    } else if (selectedImage.includes("login-profile.")) {
      setIsLoginProfileModalOpen(true);
    } else if (
      selectedImage.includes(
        "iVBORw0KGgoAAAANSUhEUgAAANkAAACwCAYAAACCRcvkAAAAAXNSR",
      )
    ) {
      setIsBoardProfileModalOpen(true);
    }
  };
  console.log(selectedImage);
  const handleCloseModal = (e) => {
    e.stopPropagation();
    if (selectedImage.includes("login.")) {
      setIsLoginModalOpen(false);
    }
    if (selectedImage.includes("sign-up.")) {
      setIsSignUpModalOpen(false);
    }
    if (selectedImage.includes("minihomepy.")) {
      setIsMinihomepyModalOpen(false);
    }
    if (selectedImage.includes("login-profile.")) {
      setIsLoginProfileModalOpen(false);
    }
    if (
      selectedImage.includes(
        "iVBORw0KGgoAAAANSUhEUgAAANkAAACwCAYAAACCRcvkAAAAAXNSR",
      )
    ) {
      setIsBoardProfileModalOpen(false);
    }
    setSelectedImage("");
  };

  return (
    <>
      <div className="modal-info">
        <h2 className="modal-info-heading">Summary</h2>
        <p className="modal-info-content">
          늘 비슷한 것만 추천하는 유튜브 알고리즘에 한계를 느낀다. 나만 아는
          재밌는, 유익한 유튜버를 모두에게 알리고 싶다. 나와 비슷한 관심사를
          가진 사람들의 알고리즘이 궁금하다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Overview</h2>
        <p className="modal-info-content">
          이 프로젝트는 유튜브 알고리즘의 한계를 극복하고 사용자 간의 고유한
          취향과 관심사를 공유할 수 있는 커뮤니티 플랫폼입니다. 유튜브의 기존
          추천 시스템이 종종 제한적이고 반복적인 콘텐츠를 제공하는 데 반해, 이
          플랫폼은 다양하고 풍부한 콘텐츠 발굴을 촉진합니다. 사용자들은 자신만의
          독특한 발견을 공유하고, 비슷한 관심사를 가진 다른 사용자들의 추천을
          탐색할 수 있습니다. 이는 유튜브 시청 경험을 개인화하고, 커뮤니티
          기반의 상호작용을 통해 새로운 콘텐츠를 발견하는 새로운 방식을
          제공합니다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Key Features</h2>
        <br />
        <h4> 개인화된 추천 공유</h4>
        <p className="modal-info-content">
          <span className="emphasis">*</span>사용자는 자신이 발견한 독특하고
          흥미로운 유튜브 콘텐츠를 공유할 수 있습니다.
        </p>
        <h4> 관심사 기반 커뮤니티</h4>
        <p className="modal-info-content">
          <span className="emphasis">*</span>비슷한 관심사를 가진 사용자들과
          정보를 교류하고 새로운 콘텐츠를 추천받을 수 있습니다.
        </p>
        <h4> 유저 중심의 인터페이스</h4>
        <p className="modal-info-content">
          <span className="emphasis">*</span>사용자 친화적인 디자인으로 누구나
          쉽게 참여하고 추천을 공유할 수 있습니다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Skills</h2>
        <div className="modal-info-skills">
          <h4>Frontend:</h4>
          <p>HTML, CSS, JavaScript, React, Axios, ChakraUI</p>
        </div>
        <div className="modal-info-skills">
          <h4>Backend:</h4>
          <p>Java, Spring-boot, MyBatis</p>
        </div>
        <div className="modal-info-skills">
          <h4>Database:</h4>
          <p>MariaDB</p>
        </div>
        <div className="modal-info-skills">
          <h4>Deployment:</h4>
          <p>AWS (EC2, S3, RDS)</p>
        </div>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Repository & Deployment URL</h2>
        <br />
        <h4>Github</h4>
        <div className="modal-info-content">
          Frontend:{" "}
          <a href="https://github.com/namic123/YoutubeCommunityReact">
            https://github.com/namic123/YoutubeCommunityReact
          </a>
          <br />
          Backend:{" "}
          <a href="https://github.com/namic123/YoutubeCommunitySpring">
            https://github.com/namic123/YoutubeCommunitySpring
          </a>
        </div>
        <h4>Deployment URL</h4>
        <div className="modal-info-content">
          URL: <a href="http://3.39.233.240:8082/">https://chootube.com/</a>
        </div>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">My Tasks in Project</h2>
      </div>
      <div className="modal-info-tasks">
        {/* 로그인 시작 */}
        <div className="project-task">
          <h3>1. 로그인</h3>
          <div
            className="project-task-box"
            onClick={() => {
              handleImageClick(login);
            }}
          >
            <Image className="project-task-images" src={login} />
            <div className="project-task-layer">
              <h2>확대</h2>
            </div>
            {isLoginModalOpen && (
              <div className="project-modal">
                <div className="project-modal-content">
                  <div
                    className="project-close-button"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </div>
                  <img src={selectedImage} alt="Modal" />
                </div>
              </div>
            )}
          </div>
          <h3>상세 설명</h3>
          <p>
            Spring Security 및 JWT 기반 로그인 시스템: 프로젝트에서 구현한
            로그인 시스템은 Spring Security와 JWT(JSON Web Token)를 기반으로
            하여 강화된 보안과 효율성을 제공합니다.
          </p>
          <br />
          <p>
            <span>1) 강화된 보안</span>
            <ul>
              <li>
                <h4>XSS 방지:</h4> HTTP Only 쿠키 사용으로 클라이언트 사이드
                스크립트 접근을 차단, XSS 공격으로부터 토큰 탈취를 방지합니다.
              </li>
              <li>
                <h4>안전한 토큰 전송 및 검증:</h4> JWT는 사용자 인증 정보를
                안전하게 인코딩하고, 서버에서 토큰의 유효성을 검증하여 인증의
                신뢰성을 제공합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>2) 무상태 인증</span>
            <ul>
              <li>
                <h4>서버 부하 감소:</h4> JWT를 사용한 무상태 인증 방식으로
                서버의 세션 상태 관리 부담을 줄입니다.
              </li>
              <li>
                <h4>통신 간소화:</h4> 브라우저의 자동 쿠키 관리를 통해
                클라이언트 측의 인증 토큰 관리 필요성을 제거합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>3) 표준화된 접근</span>
            <ul>
              <li>
                <h4>호환성 제공:</h4> JWT는 널리 인정받는 인증 표준으로, 다양한
                API와의 호환성을 제공합니다.
              </li>
            </ul>
          </p>
          {/* 로그인 끝 */}
        </div>
        <br />
        <hr />
        <br />
        {/* 회원가입 시작 */}
        <div className="project-task">
          <h3>2. 회원가입</h3>
          <div
            className="project-task-box"
            onClick={() => {
              handleImageClick(signUp);
            }}
          >
            <Image className="project-task-images" src={signUp} />
            <div className="project-task-layer">
              <h2>확대</h2>
            </div>
            {isSignUpModalOpen && (
              <div className="project-modal">
                <div className="project-modal-content">
                  <div
                    className="project-close-button"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </div>
                  <img src={selectedImage} alt="Modal" />
                </div>
              </div>
            )}
          </div>
          <h3>상세 설명</h3>
          <p>
            <span>1) 폼 유효성 검사</span>: 사용자 경험 중심의 설계로, 각 필드에
            최소 글자 수 제한 설정 (예: 아이디 최소 5글자, 비밀번호 최소 6글자).
          </p>
          <br />
          <p>
            <span>2) 정규식을 통한 입력 제한</span>: 아이디는 영소문자,
            비밀번호는 영문자/숫자/특수문자 조합, 이메일은 표준 형식으로 엄격히
            제한.
          </p>
          <br />
          <p>
            <span>3) 중복 및 조건 충족 확인</span>: 사용자 데이터의 정확성과
            안전성을 위해 아이디, 닉네임, 이메일 중복 체크 및 비밀번호 일치,
            형식 충족 여부 검증 필요.
          </p>
          <br />
          <p>
            <span>4) 가입 버튼 활성화 조건</span>: 모든 필드의 정확한 입력과
            중복/일치 확인 완료 시 가입 버튼 활성화.
          </p>
          <br />
          <p>
            <span>5) 비밀번호 암호화 및 저장</span>: 회원가입 완료 후 비밀번호는
            BCrypt로 암호화되어 데이터베이스에 저장, 개인 정보 보호 강화.
          </p>
          {/* 회원가입 끝 */}
        </div>
        <br />
        <hr />
        <br />
        {/* 미니홈피 시작 */}
        <div className="project-task">
          <h3>3. 미니홈피</h3>
          <div
            className="project-task-box"
            onClick={() => {
              handleImageClick(minihomepy);
            }}
          >
            <Image className="project-task-images" src={minihomepy} />
            <div className="project-task-layer">
              <h2>확대</h2>
            </div>
            {isMinihomepyModalOpen && (
              <div className="project-modal">
                <div className="project-modal-content">
                  <div
                    className="project-close-button"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </div>
                  <img src={selectedImage} alt="Modal" />
                </div>
              </div>
            )}
          </div>
          <h3>상세 설명</h3>
          <p>
            미니홈피는 각 사용자에게 개인화된 공간을 제공합니다. 사용자들은
            서로의 미니홈피를 방문하여 다양한 콘텐츠를 탐색하고 소통할 수
            있습니다.
          </p>
          <br />
          <p>
            <span>1) 홈 화면</span>
            <ul>
              <li>
                <h4>인기 및 최신 콘텐츠 표시:</h4> 홈 화면은 미니홈피 주인이
                추천한 영상 글 중 추천 수가 가장 높은 10개, 최신 글 10개, 그리고
                주인이 좋아하는 글 10개를 보여줍니다.
              </li>
              <li>
                <h4>개인화된 콘텐츠 제공:</h4> 사용자 개인의 취향과 활동을
                반영한 콘텐츠를 중점적으로 표시합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>2) 글 목록</span>
            <ul>
              <li>
                <h4>글 정렬 및 검색 기능:</h4> 미니홈피 주인의 모든 게시글을
                최신순, 추천순, 조회수순으로 정렬하여 볼 수 있으며, 특정 글을
                검색할 수 있는 기능을 제공합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>3) 내가 좋아하는 유튜버</span>
            <ul>
              <li>
                <h4>YouTube Data API 활용:</h4> 좋아하는 유튜버의 채널 ID를
                등록하면 해당 유튜버의 정보가 미니홈피에 표시됩니다. 이를 통해
                다른 사용자들도 홈피 주인의 관심사를 파악할 수 있습니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>4) 방명록</span>
            <ul>
              <li>
                <h4>상호작용의 장:</h4> 사용자들은 미니홈피에 방문하여 방명록을
                남길 수 있어, 소통의 장을 제공합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>5) BGM 설정</span>
            <ul>
              <li>
                <h4>개인화된 배경음악: </h4> 사용자는 자신이 좋아하는 유튜브
                영상의 링크를 사용하여 미니홈피의 배경음악을 설정할 수 있습니다.
              </li>
            </ul>
          </p>
          {/* 미니홈피 끝 */}
        </div>
        <br />
        <hr />
        <br />
        {/* 프로필 시작 */}
        <div className="project-task">
          <h3>4.사용자 프로필 & 팔로잉 & 신고기능</h3>
          <div
            className="project-task-box"
            onClick={() => {
              handleImageClick(loginProfile);
            }}
          >
            <Image className="project-task-images" src={loginProfile} />
            <div className="project-task-layer">
              <h2>확대</h2>
            </div>
            {isLoginProfileModalOpen && (
              <div className="project-modal">
                <div className="project-modal-content">
                  <div
                    className="project-close-button"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </div>
                  <img src={selectedImage} alt="Modal" />
                </div>
              </div>
            )}
          </div>
          <div
            className="project-task-box"
            onClick={() => {
              handleImageClick(boardProfile);
            }}
          >
            <Image className="project-task-images" src={boardProfile} />
            <div className="project-task-layer">
              <h2>확대</h2>
            </div>
            {isBoardProfileModalOpen && (
              <div className="project-modal">
                <div className="project-modal-content">
                  <div
                    className="project-close-button"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </div>
                  <img src={selectedImage} alt="Modal" />
                </div>
              </div>
            )}
          </div>
          <h3>상세 설명</h3>
          <p>
            미니홈피는 각 사용자에게 개인화된 공간을 제공합니다. 사용자들은
            서로의 미니홈피를 방문하여 다양한 콘텐츠를 탐색하고 소통할 수
            있습니다.
          </p>
          <br />
          <p>
            <span>1) 홈 화면</span>
            <ul>
              <li>
                <h4>인기 및 최신 콘텐츠 표시:</h4> 홈 화면은 미니홈피 주인이
                추천한 영상 글 중 추천 수가 가장 높은 10개, 최신 글 10개, 그리고
                주인이 좋아하는 글 10개를 보여줍니다.
              </li>
              <li>
                <h4>개인화된 콘텐츠 제공:</h4> 사용자 개인의 취향과 활동을
                반영한 콘텐츠를 중점적으로 표시합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>2) 글 목록</span>
            <ul>
              <li>
                <h4>글 정렬 및 검색 기능:</h4> 미니홈피 주인의 모든 게시글을
                최신순, 추천순, 조회수순으로 정렬하여 볼 수 있으며, 특정 글을
                검색할 수 있는 기능을 제공합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>3) 내가 좋아하는 유튜버</span>
            <ul>
              <li>
                <h4>YouTube Data API 활용:</h4> 좋아하는 유튜버의 채널 ID를
                등록하면 해당 유튜버의 정보가 미니홈피에 표시됩니다. 이를 통해
                다른 사용자들도 홈피 주인의 관심사를 파악할 수 있습니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>4) 방명록</span>
            <ul>
              <li>
                <h4>상호작용의 장:</h4> 사용자들은 미니홈피에 방문하여 방명록을
                남길 수 있어, 소통의 장을 제공합니다.
              </li>
            </ul>
          </p>
          <br />
          <p>
            <span>5) BGM 설정</span>
            <ul>
              <li>
                <h4>개인화된 배경음악: </h4> 사용자는 자신이 좋아하는 유튜브
                영상의 링크를 사용하여 미니홈피의 배경음악을 설정할 수 있습니다.
              </li>
            </ul>
          </p>
          {/* 미니홈피 끝 */}
        </div>
      </div>
    </>
  );
}
