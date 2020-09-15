import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {

    return (
      <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active>User List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/add">Create User</NavLink>
        </NavItem>
      </Nav>
    </div>
    )
  }

  export default Navbar;