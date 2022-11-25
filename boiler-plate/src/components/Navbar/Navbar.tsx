
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { navbarMenu } from "../../constants/navbar";
function Navbar() {
  return (
    <>
      {navbarMenu.map((button: any) => {
        return (
          <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
              {button.name}
            </Menu.Item>
          </Menu>
        );
      })}
    </>
  );
}

export default Navbar;
