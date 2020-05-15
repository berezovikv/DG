import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export class Header extends Component {
    render () {
        return (
            <>
            <Navbar  collapseOnSelect expand='lg' bg='light' font-size="20px" >
                <Container>
                    <Navbar.Brand className={s.navBrand}>
                    <Link to='/'>Display Glass
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                        <div className={`${s.item} ${s.active} ${s.nav}`}>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/">Главная</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/about">О нас</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/product">Наши разработки</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink} exact to="/service">Услги</NavLink>
                            <NavLink className={s.nav} activeClassName={s.activeLink}exact to="/contacts">Контакты</NavLink>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         

            </>
        )
    }
}
