import { Container, Row, Col } from "react-bootstrap";
import BgBio from "../assets/img/BgBio.png";
import FbIcon from "../assets/img/FbIcon.png";
import IgIcon from "../assets/img/IgIcon.png";
import TwitterIcon from "../assets/img/TwitterIcon.png";

const Biography = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <div className="ErHeader  mt-5">BIOGRAPHY</div>
          <Col>
            <div className="BioImg">
              <img src={BgBio}></img>
            </div>
          </Col>
          <Col>
            <Row className="RowBio">
              <Col className="ColBio">
                <div className="TeksBio">
                  <div className="TeksBio1">STATUS</div>
                  <div className="TeksBio2">ACTIVE</div>
                </div>
              </Col>
            </Row>
            <Row className="RowBio">
              <Col>
                <div className="TeksBio">
                  <div className="TeksBio1">HOMETOWN</div>
                  <div className="TeksBio2">DUBLIN, IRELAND</div>
                </div>
              </Col>
            </Row>
            <Row className="RowBio">
              <Col md={6}>
                <div className="TeksBio">
                  <div className="TeksBio1">STYLE</div>
                  <div className="TeksBio2">BOXING</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="TeksBio">
                  <div className="TeksBio1">DIVISION</div>
                  <div className="TeksBio2">LIGHTWEIGHT</div>
                </div>
              </Col>
            </Row>
            <Row className="RowBio">
              <Col md={3}>
                <div className="TeksBio">
                  <div className="TeksBio1">WEIGHT</div>
                  <div className="TeksBio2">78 KG</div>
                </div>
              </Col>
              <Col md={3}>
                <div className="TeksBio">
                  <div className="TeksBio1">HEIGHT</div>
                  <div className="TeksBio2">188 CM</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="TeksBio">
                  <div className="TeksBio1">AGE</div>
                  <div className="TeksBio2 ">33 Y.0</div>
                </div>
              </Col>
            </Row>
            <Row className="RowBio">
              <Col md={6}>
                <div className="TeksBio">
                  <div className="TeksBio1">DEBUT</div>
                  <div className="TeksBio2">03 JANUARY 2017</div>
                </div>
              </Col>
              <Col md={6}>
                <div className="TeksBio">
                  <div className="TeksBio1">TEAM</div>
                  <div className="TeksBio2">SBG IRELAND</div>
                </div>
              </Col>
            </Row>
            <Row className="RowBio">
              <Col>
                <div className="TeksBio">
                  <div className="TeksBio1">SOCIAL MEDIA</div>
                  <div className="TeksBio2">
                    <div className="BioIcon">
                      <img src={FbIcon}></img>
                      <img src={IgIcon}></img>
                      <img src={TwitterIcon}></img>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Biography;
