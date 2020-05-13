import React from 'react';
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
            <Container>
              <h1> Контакты</h1>
            </Container>
          </div>
        </div>

        
        <div className={p.center}>
          <Container style={{ padding:'20px', margin: 'auto'}} >
          <h2> Наш адрес:</h2><br/>
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
              <p>+375 (25) 964-16-50 <br />
          +375 (25) 964-16-50 <br />
          +375 (25) 964-16-50 </p>
            </div>
            <div className={p.emailAddress}>
              <b>Моб. телефон:</b>
              <p>
                <a href="mailto:amf996@yandex.by">
                  amf996@yandex.by 
                </a>
              </p>
            </div>
          </Container>
          <Container  style={{ padding:'20px', margin: '0 auto'}}>
          <h2>Обратная связь</h2><br/>
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