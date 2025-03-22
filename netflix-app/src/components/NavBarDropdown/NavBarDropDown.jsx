import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
export default function NavBarDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Genre
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <input className="searchbar" type="text" placeholder="Search Movies" name="" id="" />
        <Dropdown.Item ><FaSearch className="icon" /></Dropdown.Item>
        <Dropdown.Item ><FaBell className="icon" /></Dropdown.Item>
        <Dropdown.Item ><FaUser className="icon" /></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
