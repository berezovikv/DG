import React from 'react';
import s from './Home.module.css';
import { Container } from 'react-bootstrap';
import laba from '../../assets/laba/laba.JPG';
import icon1 from '../../assets/icon/1.png';
import icon2 from '../../assets/icon/2.png';
import icon3 from '../../assets/icon/3.png';
import icon4 from '../../assets/icon/4.png';

import CarouselBox from '../../Components/CarouselBox';

import CarouselBox2 from '../../Components/CarouselBox2';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <CarouselBox />
      <Container>
        <div className={s.main}>
          <div className={s.products}>
            <div className={s.productInfo}>
              <div className={s.productInfoText}>
                <h1>О НАС</h1>
                <p>
                  Наша компания находится в городе Минске. Компания была основана в июне 2014г. Наша компания
                  специализируется на разработке и производстве систем отображения информации, систем дополненной
                  реальности, ЭВМ для жестких условий эксплуатации.Предприятие имеет производственные площади с 
                  чистой зоной, соответствующей классу чистоты ISO6 и ISO7, позволяющие выполнять любую работу, 
                  связанную с дисплеями.
                </p>
                <Link to='/about'>
                  <button className='button'>
                    <span>Подробнее</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className={s.productInfo}>
            <img src={laba} className={s.laba}/>
            </div>
          </div>
        </div>
        <div className={s.service}>
          <h1>НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</h1>
          <div className={s.infoBlocks}>
            <div className={s.infoItemBlock}>
              <div className={s.infoImgTitle}>
                <div className={s.infoTitle}> <img src={icon1} width="50" height="50" className={s.leftimg} />
                  <Link to='/service'>
                    <p> Разработка и производство систем отображения информации специального назначения</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={s.infoItemBlock}>
              <div className={s.infoImgTitle}>
                <div className={s.infoTitle}> <img src={icon2} width="50" height="50" className={s.leftimg} />
                  <Link to='/service'>
                    <p>Участие в новых проектах, научно-исследовательских и опытно-конструкторских работах</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={s.infoItemBlock}>
              <div className={s.infoImgTitle}>
                <div className={s.infoTitle}> <img src={icon3} width="50" height="50" className={s.leftimg} />
                  <Link to='/service'>
                    <p>Проведение широкого спектра испытаний любой сложности и продолжительности</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={s.infoItemBlock}>
              <div className={s.infoImgTitle}>
                <div className={s.infoTitle}> <img src={icon4} width="50" height="50" className={s.leftimg} />
                  <Link to='/service'>
                    <p>3D Моделирование и оформление конструкторской документации </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.main}>
          <div className={s.products}>
            <div className={s.productInfo}>
              <CarouselBox2 />
            </div>
            <div className={s.productInfo}>
              <div className={s.productInfoText}>
                <h1>НАШИ РАЗРАБОТКИ</h1>
                <p>
                  Разработанные нами видеомодули позволяют выводить информацию при любых погодных условиях, будь то
                  холод севера или при ярком солнце в пустыне, а используя совместно с ЭВМ специального назначения,
                  позволит выполнять любую поставленную задачу.
                </p>
                <Link to='/about'>
                  <button className='button'>
                    <span>Подробнее</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home;