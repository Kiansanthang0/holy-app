import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Group3 from "../assets/img/Group3.png";
import Group4 from "../assets/img/Group4.png";

const Upcoming2 = () => {
  return (
    <div>
      <Container fluid className="Watch">
        <Row>
          <Col md={6}>
            <div className="kiri">
              <div className="teks">
                <img src={Group3} height="312px"></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div>
                <p className="teksKiri">HOLYWINGS STREAMING 1</p>
                <p className="teksKiri2">20 March 2022, 10:45 WIB</p>
                <p className="teksKiri3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat de la forteque ambarossa te amo
                </p>
                <div className="buy">
                  <Link to="/Payment">
                    <Button variant="link">BUY TICKET</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="kanan">
              <div>
                <img src={Group4}></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div className="teks">
                <p className="teksKanan">BLAYDES VS DAUKAS</p>
                <p className="teksKanan2">20 March 2022, 10:45 WIB</p>
                <p className="teksKanan3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <div className="buy">
                  <Link to="/Payment">
                    <Button variant="link">BUY TICKET</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Upcoming2;
