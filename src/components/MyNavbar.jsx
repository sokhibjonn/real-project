import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, } from 'reactstrap';
import { Link } from "react-router-dom";
import Home from "./Home";
import Basmala from "../../src/images/basmala.png"
import Asosiy from "./Asosiy";

export default function MyNavbar(args) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="fee w-100 ">
            <div className="container">
                <Navbar {...args} expand="lg">
                    <NavbarBrand><img src={Basmala} alt="" /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto">
                            <div className="d-flex">
                                <Dropdown>
                                    <DropdownToggle caret><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F6D34E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 12H22" stroke="#F6D34E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#F6D34E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>UZ</DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem text>Dropdown Item Text</DropdownItem>
                                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <NavItem>
                                <NavLink className="forHref"><Link to="/"> Asosiy</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="forHref">Kategoriyalar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="forHref">Yangiliklar</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="forHref">Ro'yhatdan O'tish</NavbarText>
                        <NavbarText><button className="btn btn-warning nested">Kirish </button><span className="nested"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1443_3391)">
                                <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1443_3391">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></span></NavbarText>
                    </Collapse>
                </Navbar>
            </div>
            {/* <Asosiy/> */}
        </div>
    )
}