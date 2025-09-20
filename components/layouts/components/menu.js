import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    name: "Settings",
    path: "#",
    icon: IoMdSettings,
    children: [
      {
        name: "Organizations",
        path: "/settings/organizations-list",
        icon: FaRegCircle,
      },
      {
        name: "User List",
        path: "settings/user-list",
        icon: FaInfoCircle,
      },
      {
        name: "Add Usedr",
        path: "/users/add",
        icon: FaInfoCircle,
      },
      {
        name: "User Lisdt",
        path: "/users/list",
        icon: FaInfoCircle,
      },
    ],
  },
];
