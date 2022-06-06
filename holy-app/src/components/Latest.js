import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="Latest">
      <Container fluid>
        <div>
          <div className="TopLatest">
            <div className="TopLatestRight">LATEST</div>
            <hr className="TopHr"></hr>
            <div className="TopLatestLeft">
              <Link to="/News_All" className="TopLatestBtn">
                See all
              </Link>
            </div>
          </div>
        </div>
        <Row className="LKiri">
          <Col md={8}>
            <div className="LatestKiri">
              <div id="OverlayLatestKiri">
                <div className="JudulLatest">February 20, 2022, 19:45 </div>
                <div className="SubLatest">
                  <div>Vicky “The Gladiator” Prasetyo Berhasil</div>
                  <div> Taklukkan Aldi “I Love You” Taher dalam</div>
                  <div> Celebrity Fight HSS</div>
                </div>
                <hr size="1px"></hr>
                <div className="ParagrafLatest">
                  <div>Vicky Prasetyo dan Aldi Taher dipertemukan di atas</div>
                  <div>ring tinju. Keduanya memperlihatkan pertunjukkan</div>
                  <div> yang sangat menghibur...</div>
                </div>
                <div className="ReadMoreLatest">Read More</div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="LatestKanan2">
              <div className="OverlayLatestKanan2">
                <div className="JudulLatestKanan2">February 20, 2022, 18:30</div>
                <div className="SubLatestKanan2">
                  <div>Pertarungan Sengit Vicky</div>
                  <div>Prasetyo dan Aldi Taher Res...</div>
                </div>
                <hr size="1px"></hr>
                <div className="ParagrafLatestKanan2">
                  <div>Meskipun terkesan seperti pertandingan</div>
                  <div>penuh canda, nyatanya ketika bel berbunyi</div>
                  <div>keduanya melakukan dengan sangat seri...</div>
                </div>
                <div className="ReadMoreLatestKanan">Read More</div>
              </div>
            </div>
            <div className="LatestKanan3">
              <div id="OverlayLatestKanan2">
                <div className="JudulLatestKanan2">February 20, 2022, 18:30</div>
                <div className="SubLatestKanan2">
                  <div>Vicky Prasetyo Cari</div>
                  <div>Penantang Di HSS</div>
                </div>
                <hr size="1px"></hr>
                <div className="ParagrafLatestKanan2">
                  <div>Meskipun terkesan seperti pertandingan</div>
                  <div>penuh canda, nyatanya ketika bel berbunyi</div>
                  <div>keduanya melakukan dengan sangat seri...</div>
                </div>
                <div className="ReadMoreLatestKanan">Read More</div>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <div className="TopLatest">
            <div className="TopLatestRight">ARTICLE</div>
            <hr className="TopHr"></hr>
            <div className="TopLatestLeft">
              <Link to="/News_All" className="TopLatestBtn">
                See all
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Latest;
