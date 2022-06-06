import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-hw.png";
import BannerRoster from "./BannerRoster";
import EventCarousel from "./EventCarousel";
import Upcoming from "./Upcoming";
import Upcoming2 from "./Upcoming2";
import Upcoming3 from "./Upcoming3";
import Footer from "./Footer";

const Event = () => {
  return (
    <div>
      <div className="bg">
        <div id="bege">
          <Container className="landingPage">
            <Row>
              <Col className="EventRow">
                <div className="welcome">WELCOME TO</div>
                <div className="hw">HOLYWINGS</div>
                <div className="hw">STREAMING</div>
                <div className="welcomeButton">
                  <Link to="/Watch">
                    <Button variant="link">Watch Now</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="welcomeFooter">
            <Row>
              <Col md>All Right Reserved</Col>
            </Row>
          </Container>
        </div>
      </div>
      <BannerRoster />
      <EventCarousel />
      <Upcoming />
      <Upcoming2 />
      <Upcoming3 />
      <Footer />
    </div>
  );
};

export default Event;
