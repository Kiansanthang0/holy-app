import { Container, Row, Col, Button } from "react-bootstrap";
import RosterCardImg from "../assets/img/RosterCardImg.png";
import MatchImg from "../assets/img/MatchImg.png";

const Match = () => {
  return (
    <div>
      <Container fluid className="MatchCon">
        <Row className="MatchHead">
          <div className="TeksRankings">
            <div className="JudulRankings">MATCH RESULT</div>
            <div className="SubRankings">HOLYWINGS SPORT SHOW</div>
          </div>
        </Row>
        <Row className="MatchResult">
          <Col lg={3}>
            <div className="text-center">
              <img src={RosterCardImg}></img>
            </div>
          </Col>
          <Col lg={6}>
            <div className="Match">
              <div className="MatchHeader">
                <div className="JudulMatch">Celebrity Fight</div>
                <div className="JudulMatch">Sun, 27 Mar, 17:00 </div>
                <div className="JudulMatch">KO/TKO | ROUND 4 - 04:23 </div>
              </div>
              <div className="MatchRes">
                <div>
                  <div className="MatchTeksKiri">KEVIN HOLLAND</div>
                  <div className="MatchTeksKiri2">11-5-0</div>
                </div>
                <div className="VS">V.S</div>
                <div>
                  <div className="MatchTeksKanan">JOANDERSON BRITO</div>
                  <div className="MatchTeksKanan2">4-5-0</div>
                </div>
              </div>
              <div className="MatchButton">
                <div className="MatchBuy">
                  <Button variant="link">Buy Ticket</Button>
                </div>
                <div className="MatchWatch">
                  <Button variant="link">Watch</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="text-center">
              <img src={MatchImg}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Match;
