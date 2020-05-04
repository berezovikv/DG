import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import s from './Header.module.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Product from '../Pages/Product/Product'
import Service from '../Pages/Service/Service'
import Contacts from '../Pages/Contacts/Contacts'


export default class Header extends Component {
    render () {
        return (
            <>
            <Navbar  collapseOnSelect expand='lg' bg='light' font-size="20px" >
                <Container>
                    <Navbar.Brand href='/'>
                        Display Glass
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                        <Nav.Link className={s.nav} href="/">Главная</Nav.Link>
                        <Nav.Link className={s.nav} href="/about">О нас</Nav.Link>
                        <Nav.Link className={s.nav} href="/product">Наши разработки</Nav.Link>
                        <Nav.Link className={s.nav} href="/service">Услги</Nav.Link>
                        <Nav.Link className={s.nav} href="/contacts">Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/product' component={Product} />
                    <Route exact path='/service' component={Service} />
                    <Route exact path='/contacts' component={Contacts} />
                   
                
                </Switch>
            </Router>

            </>
        )
    }
}
