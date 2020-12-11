import React from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import notAuthImg from "../../assets/img/pages/not-authorized.png";

class NotAuthorized extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <img
                src={notAuthImg}
                alt="notAuthImg"
                className="img-fluid align-self-center mt-75"
              />
              <h1 className="font-large-2 my-2">You are not authorized!</h1>
              <p className="pt-2 mb-0" style={{ color: "black" }}>
                paraphonic unassessable foramination Caulopteris worral
                Spirophyton encrimson esparcet aggerate chondrule restate
                whistler shallopy
              </p>
              <p className="pb-2" style={{ color: "black" }}>
                biosystematy area bertram plotting unstarting quarterstaff.
              </p>
              <Button.Ripple
                tag="a"
                href="/login"
                color="primary"
                size="lg"
                className="mt-2"
              >
                Back to Login Page
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default NotAuthorized;
