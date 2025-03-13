"use client";

import React from "react";
import { Button, Dropdown, Layout, Menu, MenuProps } from "antd";
import { useRouter, usePathname } from "next/navigation";
const { Header, Content } = Layout;

import {
  LogoutOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  { key: "/product", label: "Product" },
  { key: "/customer", label: "Customer" },
];

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    router.push(`${e.key}`);
  };

  const userItems: MenuProps["items"] = [
    {
      key: "logout",
      label: "ออกจากระบบ",
      icon: <LogoutOutlined />,
      onClick: () => {
        // logout();
        router.push(`/auth/login`);
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="font-ibm">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          alignItems: "center",
          minHeight: 65,
        }}
        className="pl-2 pr-4 w-full"
      >
        <div className="flex gap-3 flex-nowrap overflow-y-auto items-center md:justify-between">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[pathname]}
            items={items}
            overflowedIndicator={<MenuUnfoldOutlined />}
            className="flex flex-row"
            disabledOverflow={true}
            onClick={handleMenuClick}
          />
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex text-white"> v1.0.0</div>
            <div className="flex">
              <Dropdown
                menu={{ items: userItems }}
                placement="bottomLeft"
                arrow
                className="font-ibm"
              >
                <Button type="text" className="text-white font-bold">
                  <UserOutlined className="w-5 h-5" /> Tester
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
