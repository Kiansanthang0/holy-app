import { Container, Row, Col, Button } from "react-bootstrap";
import PaymentImg from "../assets/img/PaymentImg.png";

const Payment = () => {
  return (
    <div>
      <Container fluid="md" className="Payment">
        <Row>
          <Col>
            <div className="JudulPayment">Payment</div>
            <div className="SubPayment">Ticket</div>
            <div className="MemberPayment">Member Information</div>
            <div className="NamePayment">
              <div className="MemberName">Name</div>
              <div className="NameInput"> :</div>
              <div className="NameInput"> Username</div>
            </div>
            <div className="NamePayment">
              <div className="MemberName">Email</div>
              <div className="NameInput"> :</div>
              <div className="NameInput"> Username@gmail.com</div>
            </div>
            <div className="NamePayment">
              <div className="MemberName">Phone</div>
              <div className="NameInput"> :</div>
              <div className="NameInput"> +62823324457</div>
            </div>
            <hr className="PaymentHr"></hr>
            <div className="MemberPayment">Event Information</div>
          </Col>
        </Row>
        <Row className="Eve">
          <Col md={1}>
            <div>
              <img src={PaymentImg}></img>
            </div>
          </Col>
          <Col>
            <div className="d-block">
              <div className="EventInformation">
                <div className="EventPayment">Event</div>
                <div className="NameInput"> :</div>
                <div className="NameInput"> Holywings Streaming 1</div>
              </div>
            </div>
            <div className="d-block">
              <div className="EventInformation">
                <div className="EventPayment">Date</div>
                <div className="NameInput"> :</div>
                <div className="NameInput"> Thu, 24 March 2022 | 08:45</div>
              </div>
            </div>
            <div className="d-block">
              <div className="EventInformation">
                <div className="EventPayment">Price</div>
                <div className="NameInput"> :</div>
                <div className="NameInput"> IDR 250,000,00</div>
              </div>
            </div>
          </Col>
          <hr className="PaymentHr"></hr>
          <div className="ButtonPayment">
            {" "}
            <div className="BuyPayment">
              <Button variant="link" type="Submit">
                BUY NOW
              </Button>
            </div>
            <div className="CancelPayment">
              <Button variant="link" type="Submit">
                CANCEL
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
