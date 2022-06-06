import { Container, Row, Col, Button, Form } from "react-bootstrap";
import VickyProfile from "../assets/img/VickyProfile.png";

const Profile = () => {
  return (
    <div className="Main">
      <div className="ProfileHeader">asw</div>
      <div>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <div className="ProfileImg">
                <img src={VickyProfile}></img>
              </div>
            </Col>
            <Col>
              <div className="TopHeader">
                <div className="NamaProfile">Vicky Prasetyo</div>
                <div className="NomorProfile">+6281234567890</div>
              </div>
            </Col>
            <Col>
              <div className="ProfileButton">
                <Button variant="link">Edit Profile</Button>
              </div>
            </Col>
          </Row>
          <Form>
            <Row className="FormProfile">
              <Col sm={4}>
                <Form.Group controlId="formFirstName">
                  <Form.Label className="TeksForm">First Name</Form.Label>
                  <Form.Control className="CobaProfile" placeholder="Enter Your First Name" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formLastName">
                  <Form.Label className="TeksForm">Last Name</Form.Label>
                  <Form.Control className="CobaProfile" placeholder="Enter Your Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="FormProfile2">
              <Col sm={8}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="TeksForm">Email Address</Form.Label>
                  <Form.Control className="CobaProfile" type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="FormProfile2">
              <Col sm={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label className="TeksForm">Password</Form.Label>
                  <Form.Control className="CobaProfile" type="password" placeholder="Enter Your Password" />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <div className="FormButton">
                  <Button variant="link" type="submit">
                    Change
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="FormProfile2">
              <Col sm={8}>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label className="TeksForm">Phone Number</Form.Label>
                  <Form.Control id="flag" className="CobaProfile" placeholder="Enter Your Phone Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="FormProfile2">
              <Col sm={4}>
                <Form.Group controlId="formProvince">
                  <Form.Label className="TeksForm">Province</Form.Label>
                  <Form.Control className="CobaProfile" placeholder="Enter Your Province" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formCity">
                  <Form.Label className="TeksForm">City</Form.Label>
                  <Form.Control className="CobaProfile" placeholder="Enter Your City" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="FormProfile2">
              <Col sm={8}>
                <div className="SubmitButton">
                  <div className="CancelButton">
                    <Button variant="link" type="submit">
                      Cancel
                    </Button>
                  </div>
                  <div className="SaveButton">
                    <Button variant="link" type="submit">
                      Save
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
