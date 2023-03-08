import React from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider } = Layout;

export function AppLayout() {
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item>
            <Link to="/">Homepage</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
          >
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <div style={{ margin: "30px 80px" }}>
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}
