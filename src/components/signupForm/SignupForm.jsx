/* eslint-disable react/no-unescaped-entities */

import { Button, Col, Form, Input, Row, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignupForm = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    dealGroupID: "3",
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    postalCode: "",
    phoneNumber: "",
    userStatus: "1",
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const signupData = {
      dealGroupID: formData?.dealGroupID,
      title: formData?.title,
      firstName: formData?.firstName,
      middleName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      password: formData?.password,
      postalCode: formData?.postalCode,
      phoneNumber: formData?.phoneNumber,
      userStatus: formData?.userStatus,
    };

    try {
      await axios.post(`https://apid.aclaro.ai/api/auth/sign-up`, signupData, { withCredentials: true }, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Request-Id": 9778,
        },
      },

      );

      messageApi.open({
        type: "success",
        content: "Signup successful",
      });

      //   navigate("/dashboard/new-vehicles");
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "There is something wrong !",
      });
      console.log(err);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="auth-form-wrapper">
        <div className="header-content">
          <h1>Welcome</h1>
          <p>Sign up to get started</p>
        </div>
        <div className="input-wrapper">
          <Form
            name="login-form"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Title"
                  rules={[
                    {
                      message: "Please enter your title!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="First name"
                  rules={[
                    {
                      message: "Please enter your first name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    name="firstName"
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Middle name"
                  rules={[
                    {
                      message: "Please enter your middle name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    name="middleName"
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Last name"
                  rules={[
                    {
                      message: "Please enter your last name!",
                    },
                  ]}
                >
                  <Input size="large" name="lastName" onChange={handleChange} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    size="large"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Phone number"
                  name="phoneNumber"
                  rules={[
                    {
                      message: "Please enter your phone number!",
                    },
                  ]}
                >
                  <Input
                    type="tel"
                    size="large"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                name="password"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button size="large" type="primary" htmlType="submit" block>
                Sign up
              </Button>
            </Form.Item>

            <div className="align-center">
              <p className="clr-dark-ash">
                Don't have an account?{" "}
                <Link to="/login" className="fw-600">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
