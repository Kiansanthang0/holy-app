import { Container, Row, Col, Form, FormControl, Card, Button } from "react-bootstrap";
import NewsCard from "./NewsCard";
import NewsCardHeader from "./NewsCardHeader";
import Footer from "./Footer";

const News = () => {
  return (
    <div>
      <Container className="News">
        <Row>
          <Col>
            <p className="JudulNews">NEWS</p>
            <p className="SubNews">HOLYWINGS SPORTSHOW</p>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search News" className="me-2" aria-label="Search" />
            </Form>
          </Col>
        </Row>
      </Container>
      <NewsCardHeader />
      <NewsCard />
      <Footer />
    </div>
  );
};

export default News;
