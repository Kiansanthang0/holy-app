import { Container, Row, Col, Card, Button } from "react-bootstrap";
import RosterCardImg from "../assets/img/RosterCardImg.png";

const RosterCard = () => {
  return (
    <div>
      <Container fluid className="News2">
        <Row>
          <Col>
            <div className="Sort">
              <p>DIVISIONS ALL</p>
              <p>3500 Fighters</p>
              <p>SORT BY NEWEST</p>
            </div>
          </Col>
        </Row>
        <Row className="Kartu">
          <Col className="RosterCard">
            <div className="JudulRosterCard">
              <div>THE GLADIATOR</div>
            </div>
            <div className="SubRosterCard">
              <div>KEVIN HOLLAND</div>
            </div>
            <div className="ResultRosterCard">
              <div>21-0-1 (W-L-D)</div>
            </div>
            <div className="RosterCardImg">
              <img src={RosterCardImg}></img>
            </div>
            <div>
              <div className="ProfilRosterCard">
                <div>26</div>
                <div>185 cm</div>
                <div>78 kg</div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Age:</div>
                <div className="pee">Height:</div>
                <div className="peee">Weight</div>
              </div>
              <div className="ProfilRosterCard">
                <div>22</div>
                <div>Heavyweight</div>
                <div></div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Match</div>
                <div className="pe">Class</div>
                <div></div>
              </div>
            </div>
          </Col>
          <Col className="RosterCard">
            <div className="JudulRosterCard">
              <div>THE GLADIATOR</div>
            </div>
            <div className="SubRosterCard">
              <div>KEVIN HOLLAND</div>
            </div>
            <div className="ResultRosterCard">
              <div>21-0-1 (W-L-D)</div>
            </div>
            <div className="RosterCardImg">
              <img src={RosterCardImg}></img>
            </div>
            <div>
              <div className="ProfilRosterCard">
                <div>26</div>
                <div>185 cm</div>
                <div>78 kg</div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Age:</div>
                <div className="pee">Height:</div>
                <div className="peee">Weight</div>
              </div>
              <div className="ProfilRosterCard">
                <div>22</div>
                <div>Heavyweight</div>
                <div></div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Match</div>
                <div className="pe">Class</div>
                <div></div>
              </div>
            </div>
          </Col>
          <Col className="RosterCard">
            <div className="JudulRosterCard">
              <div>THE GLADIATOR</div>
            </div>
            <div className="SubRosterCard">
              <div>KEVIN HOLLAND</div>
            </div>
            <div className="ResultRosterCard">
              <div>21-0-1 (W-L-D)</div>
            </div>
            <div className="RosterCardImg">
              <img src={RosterCardImg}></img>
            </div>
            <div>
              <div className="ProfilRosterCard">
                <div>26</div>
                <div>185 cm</div>
                <div>78 kg</div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Age:</div>
                <div className="pee">Height:</div>
                <div className="peee">Weight</div>
              </div>
              <div className="ProfilRosterCard">
                <div>22</div>
                <div>Heavyweight</div>
                <div></div>
              </div>
              <div className="SubProfilRosterCard">
                <div>Match</div>
                <div className="pe">Class</div>
                <div></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RosterCard;
