import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "antd";
import Logo from "../components/Logo";
import { useState } from "react";
import Spinload from "../components/Spinload";
const { Header, Footer, Sider, Content } = Layout;

function Main() {
  const [siderCollapsed, setsiderCollapsed] = useState(true);
  return (
    <>
      <Layout style={{height:"100vh"}}>
        <Header>
          <Row justify="space-between" align="middle">
            <Col span={6}>
              <Logo />
            </Col>
            <Col span={18}>
              <Navbar />
            </Col>
          </Row>
        </Header>

        <Layout>
          <Sider
            collapsible
            trigger={null}
            collapsed={siderCollapsed}
            onMouseEnter={() => setsiderCollapsed(false)}
            onMouseLeave={() => setsiderCollapsed(true)}
          >
            <Sidebar />
          </Sider>
          <Layout >
            <Content>
              <Spinload />
              <Outlet />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default Main;
