import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { WechatWorkOutlined } from "@ant-design/icons";
import "../../assets/css/login.css";
import LogoForm from "../../assets/images/logo-form.png";
import { Link } from "react-router-dom";

function ForgetPasswordPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-container">
      <img src={LogoForm} alt="logo-form" />
      <Typography.Title level={3}>Forget Password</Typography.Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input prefix={<WechatWorkOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Submit
          </Button>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          Quay lại <Link to="/login">Đăng nhập</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ForgetPasswordPage;
