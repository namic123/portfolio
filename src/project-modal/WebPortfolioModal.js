import React from "react";
import login from "./task-img/login.png";
import { Image } from "@chakra-ui/react";
import signUp from "./task-img/sign-up.png";
import minihomepy from "./task-img/minihomepy.png";
import minihomepyList from "./task-img/minihomepy-list.png";
import minihomepyFavorite from "./task-img/minihomepy-favorite.png";
import minihomepyComment from "./task-img/minihomepy-comment.png";
import myPageMain from "./task-img/my-page-main.png";
import myPageUpdateValidate from "./task-img/my-page-update-validate.png";
import myPageUpdate from "./task-img/my-page-update.png";
import myPageFollow from "./task-img/my-page-follow.png";
import loginProfile from "./task-img/login-profile.png";
import boardProfile from "./task-img/board-profile.png";
import userReport from "./task-img/user-report.png";
import adminReport from "./task-img/admin-report.png";
import adminReportList from "./task-img/admin-report-list.png";
import adminReportPage from "./task-img/admin-report-page.png";

export function WebPortfolioModal() {
  return (
    <>
      <div className="modal-info">
        <h2 className="modal-info-heading">Summary</h2>
        <p className="modal-info-content">
          "나를 죽이지 못하는 고통은, 나를 더욱 더 강하게 해줄 뿐이다." <br />
          <br /> 니체의 이 불후의 명언은 제 삶의 모토이자 운동을 통해 실제로
          경험하고 체득한 교훈입니다
          <br />
          <br />
          운동을 통한 고통과 도전이 제 육체적, 정신적 강인함을 키운 것처럼,
          프로그래밍의 복잡한 문제들과 기술적인 도전 또한 저를 성장시키는 중요한
          요소로 자리잡았습니다.
          <br />
          <br />
          이 경험은 저에게 단순한 기술적 능력의 향상을 넘어서, 지속적인 개선과
          학습의 중요성을 깨닫게 해주었습니다. 코딩을 통해 저는 끊임없이 새로운
          도전을 마주하고, 각각의 문제를 해결함으로써 저 자신을 발전시키고
          있습니다. 이는 프로그래밍 기술뿐만 아니라, 창의적인 사고, 효과적인
          문제 해결, 그리고 팀워크와 같은 더 넓은 영역에서의 성장을 의미합니다.
          <br />
          <br />제 프로그래밍 여정은 끊임없는 학습과 도전의 연속입니다. 아직은
          부족한 것이 많지만,스스로가 정해놓은 길을 묵묵히 따라가면서 지속적으로
          성장하는 능숙한 개발자가 되겠습니다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Overview</h2>
        <p className="modal-info-content">
          포트폴리오 웹사이트는 제 개발 여정과 역량을 전시하는 취업용
          포트폴리오입니다. React를 사용하여 구축된 이 사이트는 제 자신에 대한
          소개, 포부, 기술 스택, 그리고 경험한 프로젝트들을 선보입니다.
          <br />
          <br />본 사이트에서는 제가 참여한 프로젝트들의 상세한 설명과 함께,
          소스코드 저장소와 개인 블로그로의 링크를 통해 제 기술적 실력과 생각을
          더 깊이 이해할 수 있습니다.
          <br />
          <br />이 웹사이트는 단순한 포트폴리오를 넘어, 제 개발 여정과 지속적인
          학습 과정을 보여주는 플랫폼입니다. 이 사이트에서 제 기술적 성장과
          프로젝트에 대한 열정을 발견할 수 있습니다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Skills</h2>
        <div className="modal-info-skills">
          <h4>Frontend:</h4>
          <p>HTML, CSS, JavaScript, React, ChakraUI</p>
        </div>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Repository</h2>
        <br />
        <h4>Github</h4>
        <div className="modal-info-content">
          URL:{" "}
          <a href="https://github.com/namic123/portfolio">
            https://github.com/namic123/portfolio
          </a>
        </div>
        <br />
        <br />{" "}
      </div>
    </>
  );
}
