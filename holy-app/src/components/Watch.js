import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Group7 from "../assets/img/Group7.png";
import Group8 from "../assets/img/Group8.png";
import Footer from "./Footer";

const Watch = () => {
  return (
    <div className="WatchMain">
      <Container fluid className="Watch" id="WatchCon">
        <Row>
          <Col md={6}>
            <div className="kiri">
              <Col>
                <div className="teks">
                  <img src={Group8}></img>
                  <p className="price">Price</p>
                  <p className="idr">IDR 250.000</p>
                </div>
              </Col>
              <Col>
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
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div className="kanan">
              <div>
                <div className="WatchImg">
                  <img src={Group8}></img>
                </div>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div className="teks">
                <p className="teksKanan">HOLYWINGS</p>
                <p className="teksKanan">STREAMING 1</p>
                <p className="teksKanan2">20 March 2022, 10:45 WIB</p>
                <p className="teksKanan3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat de la forteque ambarossa te amo.
                </p>
                <div className="watch">
                  <Link to="/Video">
                    <Button variant="link">Watch Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Watch;
