import type { MenuProps } from "antd";
import {BugFilled} from '@ant-design/icons';
import { Link } from "react-router-dom";
export const items: MenuProps["items"] = [
  {
    label: <Link to="/Tasks">Tasks</Link>,
    key: "Tasks",
    icon: <BugFilled />,
  },
  {
    label: <Link to="/Poke">Poke</Link>,
    key: "Poke",
    icon: <BugFilled />,
  },
  {
    label: <Link to="/Theme">Theme</Link>,
    key: "Theme",
    icon: <BugFilled />,
  }
];
