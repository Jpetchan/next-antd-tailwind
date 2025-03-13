"use client";

import React from "react";
import { Form, Input, Button, Card } from "antd";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log("Login Data:", values);
    const token = "your-jwt-token"; // Replace with actual token
    setCookie("token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    redirect("/product");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#00ab38",
      }}
    >
      <Card title="Login" style={{ width: 300 }}>
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
