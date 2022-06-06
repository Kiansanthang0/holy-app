import { Container, Row, Col, Button } from "react-bootstrap";
import BgAtlet2 from "../assets/img/BgAtlet2.png";
import Biography from "./Biography";
import Result from "./Result";
import Career from "./Career";
import NewsCard from "./NewsCard";
import Other from "./Other";
import Footer from "./Footer";

const Atlet = () => {
  return (
    <div>
      <div className="AtletHeader"></div>
      <Container fluid className="Atlet">
        <Row>
          <Col md={6}>
            <div className="AtletLatest">
              <div className="JudulAtlet">LATEST MATCH</div>
              <div className="SubAtlet">conor mcgregor vs kevin holland</div>
              <div className="DateAtlet">WEDNESDAY, APRIL 4, 2022</div>
              <div className="ParagrafAtlet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pellentesque blandit odio morbi. Amet, aliquam hendrerit cursus platea egestas lorem ullamcorper. Fermentum pellentesque lacus amet, tellus in erat. Nulla
                urna pellentesque interdum egestas magna porttitor commodo.
              </div>
            </div>
          </Col>
          <Col>
            <div className="AtletLatestImg">
              <div id="OverlayAtlet">
                <div className="TeksAtlet">
                  <div className="TeksImg">MCGREGOR VS KEVIN HOLLAND </div>
                  <div className="TeksImg2">WEDNESDAY, APRIL 4, 2022</div>
                </div>
              </div>
            </div>
            <div className="TeksAtlet2">See All</div>
          </Col>
        </Row>
      </Container>
      <Result />
      <Biography />
      <Career />
      <NewsCard />
      <Other />
      <Footer />
    </div>
  );
};

export default Atlet;
