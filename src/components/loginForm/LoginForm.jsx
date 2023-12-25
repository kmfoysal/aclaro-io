/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        `https://apid.aclaro.ai/api/auth/login`,
        credentials,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Request-Id": 9778,
          },
        }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res?.data });

      messageApi.open({
        type: "success",
        content: "Login successful",
      });

      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err?.response?.data?.error });

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
          <h1>Welcome Back! </h1>
          <p>Login to get started</p>
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
            <Form.Item
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input
                size="large"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
              className="mb-0"
            >
              <Input.Password
                size="large"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Item>

            <div className="align-center fw-600 my-36">
              <Link to="/password-reset">Forgot Password?</Link>
            </div>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button size="large" type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>

            <div className="align-center">
              <p className="clr-dark-ash">
                Don't have an account?{" "}
                <Link to="/signup" className="fw-600">
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
