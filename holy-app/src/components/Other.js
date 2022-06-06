import { Container, Row, Col } from "react-bootstrap";
import Other1 from "../assets/img/Other1.png";
import Other2 from "../assets/img/Other2.png";
import Other3 from "../assets/img/Other3.png";
import Other4 from "../assets/img/Other4.png";
import Other5 from "../assets/img/Other5.png";
import Other6 from "../assets/img/Other6.png";

const Other = () => {
  return (
    <div>
      <Container fluid className="Other">
        <div className="ErHeader">OTHER FIGHTERS</div>
        <Row className="OtherRow">
          <Col md={2}>
            <img src={Other1}></img>
            <div className="OtherTeks1">FRANCIS</div>
            <div className="OtherTeks2"> NGANOU</div>
          </Col>
          <Col md={2}>
            <img src={Other2}></img>
            <div className="OtherTeks1">CHARLES</div>
            <div className="OtherTeks2">OLIVIERA</div>
          </Col>
          <Col md={2}>
            <img src={Other3}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other4}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other5}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other6}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
        </Row>
        <Row className="OtherRow">
          <Col md={2}>
            <img src={Other1}></img>
            <div className="OtherTeks1">FRANCIS</div>
            <div className="OtherTeks2"> NGANOU</div>
          </Col>
          <Col md={2}>
            <img src={Other2}></img>
            <div className="OtherTeks1">CHARLES</div>
            <div className="OtherTeks2">OLIVIERA</div>
          </Col>
          <Col md={2}>
            <img src={Other3}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other4}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other5}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
          <Col md={2}>
            <img src={Other6}></img>
            <div className="OtherTeks1">ISRAEL</div>
            <div className="OtherTeks2">ADESANYA</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Other;
