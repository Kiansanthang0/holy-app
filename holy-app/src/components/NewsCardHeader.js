import { Container, Row, Col } from "react-bootstrap";

const NewsCardHeader = () => {
  return (
    <Container fluid className="News2">
      <Row>
        <Col>
          <div className="Sort">
            <p>Category All</p>
            <p>3500 News</p>
            <p>SORT BY NEWEST</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsCardHeader;
