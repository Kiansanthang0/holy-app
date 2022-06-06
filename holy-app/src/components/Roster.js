import { Container, Row, Col, Form, FormControl, Card, Button } from "react-bootstrap";
import RosterCard from "./RosterCard";
import Footer from "./Footer";

const Roster = () => {
  return (
    <div>
      <Container className="News">
        <Row>
          <Col>
            <p className="JudulNews">ROSTER</p>
            <p className="SubNews">HOLYWINGS SPORTSHOW</p>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search Fighters" className="me-2" aria-label="Search" />
            </Form>
          </Col>
        </Row>
      </Container>
      <RosterCard />
      <Footer />
    </div>
  );
};

export default Roster;
