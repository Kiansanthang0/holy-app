import { Container, Row, Col, Button } from "react-bootstrap";
import Group7 from "../assets/img/Group7.png";
import Group8 from "../assets/img/Group8.png";

const Upcoming4 = () => {
  return (
    <div>
      <Container fluid className="upcoming">
        <Row>
          <Col md={6}>
            <div className="kiri">
              <div className="teks">
                <img src={Group7} height="312px"></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div>
                <p className="teksKiri">OSKOV VS ASPINAL</p>
                <p className="teksKiri2">20 March 2022, 10:45 WIB</p>
                <p className="teksKiri3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat de la forteque ambarossa te amo
                </p>
                <div className="buy">
                  <Button variant="link">BUY TICKET</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="kanan">
              <div>
                <img src={Group8}></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div className="teks">
                <p className="teksKanan">CELEBRITY FIGHT</p>
                <p className="teksKanan2">20 March 2022, 10:45 WIB</p>
                <p className="teksKanan3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <div className="buy">
                  <Button variant="link">BUY TICKET</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Upcoming4;
