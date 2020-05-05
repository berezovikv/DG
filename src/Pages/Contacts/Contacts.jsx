import React, { Component } from 'react';
import s from '../About/About.module.css';
import p from './Contacts.module.css';
import { Container } from 'react-bootstrap';
import FormCode from '../../Components/Actions/FormCode';
import { YMaps, Map } from 'react-yandex-maps';

const style = {
  position: 'absolute',
  left: 0,
  top: 40,
  width: '100%',
  height: '100%',
};

class Contacts extends React.Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
    <>
      <div className={s.pageTitle}>
        <div className={s.center}>
          <h1>Контакты</h1>
        </div>
        
      </div>
      <div className={s.center}>
      <div className={p.ourAddress}>
            <h2> НАШ АДРЕС:</h2>
      </div>
      </div>
      <div className={s.center}>
      <Container style={{ width: '50%' }}>
          
          <div className={p.name}>  
          <b>Полное название:</b>   
         <p> Общество с ограниченной ответственностью "Дисплей гласс"</p>
          </div>
          <div className={p.address}>
          <b>Юр. адрес:</b> 
          <p>г. Минск,ул. Бирюзова С.С., д.4, корп.5, пом. 244</p>
          </div>
          <div className={p.phone}> 
          <b>Моб. телефон:</b>
          <p>+375 (25) 964-16-50 <br/> 
          +375 (25) 964-16-50 <br/> 
          +375 (25) 964-16-50 </p>
          </div>
          <div className={p.emailAddress}>
          <b>Моб. телефон:</b>  
          <p> amf996@yandex.by </p>
          </div>
      </Container>
      <Container style={{ width:'50%'}}>
          <FormCode onSubmit={this.submit} />
      </Container> 
     </div>
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <YMaps >
          <Map style={style} defaultState={{ center: [53.916080, 27.513583], zoom: 17 }} />
        </YMaps>
      </div>
    </>
  )
}
}
export default Contacts;