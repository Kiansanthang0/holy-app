import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  return (
    <div className="MainReg">
      <div className="JudulRegister">Create Account</div>
      <Form className="formReg">
        <Row className="FormProfile">
          <Col sm={3}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control className="CobaRegister" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control className="CobaRegister" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className="CobaRegister" type="email" placeholder="Enter Your Email" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control className="CobaRegister" placeholder="+62" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <div>
              <Form>
                <Form.Label>Gender</Form.Label>
                <div key="inline-radio" className="RadioRegister">
                  <Form.Check label="Male" type="radio" id="inline-radio-1" name="register" className="TeksRadio" />
                  <Form.Check label="Female" type="radio" id="inline-radio-2" name="register" className="TeksRadio" />
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Birthdate</Form.Label>
              <Form.Control className="CobaRegister" placeholder="+62" type="date" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <div className="d-flex">
              <div>
                <Form.Check type="checkbox" id="inline-radio-1" name="register" className="RegisterCb" />
              </div>
              <div className="RegisterBottom">
                <div>By registering to Holywings, you agree to the</div>
                <Link to="/Roster" className="RegisterLink">
                  Terms & Conditions and Privacy Policy
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="FormProfile2">
          <Col sm={6}>
            <div className="RegisterButton">
              <Link to="/Event">
                <Button>REGISTER</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Form>
      <Footer />
    </div>
  );
};

export default Register;
