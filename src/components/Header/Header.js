import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Photo/premierLogo.png';
import HomeIcon from '@material-ui/icons/AccessAlarms';

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand><Link to="/home"><img src={logo} alt=""/></Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link> <Link to="/"><HomeIcon></HomeIcon></Link></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;