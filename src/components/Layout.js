import React from 'react'
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
          <NavLink href="/cards"><Text type="success">User Cards</Text></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/add"><Text type="warning">Create User</Text></NavLink>
        </NavItem>
      </Nav>
    </div>
    )
  }

  export default Navbar;