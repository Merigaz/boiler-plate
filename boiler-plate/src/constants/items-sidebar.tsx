import type { MenuProps } from "antd";
import {BugFilled} from '@ant-design/icons';
export const items: MenuProps["items"] = [
  {
    label: <a href="/Tasks">Tasks</a>,
    key: "Tasks",
    icon: <BugFilled />,
  },
  {
    label: <a href="/Poke">Poke</a>,
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