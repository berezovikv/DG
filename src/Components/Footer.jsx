import React from 'react';
import s from './Footer.module.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        
       <footer className={s.footer}>
           <Container>
           <p>© 2020 ООО “Дисплей Гласс”. Все права защищены.</p>	
           </Container>
       </footer>
    )
}

export default Footer;