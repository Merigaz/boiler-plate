
import { Layout } from "antd";
import {  } from "react-router-dom";
import Spinload from "../components/Loading/Spinload";
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";

const { Header, Footer, Sider, Content } = Layout;

function Main({}) {
  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout >
          <Header><Navbar/></Header>
          <Content style={{height:"100vh"}}>
            <Spinload />
            <Outlet/>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
export default Main;
