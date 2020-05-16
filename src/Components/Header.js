import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export class Header extends Component {
    render () {
        return (
            <>
            <Navbar collapseOnSelect expand='lg' bg='light' font-size="20px" >
                <Container>
                    <Navbar.Brand className={s.navBrand}>
                    <Link to='/'onClick={() => {window.scrollTo(0, 0);}}>Display Glass
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                        <div className={`${s.item} ${s.active} ${s.nav}`}>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/" onClick={() => {window.scrollTo(0, 0);}}>Главная</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/about" onClick={() => {window.scrollTo(0, 0);}}>О нас</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/product" onClick={() => {window.scrollTo(0, 0);}}>Наши разработки</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/service" onClick={() => {window.scrollTo(0, 0);}}>Услги</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink}exact to="/contacts" onClick={() => {window.scrollTo(0, 0);}}>Контакты</NavLink>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         

            </>
        )
    }
}
