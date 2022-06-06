import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CarouselImg1 from "../assets/img/CarouselImg1.png";
import CarouselImg2 from "../assets/img/CarouselImg2.png";

const EventCarousel = () => {
  return (
    <div className="okhe">
      <Carousel>
        <Carousel.Item interval={500}>
          <div className="nyoba">
            <div id="cube"></div>
          </div>
          <Carousel.Caption className="Caption">
            <Row>
              <Col>
                <div className="JudulCarousel">BIG MATCH</div>
                <div className="SubCarousel">HOLYWINGS SPORTSHOW</div>
                <div className="SubCarousel2"> MONDAY, 04 APRIL 2022</div>
              </Col>
            </Row>
            <Container fluid className="CarCon">
              <Row>
                <Col lg={1} className="CarouselImg1">
                  <div>
                    <div>
                      <img src={CarouselImg1}></img>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="CarKiri">
                    <div className="CarouselName">Kevin Holland</div>
                  </div>
                  <div className="CarouselScore">15-2-0 (2 K.O)</div>
                  <div className="CarouselScore">89 KG</div>
                  <div className="CarouselScore">12:07</div>
                  <div className="CarouselScore">10:2</div>
                  <div className="CarouselScore">56.7%</div>
                </Col>
                <Col lg={4}>
                  <div className="VsCarousel">VS</div>
                  <div className="SubVsCarousel">OVERALL</div>
                  <div className="SubVsCarousel">WEIGHT</div>
                  <div className="SubVsCarousel">AVG FIGHT TIME</div>
                  <div className="SubVsCarousel">KO RATIO</div>
                  <div className="SubVsCarousel">ACCURACY</div>
                </Col>
                <Col lg={3}>
                  <div className="CarKanan">
                    <div className="CarouselName2">Zu Anyanwu</div>
                  </div>
                  <div className="CarouselScore2">25-0-0 (15 K.O)</div>
                  <div className="CarouselScore2">87 KG</div>
                  <div className="CarouselScore2">09:54</div>
                  <div className="CarouselScore2">25:0</div>
                  <div className="CarouselScore2">80%%</div>
                </Col>
                <Col lg={1} className="CarouselImg2">
                  <div>
                    <div>
                      <img src={CarouselImg2}></img>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={300}>
          <div className="nyoba">
            <div id="cube"></div>
          </div>
          <Carousel.Caption className="Caption">
            <Row>
              <Col>
                <div className="JudulCarousel">BIG MATCH</div>
                <div className="SubCarousel">HOLYWINGS SPORTSHOW</div>
                <div className="SubCarousel2"> MONDAY, 04 APRIL 2022</div>
              </Col>
            </Row>
            <Container fluid className="CarCon">
              <Row>
                <Col lg={1} className="CarouselImg1">
                  <div>
                    <div>
                      <img src={CarouselImg1}></img>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="CarKiri">
                    <div className="CarouselName">Kevin Holland</div>
                  </div>
                  <div className="CarouselScore">15-2-0 (2 K.O)</div>
                  <div className="CarouselScore">89 KG</div>
                  <div className="CarouselScore">12:07</div>
                  <div className="CarouselScore">10:2</div>
                  <div className="CarouselScore">56.7%</div>
                </Col>
                <Col lg={4}>
                  <div className="VsCarousel">VS</div>
                  <div className="SubVsCarousel">OVERALL</div>
                  <div className="SubVsCarousel">WEIGHT</div>
                  <div className="SubVsCarousel">AVG FIGHT TIME</div>
                  <div className="SubVsCarousel">KO RATIO</div>
                  <div className="SubVsCarousel">ACCURACY</div>
                </Col>
                <Col lg={3}>
                  <div className="CarKanan">
                    <div className="CarouselName2">Zu Anyanwu</div>
                  </div>
                  <div className="CarouselScore2">25-0-0 (15 K.O)</div>
                  <div className="CarouselScore2">87 KG</div>
                  <div className="CarouselScore2">09:54</div>
                  <div className="CarouselScore2">25:0</div>
                  <div className="CarouselScore2">80%%</div>
                </Col>
                <Col lg={1} className="CarouselImg2">
                  <div>
                    <div>
                      <img src={CarouselImg2}></img>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default EventCarousel;
