import { Container, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BannerRoster = () => {
  return (
    <div className="background">
      <div id="overlayBanner">
        <Container className="Roster fluid">
          <Row>
            <Col>
              <div className="hss">HOLYWINGS SPORTSHOW</div>
              <div className="rosterHw">
                WE FALL, BUT WE GET UP BECAUSE THE GROUND IS NO
                <br />
                PLACE FOR CHAMPION
              </div>
              <div className="bannerRosterButton">
                <Link to="/Roster">
                  <Button variant="link">See Rosters</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerRoster;
