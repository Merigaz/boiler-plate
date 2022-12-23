import type { MenuProps } from "antd";
import {BugFilled} from '@ant-design/icons';
import { Link } from "react-router-dom";
export const items: MenuProps["items"] = [
  {
    label: <Link to="/Tasks" >Tasks</Link>,
    key: "Tasks",
    icon: <BugFilled />,
  },
  {
    label: <Link to="/Poke">Poke</Link>,
    key: "Poke",
    icon: <BugFilled />,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <BugFilled />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "",
    key: "alipay",
  },
];