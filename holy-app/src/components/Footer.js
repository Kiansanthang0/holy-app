import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonPs from "../assets/img/ButtonPs.png";
import ButtonApple from "../assets/img/ButtonApple.png";
import FbIcon from "../assets/img/FbIcon.png";
import IgIcon from "../assets/img/IgIcon.png";
import TwitterIcon from "../assets/img/TwitterIcon.png";
import TtIcon from "../assets/img/TtIcon.png";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col lg={6}>
            <div className="download">
              <p className="Judul">Download </p>
              <p className="Judul2">HolyWings</p>
              <p className="Judul2">App</p>
              <p className="Judul3"> Now</p>
            </div>
            <div className="ParagrafFooter">
              <p>
                Since 2014, Holywings provides the experience of a unique atmosphere , beer houses, lounges, and nightclubs – professionally concepted and packaged in each Holywings outlets. Now available for your mobile device, with more
                than 250,000 total downloads.
              </p>
              <p>Register through our Mobile App first to start buy and watch the stream. Access and enjoy multitude of features specially bundled for Holypeople!</p>
            </div>
            <div className="AvailableFooter">
              <p>Available On</p>
            </div>
            <div className="AvailableButton">
              <Button variant="link">
                <img src={ButtonApple}></img>
              </Button>
              <Button variant="link">
                <img src={ButtonPs}></img>
              </Button>
            </div>
          </Col>
          <Col lg={3}>
            <div className="Menu">
              <div className="JudulMenu">Menu</div>
              <div className="SubMenu">
                <Link to="/Event" className="teksMenu">
                  <p>Event</p>
                </Link>
                <Link to="/Rankings" className="teksMenu">
                  <p>Ranking</p>
                </Link>
                <Link to="/Roster" className="teksMenu">
                  <p>Roster</p>
                </Link>
                <Link to="/News" className="teksMenu">
                  <p>News</p>
                </Link>
                <Link to="/Watch" className="teksMenu">
                  <p>Watch</p>
                </Link>
                <Link to="/Atlet" className="teksMenu">
                  <p>Career</p>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="Menu">
              <div className="JudulMenu">Stay Connected</div>
              <div className="SubMenu">
                <div className="Sosmed">
                  <img src={FbIcon}></img>
                  <p>Facebook</p>
                </div>
                <div className="Sosmed">
                  <img src={IgIcon}></img>
                  <p>Instagram</p>
                </div>
                <div className="Sosmed">
                  <img src={TwitterIcon}></img>
                  <p>Twitter</p>
                </div>
                <div className="Sosmed">
                  <img src={TtIcon}></img>
                  <p>TikTok</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
