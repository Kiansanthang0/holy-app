import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Latest from "./Latest";
import News from "./NewsCard";
import Footer from "./Footer";

const Berita = () => {
  return (
    <div className="Berita">
      <div id="BegeBerita">
        <Container fluid>
          <Row>
            <Col>
              <div className="BeritaButton">
                <Link to="/News_Detail">
                  <Button variant="link">TRENDING</Button>
                </Link>
                <div className="TanggalBerita">February 20, 2022, 19:45</div>
              </div>
              <div className="JudulBerita">
                <div>Holywings Akan Segera</div>
                <div>Menghadirkan "Holywings</div>
                <div>Sport Show Boxing</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Latest />
      <News />
      <Footer />
    </div>
  );
};

export default Berita;
