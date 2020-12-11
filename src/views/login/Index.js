import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { User, Lock } from "react-feather";
import SweetAlert from "react-bootstrap-sweetalert";
import loginImg from "../../assets/img/pages/login.png";
import "../../assets/scss/pages/authentication.scss";
import { loginWithJWT } from "../../redux/actions/auth/loginActions";

export default function Index(props) {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const dataRedux = useSelector((state) => state);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  console.log("DATA REDUX", dataRedux);

  const handleLogin = () => {
    if (dataLogin?.username === "") {
      setAlertInfo({
        show: true,
        message: "Mohon masukan username Anda",
      });
      setLoading(false);
    } else if (dataLogin?.password === "") {
      setAlertInfo({
        show: true,
        message: "Mohon masukan password Anda",
      });
      setLoading(false);
    } else {
      dispatch(loginWithJWT(dataLogin));
      setLoading(false);
    }
  };
  return (
    <>
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                  <CardBody>
                    <h4>Login</h4>
                    <p>Welcome back, please login to your account.</p>
                    <Form onSubmit={(e) => e.preventDefault()}>
                      <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                          type="username"
                          placeholder="Username"
                          value={dataLogin?.username}
                          onChange={(e) =>
                            setDataLogin({
                              ...dataLogin,
                              username: e.target.value,
                            })
                          }
                        />
                        <div className="form-control-position">
                          <User size={15} />
                        </div>
                        <Label>Username</Label>
                      </FormGroup>
                      <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                          type="password"
                          placeholder="Password"
                          value={dataLogin?.password}
                          onChange={(e) =>
                            setDataLogin({
                              ...dataLogin,
                              password: e.target.value,
                            })
                          }
                        />
                        <div className="form-control-position">
                          <Lock size={15} />
                        </div>
                        <Label>Password</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-between">
                        <Button.Ripple
                          color="primary"
                          type="submit"
                          disabled={loading}
                          onClick={() => {
                            setLoading(true);
                            handleLogin();
                          }}
                        >
                          Login
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <SweetAlert
        error
        title="Error"
        show={dataRedux.notif.alert.gagal}
        onConfirm={() => {
          dispatch({
            type: "FILL_GAGAL",
            gagal: false,
            pesan: "",
          });
        }}
      >
        <p className="sweet-alert-text">
          {dataRedux.notif?.alert?.pesan === ""
            ? "Gagal!"
            : dataRedux.notif?.alert?.pesan}
        </p>
      </SweetAlert>
      <SweetAlert
        info
        title="Info!"
        show={alertInfo.show}
        onConfirm={() => setAlertInfo({ show: false, message: "" })}
      >
        <p className="sweet-alert-text">{alertInfo?.message}</p>
      </SweetAlert>
    </>
  );
}
