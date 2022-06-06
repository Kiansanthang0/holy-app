import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonPs from "../assets/img/ButtonPs.png";
import ButtonApple from "../assets/img/ButtonApple.png";
import DownloadIphone from "../assets/img/DownloadIphone.png";
import FbIcon from "../assets/img/FbIcon.png";
import IgIcon from "../assets/img/IgIcon.png";
import TwitterIcon from "../assets/img/TwitterIcon.png";
import TtIcon from "../assets/img/TtIcon.png";

const Download = () => {
  return (
    <div>
      <Container fluid className="DownloadMain">
        <Row>
          <Col sm={6}>
            <div className="downloadHeader">
              <p className="Judul">Download </p>
              <p className="Judul2">HolyWings APP </p>
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
          <Col sm>
            <div className="Iphone">
              <img src={DownloadIphone}></img>
            </div>
          </Col>
        </Row>
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
  );
};

export default Download;
