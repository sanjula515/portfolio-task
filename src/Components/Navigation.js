import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
export class Navigation extends Component{
    render(){
        return(
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white"to="/About">About
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white"to="/Skills">Skills
            </NavLink>
            </Nav>
            </Navbar.Collapse>
            <Nav.Item className="ml-auto ">
            <h6 className="side">PORTFOLIO</h6>
            </Nav.Item>
            </Navbar>
        )
    }
}