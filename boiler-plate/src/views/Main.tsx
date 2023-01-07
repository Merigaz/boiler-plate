import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "antd";
import Logo from "../components/Logo";
import { useState } from "react";
import imageUrl from "../assets/backgroundImage.png";


const { Header, Footer, Sider } = Layout;

function Main() {
  const [siderCollapsed, setsiderCollapsed] = useState(true);
  return (
    <>
      <Layout
        style={{
          height: "100vh",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Layout style={{ backgroundColor: "transparent" }}>
          <Header style={{ backgroundColor: "transparent" }}>
            <Row justify="space-around" align="top">
              <Col span={8}>
                <Logo />
              </Col>
              <Col span={16}>
                <Navbar />
              </Col>
            </Row>
          </Header>
          <Layout style={{ backgroundColor: "transparent" }}>
            <Row align="top">
              <Col style={{ paddingTop: "12vh" }}>
                <Sider
                  style={{ backgroundColor: "transparent" }}
                  collapsible
                  trigger={null}
                  collapsed={siderCollapsed}
                  onMouseEnter={() => setsiderCollapsed(false)}
                  onMouseLeave={() => setsiderCollapsed(true)}
                >
                  <Sidebar />
                </Sider>
              </Col>
            </Row>
            <Layout style={{ backgroundColor: "transparent", padding:"36px"}}>
              <Outlet />

              <Footer style={{ backgroundColor: "transparent" }}></Footer>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default Main;
