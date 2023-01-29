import { Sidebar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import useAuth from "../hooks/useAuth";

export default function ControlPanel() {
  const { logout } = useAuth();
  let activeStyle = {
    backgroundColor: "indigo",
    color: "white",
    text: "white",
  };

  let activeClassName = "underline";
  return (
    <>
      <div className=" card w-fit shadow-xl">
        <Sidebar aria-label="card Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                as={NavLink}
                to="all/user/list"
                href="#"
                icon={HiUser}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                as={NavLink}
                to="all/product/manage"
                icon={HiShoppingBag}
              >
                Manage Products
              </Sidebar.Item>
              <Sidebar.Item
                as={NavLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="all/tech/manage"
                icon={HiChartPie}
              >
                Manage Tech/WP
              </Sidebar.Item>
              {/* <Sidebar.Item
                as={NavLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="#"
                icon={HiViewBoards}
              >
                Kanban
              </Sidebar.Item>
              <Sidebar.Item
                as={NavLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
                icon={HiInbox}
              >
                Inbox
              </Sidebar.Item>
              <Sidebar.Item
                as={NavLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/home"
                icon={HiTable}
              >
                Sign Up
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={NavLink} icon={HiChartPie}>
                <button onClick={logout}>Logout</button>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
