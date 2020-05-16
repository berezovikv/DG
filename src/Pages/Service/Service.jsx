import React from 'react';
import { Container } from 'react-bootstrap';
import s from '../About/About.module.css';
import p from './Service.module.css';


const Service = () => {
  return (
    <>
      <div className={s.pageTitle}>
        <div className={s.center}>
          <Container>
            <h1> Услуги</h1>
          </Container>
        </div>
      </div>
      <Container>
      <div className={p.flex}>
        <div className={p.item}>
          <p>
            <b>ОКР</b><br />
          </p>
          <p>
            Участие в новых проектах, целевых программах, научно-исследовательских
            и опытно-конструкторских работах.
          </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Механические испытания</b><br />
          </p>
          <p>
            Проведение широкого спектра испытаний любой сложности и продолжительности.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Механическая обработка</b><br />
          </p>
          <p>
            Услуги по изготовлению деталей по чертежам заказчика.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Лаборатория светотехнических измерений</b><br />
          </p>
          <p>
            Измерения и отработки светотехнических параметров дисплеев.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Климатические испытания</b><br />
          </p>
          <p>
            Проведение спектра испытаний на тепло, холод, влагу, пыль, соляной туман, пониженное давление.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Обеспечение дополнительных опций</b><br />
          </p>
          <p>
            Под заказ в готовые изделия по желанию заказчика могут добавляться дополнительные опции.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Лаборатория ЭМС</b><br />
          </p>
          <p>
            Проведение испытаний на соответствие требованиям ЭМС. Услуги по защите информации объектов СВТ.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Доработка ЖК-панелей</b><br />
          </p>
          <p>
            Услуги по доработке ЖК-панелей.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>Электронные компоненты под заказ</b><br />
          </p>
          <p>
            Поставка электронных компонентов мировых производителей.
      </p>
        </div>
        <div className={p.item}>
          <p>
            <b>3D моделирование и печать</b><br />
          </p>
          <p>
            3D моделирование и печать трехмерных моделей изделий.
      </p>
        </div>
        <div className={p.item}>
          <h3>Не нашли нужную услугу? Звоните:</h3>

      +375 (25) 964-16-50
      </div>
      </div>
      </Container>
    </>
  )
}

export default Service;