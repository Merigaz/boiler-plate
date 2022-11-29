import { useState } from "react";
import { Menu, MenuProps } from "antd";
import { items } from "../../constants/items-navbar";


function Navbar() {
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
        mode="horizontal"
        items={items}
        style={{}}
        />
    </>
  );
}

export default Navbar;
