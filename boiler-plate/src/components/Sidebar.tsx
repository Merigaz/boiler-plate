import { useState } from "react";
import { Menu, MenuProps } from "antd";
import { items } from "../constants/items-sidebar";

function Sidebar() {
  const [key, setkey] = useState("key");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setkey(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[key]}
        mode="vertical"
        items={items}
        style={{ backgroundColor: "transparent"}}
      />
    </>
  );
}

export default Sidebar;