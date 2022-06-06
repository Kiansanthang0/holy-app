import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OTP from "../assets/img/OTP.png";
import ButtonPs from "../assets/img/ButtonPs.png";
import ButtonApple from "../assets/img/ButtonApple.png";

const PopUp = () => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="OTP">
              <img src={OTP}></img>
            </div>
            <div className="HeaderPop">
              <div>We will send you a one time verification</div>
              <div>code OTP before you can continue</div>
            </div>
            <div className="SubPop">Enter Phone Number</div>
            <div className="FormPop">
              <Form.Group controlId="PopPhoneNumber">
                <Form.Label className="TeksPopForm"></Form.Label>
                <Form.Control className="PopNumber" />
              </Form.Group>
            </div>
            <hr className="PopHr"></hr>
            <div className="PopButton">
              <Link to="/Register">
                <Button variant="link" type="submit">
                  GET OTP
                </Button>
              </Link>
            </div>
            <div className="HeaderPop">Not a Holywings App member yet? Register on</div>
            <div className="DownloadPop">
              <Link to="/Download">
                <Button variant="link">Holywings Mobile App</Button>
              </Link>
            </div>
            <div className="PopUpButtonDownload">
              <Button variant="link">
                <img src={ButtonApple}></img>
              </Button>
              <Button variant="link">
                <img src={ButtonPs}></img>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PopUp;
