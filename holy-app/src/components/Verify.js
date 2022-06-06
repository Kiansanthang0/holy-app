import { Container, Row, Col, Form, Button } from "react-bootstrap";
import OTP from "../assets/img/OTP.png";
import ButtonPs from "../assets/img/ButtonPs.png";
import ButtonApple from "../assets/img/ButtonApple.png";

const Verify = () => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="OTP">
              <img src={OTP}></img>
            </div>
            <div className="HeaderVerify">OTP Verification</div>
            <div className="SubVerify">
              <div>Enter the OTP sent to </div>
              <div className="NumberVerify"> +6289604074446</div>
            </div>
            <div className="FormPop">
              <Form.Group controlId="PopPhoneNumber">
                <Form.Label className="TeksPopForm"></Form.Label>
                <Form.Control className="PopNumber" />
              </Form.Group>
            </div>
            <div className="VerifyHaer">
              <div className="VerifyHr"></div>
              <div className="VerifyHr"></div>
              <div className="VerifyHr"></div>
              <div className="VerifyHr"></div>
              <div className="VerifyHr"></div>
              <div className="VerifyHr"></div>
            </div>
            <div className="VerifyTime">Please Wait 30s</div>
            <div className="PopButton">
              <Button variant="link" type="submit">
                VERIFY
              </Button>
            </div>
            <div className="VerifyBottom">
              <div className="VerifyTeks">Didn’t receive the OTP?</div>
              <Button variant="link">Resend OTP</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Verify;
