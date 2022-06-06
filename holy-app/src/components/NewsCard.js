import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsCardImg from "../assets/img/NewsCard.png";
import NewsCardHeader from "./NewsCardHeader";

const NewsCard = () => {
  return (
    <>
      <div>
        <Container fluid className="News2">
          <Row className="Kartu">
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src={NewsCardImg} />
                <div className="CardDate">
                  <div>March 13, 2022</div>
                  <div className="TeksKategori">BEST OF</div>
                </div>
                <div className="JudulCard">Biggest fight on UFC History finally here</div>
                <p className="SubCard">Nurmagomedov vs. McGregor: 2,400,000 PPV Buys – $180 million. And finally, the biggest PPV event in UFC history. Khabib Nurmagomedov defend his UFC Lightweight Championship against McGregor.</p>
                <div className="CardButton">
                  <Link to="/News_All">
                    <Button variant="link" onclick="myFunction()" id="myBtn">
                      Read more
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src={NewsCardImg} />
                <div className="CardDate">
                  <div>March 13, 2022</div>
                  <div className="TeksKategori">HIGHLIGHTS</div>
                </div>
                <div className="JudulCard">Biggest fight on UFC History finally here</div>
                <p className="SubCard">Nurmagomedov vs. McGregor: 2,400,000 PPV Buys – $180 million. And finally, the biggest PPV event in UFC history. Khabib Nurmagomedov defend his UFC Lightweight Championship against McGregor.</p>
                <div className="CardButton">
                  <Link to="/News_All">
                    <Button variant="link" onclick="myFunction()" id="myBtn">
                      Read more
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src={NewsCardImg} />
                <div className="CardDate">
                  <div>March 13, 2022</div>
                  <div className="TeksKategori">HIGHLIGHTS</div>
                </div>
                <div className="JudulCard">Biggest fight on UFC History finally here</div>
                <p className="SubCard">Nurmagomedov vs. McGregor: 2,400,000 PPV Buys – $180 million. And finally, the biggest PPV event in UFC history. </p>
                <div className="CardButton">
                  <Link to="/News_All">
                    <Button variant="link" onclick="myFunction()" id="myBtn">
                      Read more
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsCard;
