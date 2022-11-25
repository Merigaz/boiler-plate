import type { MenuProps } from "antd";
export const items: MenuProps["items"] = [
  {
    key: "Tasks",
    label: `nav ${key}`,
    icon: "",
  },
  {
    label: "Poke",
    key: "Poke",
    icon: "",
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: "",
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
]
