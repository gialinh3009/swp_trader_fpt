import React from "react";
import { Form, Input, Button, Typography } from "antd";
import "../../assets/css/register.css";
import LogoForm from "../../assets/images/logo-form.png";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="register-container">
      <img src={LogoForm} alt="logo-form" />
      <Typography.Title level={3}>Register</Typography.Title>
      <Form name="register" className="register-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input placeholder="Username" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email" prefix={<WechatWorkOutlined />} />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input placeholder="Phone Number" prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
          hasFeedback
        >
          <Input.Password placeholder="Password" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Đăng kí
          </Button>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
