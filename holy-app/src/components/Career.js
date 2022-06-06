import { Container, Row, Col } from "react-bootstrap";
import Wr1 from "../assets/img/Wr1.png";
import Wr2 from "../assets/img/Wr2.png";

const Career = () => {
  return (
    <div>
      <Container fluid>
        <div className="ErHeader">CAREER STATS & RECORDS</div>
        <Row className="Career1">
          <Col>
            <div>
              <div className="CareerTeks1">25</div>
              <div className="CareerTeks2">TOTAL WINS</div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="CareerTeks1">05</div>
              <div className="CareerTeks2">WINS BY DECISION</div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="CareerTeks1">25</div>
              <div className="CareerTeks2">WINS BY KNOCKOUT</div>
            </div>
          </Col>
        </Row>
        <Row className="Career1">
          <Col>
            <div>
              <div className="CareerTeks1">30</div>
              <div className="CareerTeks2">CAREER KNOCKOUT</div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="CareerTeks1">0</div>
              <div className="CareerTeks2">LOSE</div>
            </div>
          </Col>
          <Col className="mb-5">
            <div>
              <div className="CareerTeks1">05</div>
              <div className="CareerTeks2">DRAW</div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Col className="Wr">
          <Row>
            <Col md={4}>
              <div className="WrImg">
                <img src={Wr1}></img>
              </div>
            </Col>
            <Col md={4}>
              <div className="WrImg">
                <img src={Wr2}></img>
              </div>
            </Col>
            <Col className="Stats" md={4}>
              <div>
                <div className="TeksWr">WIN BY WAY</div>
              </div>
              <Row>
                <Col md={4}>
                  <div className="Persegi1"></div>
                </Col>
                <Col md={4}>
                  <div className="Persegi2"></div>
                </Col>
                <Col md={4}></Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="TeksStat1">KO/TKO</div>
                </Col>
                <Col md={4}>
                  <div className="TeksStat2">DEC</div>
                </Col>
                <Col md={4}>
                  <div className="TeksStat3">SUB</div>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="TeksStats1">20 (80%)</div>
                </Col>
                <Col md={4}>
                  <div className="TeksStats2">05 (20%)</div>
                </Col>
                <Col md={4}>
                  <div className="TeksStat3"> 0 (0%) </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <div className="ErHeader">RELATED NEWS</div>
      </Container>
    </div>
  );
};

export default Career;
