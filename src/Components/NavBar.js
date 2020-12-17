import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../context/UserContext'; 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';


const NavBar = ({handleLogOut}) => {

    const { currentUser } = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        {!currentUser ? 
        (<Navbar color="light" light expand="lg">
            <NavbarBrand tag={Link} to="/">Jobly</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>)
        :
        (<Navbar color="light" light expand="lg">
            <NavbarBrand tag={Link} to="/">Jobly</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            {currentUser.username}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} to="/profile">
                            Profile
                            </DropdownItem>
                            <DropdownItem tag={Link} to="/" onClick={handleLogOut}>
                            Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>)
        }
        </>
    )
}

export default NavBar;
