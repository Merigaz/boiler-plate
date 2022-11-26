import { Layout } from "antd";
import Spinload from "../components/Loading/Spinload";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Logo from "../components/Logo";

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <>
      <Layout>
        <Header>
          
          <Navbar />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Layout>
            <Content style={{ height: "100vh" }}>
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
