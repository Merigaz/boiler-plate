import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "antd";
import Logo from "../components/Logo";
import { useState } from "react";
import Spinload from "../components/Spinload";
import imageUrl from "../assets/backgroundImage.png"

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  const [siderCollapsed, setsiderCollapsed] = useState(true);
  return (
    <>
   
      <Layout style={{ height: "100vh", backgroundImage:`url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'}}>
    <Layout  style={{ backgroundColor: "transparent"}}>

        <Header  style={{ backgroundColor: "transparent"}} >
          <Row justify="space-around" align="top">
            <Col span={8} >
              <Logo />
            </Col>
            <Col span={16}>
              <Navbar />
            </Col>
          </Row>
        </Header>

        <Layout  style={{ backgroundColor: "transparent"}}>
          <Sider
          style={{ backgroundColor: "transparent"}}
            collapsible
            trigger={null}
            collapsed={siderCollapsed}
            onMouseEnter={() => setsiderCollapsed(false)}
            onMouseLeave={() => setsiderCollapsed(true)}
            
            >
            <Sidebar />
          </Sider>
          <Layout style={{ backgroundColor: "transparent"}}>
            <Content >
              
              <Spinload/>
              < Outlet />
             
              
            </Content>
            <Footer style={{ backgroundColor: "transparent"}}></Footer>
          </Layout>
        </Layout>
      </Layout>
            </Layout>
      
    </>
  );
}
export default Main;
