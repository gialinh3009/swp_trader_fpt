import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { WechatWorkOutlined, LockOutlined } from "@ant-design/icons";
import "../../assets/css/login.css";
import LogoForm from "../../assets/images/logo-form.png";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    switch (values.email) {
      case "admin":
        navigate("/admin");
        break;
      case "mod":
        navigate("/mod");
        break;
      case "saler":
        navigate("/saler");
        break;
      case "user":
        navigate("/user");
        break;
      default:
        navigate("/user");
    }
  };

  return (
    <div className="login-container">
      <img src={LogoForm} alt="logo-form" />
      <Typography.Title level={3}>Login</Typography.Title>
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
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Link className="login-form-forgot" to="/forget-password">
            Quên mật khẩu?
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          Chưa có tài khoản? <Link to="/register">Đăng ký tài khoản mới</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
