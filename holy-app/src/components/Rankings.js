import { Container, Row, Col } from "react-bootstrap";
import RankingProfileImg from "../assets/img/RankingProfileImg.png";
import RankingProfileImg2 from "../assets/img/RankingProfileImg2.png";
import RankingProfileImg3 from "../assets/img/RankingProfileImg3.png";
import RankingProfileImg4 from "../assets/img/RankingProfileImg4.png";
import RankingProfileImg5 from "../assets/img/RankingProfileImg5.png";
import RightArrow from "../assets/img/RightArrow.png";
import RightArrow2 from "../assets/img/RightArrow2.png";
import GreenArrow from "../assets/img/GreenArrow.png";
import IconIndoMini from "../assets/img/IconIndoMini.png";

const Rankings = () => {
  return (
    <div className="RankingsBg">
      <div id="OverlayRankings">
        <Container fluid className="RankingContainerr">
          <Row>
            <div className="TeksRankings">
              <div className="JudulRankings">ATHLETE RANKINGS</div>
              <div className="SubRankings">HOLYWINGS SPORT SHOW</div>
              <div className="SubRankings2">Men’s Pound-For-Pound Top Rank </div>
            </div>
          </Row>
          <Row className="RankingsBar">
            <Col md={1}>
              <div className="NumberRankings">1</div>
            </Col>
            <Col md={1}>
              <div className="GreenArrow">
                <img src={GreenArrow}></img>
              </div>
              <div className="UpdateRankings">12+</div>
            </Col>
            <Col md={5}>
              <div className="ProfileRankings">
                <div className="ImgRankings">
                  <img src={RankingProfileImg}></img>
                </div>
                <div className="BioRankings">
                  <div className="NameRankings">ISRAEL ADESANYA</div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={IconIndoMini}></img>
                    </div>
                    <div className="CountryRankings">Jakarta</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="RankingsResult">
              <div className="TeksResult">WIN</div>
              <div className="TeksResult2">25</div>
            </Col>
            <Col>
              <div className="TeksResult">DRAW</div>
              <div className="TeksResult2">14</div>
            </Col>
            <Col>
              <div className="TeksResult">LOSE</div>
              <div className="TeksResult2">01</div>
            </Col>
            <Col>
              <div className="TeksResult">KNOCKOUT</div>
              <div className="TeksResult2">10</div>
            </Col>
            <Col>
              <div className="RightArrows">
                <img src={RightArrow}></img>
              </div>
            </Col>
          </Row>
          <Row className="RankingsBar2">
            <Col md={1}>
              <div className="NumberRankings">2</div>
            </Col>
            <Col md={1}>
              <div className="GreenArrow"></div>
              <div className="UpdateRankings"></div>
            </Col>
            <Col md={5}>
              <div className="ProfileRankings">
                <div className="ImgRankings">
                  <img src={RankingProfileImg2}></img>
                </div>
                <div className="BioRankings">
                  <div className="NameRankings">KAMARU USMAN</div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={IconIndoMini}></img>
                    </div>
                    <div className="CountryRankings">Jakarta</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} className="RankingsResult">
              <div className="TeksResult">WIN</div>
              <div className="TeksResult2">25</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">DRAW</div>
              <div className="TeksResult2">14</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">LOSE</div>
              <div className="TeksResult2">01</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">KNOCKOUT</div>
              <div className="TeksResult2">10</div>
            </Col>
            <Col>
              <div className="RightArrows">
                <img src={RightArrow2}></img>
              </div>
            </Col>
          </Row>
          <Row className="RankingsBar3">
            <Col md={1}>
              <div className="NumberRankings">3</div>
            </Col>
            <Col md={1}>
              <div className="GreenArrow">
                <img src={GreenArrow}></img>
              </div>
              <div className="UpdateRankings">5+</div>
            </Col>
            <Col md={5}>
              <div className="ProfileRankings">
                <div className="ImgRankings">
                  <img src={RankingProfileImg3}></img>
                </div>
                <div className="BioRankings">
                  <div className="NameRankings">ALEXANDER VOLKANOVSKI</div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={IconIndoMini}></img>
                    </div>
                    <div className="CountryRankings">Jakarta</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} className="RankingsResult">
              <div className="TeksResult">WIN</div>
              <div className="TeksResult2">25</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">DRAW</div>
              <div className="TeksResult2">14</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">LOSE</div>
              <div className="TeksResult2">01</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">KNOCKOUT</div>
              <div className="TeksResult2">10</div>
            </Col>
            <Col>
              <div className="RightArrows">
                <img src={RightArrow2}></img>
              </div>
            </Col>
          </Row>
          <Row className="RankingsBar4">
            <Col md={1}>
              <div className="NumberRankings">4</div>
            </Col>
            <Col md={1}>
              <div className="GreenArrow"></div>
              <div className="UpdateRankings"></div>
            </Col>
            <Col md={5}>
              <div className="ProfileRankings">
                <div className="ImgRankings">
                  <img src={RankingProfileImg4}></img>
                </div>
                <div className="BioRankings">
                  <div className="NameRankings">FRANCIS NGANNOU</div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={IconIndoMini}></img>
                    </div>
                    <div className="CountryRankings">Jakarta</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} className="RankingsResult">
              <div className="TeksResult">WIN</div>
              <div className="TeksResult2">25</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">DRAW</div>
              <div className="TeksResult2">14</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">LOSE</div>
              <div className="TeksResult2">01</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">KNOCKOUT</div>
              <div className="TeksResult2">10</div>
            </Col>
            <Col>
              <div className="RightArrows">
                <img src={RightArrow2}></img>
              </div>
            </Col>
          </Row>
          <Row className="RankingsBar4">
            <Col md={1}>
              <div className="NumberRankings">5</div>
            </Col>
            <Col md={1}>
              <div className="GreenArrow"></div>
              <div className="UpdateRankings"></div>
            </Col>
            <Col md={5}>
              <div className="ProfileRankings">
                <div className="ImgRankings">
                  <img src={RankingProfileImg5}></img>
                </div>
                <div className="BioRankings">
                  <div className="NameRankings">CHARLES OLIVIERA</div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={IconIndoMini}></img>
                    </div>
                    <div className="CountryRankings">Jakarta</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1} className="RankingsResult">
              <div className="TeksResult">WIN</div>
              <div className="TeksResult2">25</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">DRAW</div>
              <div className="TeksResult2">14</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">LOSE</div>
              <div className="TeksResult2">01</div>
            </Col>
            <Col md={1}>
              <div className="TeksResult">KNOCKOUT</div>
              <div className="TeksResult2">10</div>
            </Col>
            <Col>
              <div className="RightArrows">
                <img src={RightArrow2}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Rankings;
