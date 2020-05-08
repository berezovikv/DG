import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import s from './About.module.css';
import sam from '../../assets/sam.jpg';
import icon1 from '../../assets/iconAbout/1.png';
import icon2 from '../../assets/iconAbout/2.png';
import icon3 from '../../assets/iconAbout/3.png';



export default class About extends Component {
  render() {
    return (
      <>
    <div className={s.pageTitle}>
      <div className={s.center}>
       <Container> 
      <h1> О нас</h1>
       </Container> 
      </div>
    </div>
        
         <Container> 
          <div className={s.mainText}>
          <p>
            ООО «Дисплей гласс» находится в городе Минске. Компания была основана в июне 2014г. 
            Наша компания специализируется на разработке и производстве систем отображения информации, 
            систем дополненной реальности, ЭВМ для жестких условий эксплуатации. Мы успешно разработали
            и производим модифицированные видеомодули с диагоналями экрана от 3.5’’ до 25.6’’ дюймов. 
            Наши конструктора используют самые современные CAD/CAM/CAE системы и в самые короткие 
            сроки разрабатывают 3-D модели и все необходимую документацию. Предприятие имеет 
            производственные площади с чистой зоной, соответствующей классу чистоты ISO6 и ISO7, 
            позволяющие выполнять любую работу, связанную с дисплеями.
          </p>
          </div>
        <div className={s.centerUl}>
        <h1>НАШИ ПРЕИМУЩЕСТВА </h1>
     
                  
          <div className={s.flex}>
            <div className={s.item}>
              <div className={s.icon}>
                <img src={icon1} width="80" height="80" className={s.leftimg} />
              </div>
              <div className={s.text}>
                Высокое качество
              </div>
            </div>
            <div className={s.item}>
              <div className={s.icon}>
                <img src={icon2} width="80" height="80" className={s.leftimg} />
              </div>
              <div className={s.text}>
                Расширенная гарантия
              </div>
            </div>
            <div className={s.item}>
              <div className={s.icon}>
                <img src={icon3} width="80" height="80" className={s.leftimg}  />
              </div>
              <div className={s.text}>
                Индивидуальный подход
             </div>
            </div>
          </div>
        </div>
     
       
          <img src={sam} width='100%' className={s.sam} />
     .   
        <div className={s.centerUl}>
        
        <h1>НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ </h1>
          <ul> 
            <li>Pазработка и производство систем отображения информации (сои) для специальной техники;</li>
            <li>Pазработка и производство систем дополненной реальности;</li>
            <li>Разработка и производство раггедизированных ЖК-модулей для авиации и наземной техники; </li>
            <li>Разработка и производство блоков задней подсветки  ЖК-модуля;</li>
            <li>Улучшение эксплуатационных свойств стандартных ЖК-матриц;</li>
            <li>Разработка и производство изделий силовой электроники;</li>
            <li>Консультирование, анализ рынка, публикации;</li>
            <li>Выполнение научно-исследовательских работ и опытно-конструкторских работ;</li>
            <li>Разработка технологических процессов и специального оборудования и оснастки;</li>
            <li>Поставка ЖК модулей и комплектующих.</li>
          </ul>
        </div>
</Container> 
      </>
    )
  }
}
