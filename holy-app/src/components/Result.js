import { Container, Row, Col, Button } from "react-bootstrap";
import ErBg from "../assets/img/ErBg.png";

const Result = () => {
  return (
    <div>
      <Container fluid className="upcoming">
        <Row>
          <div className="ErHeader">EVENT RESULT</div>
          <Col md={6}>
            <div className="kiri">
              <div className="teks">
                <img src={ErBg} height="312px"></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div>
                <p className="teksKiri">MCGREGOR VS KEVIN HOLLAND</p>
                <p className="teksKiri2">20 March 2022, 10:45 WIB</p>
                <div className="TeksEr">
                  <div className="TeksEr1">ROUND</div>
                  <div className="TeksEr2">METHOD</div>
                </div>
                <div className="TeksErr">
                  <div className="TeksErr1">04</div>
                  <div className="TeksErr2">KO/TKO</div>
                </div>
                <div className="TeksEr">
                  <div className="TeksEr1">ROUND</div>
                  <div className="TeksEr2">METHOD</div>
                </div>
                <div className="TeksErr">
                  <div className="TeksErr1">05:23 </div>
                  <div className="TeksErr2">MCGREGOR</div>
                </div>
                <div className="watchEr">
                  <Button variant="link">WATCH REPLAY</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="kanan">
              <div>
                <img src={ErBg}></img>
                <p className="price">Price</p>
                <p className="idr">IDR 250.000</p>
              </div>
              <div className="teks">
                <p className="teksKiri">MCGREGOR VS KEVIN HOLLAND</p>
                <p className="teksKiri2">20 March 2022, 10:45 WIB</p>
                <div className="TeksEr">
                  <div className="TeksEr1">ROUND</div>
                  <div className="TeksEr2">METHOD</div>
                </div>
                <div className="TeksErr">
                  <div className="TeksErr1">04</div>
                  <div className="TeksErr2">KO/TKO</div>
                </div>
                <div className="TeksEr">
                  <div className="TeksEr1">ROUND</div>
                  <div className="TeksEr2">METHOD</div>
                </div>
                <div className="TeksErr">
                  <div className="TeksErr1">05:23 </div>
                  <div className="TeksErr2">MCGREGOR</div>
                </div>
                <div className="watchEr">
                  <Button variant="link">WATCH REPLAY</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Result;
