import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/img/logo-hw.png";
import FbIcon from "../assets/img/FbIcon.png";
import IgIcon from "../assets/img/IgIcon.png";
import TwitterIcon from "../assets/img/TwitterIcon.png";
import TtIcon from "../assets/img/TtIcon.png";

const LandingPage = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="bgLp">
        <div id="bege">
          <Container className="landingPage">
            <Row>
              <Col>
                <div className="welcome">WELCOME TO</div>
                <div className="hw">HOLYWINGS</div>
                <div className="hw">STREAMING</div>
                <div className="welcomeButton">
                  <Button variant="link">Watch Now</Button>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className="LpFooter">
            <Row>
              <Col sm={6}>
                <div className="DownloadCopyright">
                  <div>All Right Reserved</div>
                </div>
              </Col>
              <Col sm>
                <div className="DownloadSosmed">
                  <img src={FbIcon}></img>
                  <img src={IgIcon}></img>
                  <img src={TwitterIcon}></img>
                  <img src={TtIcon}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
