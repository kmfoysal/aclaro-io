/* eslint-disable react/prop-types */
import { Col, Image, Row } from "antd";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const AuthLayout = ({component}) => {
    return (
        <>
      <Row>
        <Col xs={24} md={12}>
          <div className="auth-layout-left">
            <Link to="/" className="logo-wrapper">
              <Image src={Logo} alt="Logo" preview={false} />
            </Link>
            <div className="content-wrapper align-center">
              <h3 className="fs-32 clr-white fw-600">
                Welcome aboard my friend
              </h3>
              <p className="fs-22 clr-white">
                Just a couple of clicks and we start
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
            <div className="auth-form">
            {component}
            </div>
        </Col>
      </Row>
    </>
    );
};

export default AuthLayout;