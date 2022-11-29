import { Layout } from "antd";
import Spinload from "../components/Loading/Spinload";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Col, Row } from "antd";
import Logo from "../components/Logo";
import { useState } from "react";
const { Header, Footer, Sider, Content } = Layout;

function Main() {
  const [siderCollapsed, setsiderCollapsed] = useState(true);
  return (
    <>
      <Layout style={{ margin: 0 }}>
        <Header style={{}}>
          <Row justify="space-between" align="middle">
            <Col span={6}>
              <Logo />
            </Col>
            <Col span={18} style={{alignSelf:"flex-end"}}>
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
            <Content style={{height:850}} >
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
