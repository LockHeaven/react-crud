import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Typography} from 'antd';
const {Text} = Typography;
const Navbar = (props) => {

    return (
      <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active><Text type="success">User List</Text></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/add"><Text type="warning">Create User</Text></NavLink>
        </NavItem>
      </Nav>
    </div>
    )
  }

  export default Navbar;