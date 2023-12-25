/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PasswordResetForm = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [emailAddress, setEmailAddress] = useState("");

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleSubmit = async () => {
    const recoverData = {
      emailAddress: emailAddress,
      dealGroupId: 0,
    };

    try {
      await axios.post(
        `https://apid.aclaro.ai/api/auth/recover-password`,
        recoverData,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Request-Id": 9778,
          },
        }
      );

      messageApi.open({
        type: "success",
        content: "Successfully submitted",
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
          <h1>Forget Password</h1>
          <p>
            Enter your email for the verification process we will send
            information to your email.
          </p>
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
              <Input size="large" name="emailAddress" placeholder="Enter your email" value={emailAddress} onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button size="large" type="primary" htmlType="submit" block>
                Continue
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

export default PasswordResetForm;
