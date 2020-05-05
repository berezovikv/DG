import React from 'react';
import s from './Home.module.css';
import icon1 from '../../assets/icon/1.png';
import icon2 from '../../assets/icon/2.png';
import icon3 from '../../assets/icon/3.png';
import icon4 from '../../assets/icon/4.png';
import CarouselBox from '../../Components/CarouselBox';
import CarouselBox1 from '../../Components/CarouselBox1';
import CarouselBox2 from '../../Components/CarouselBox2';

const Home = () => {
  return (
    <>
 
    <CarouselBox />

      <div className={s.main}>
        <div className={s.products}>
          <div className={s.productInfo}>
            <div className={s.productInfoText}>
            <h1>О НАС</h1>
            <p>
            Наша компания находится в городе Минске. Компания была основана в июне 2014г. Наша компания 
            специализируется на разработке и производстве систем отображения информации, систем дополненной 
            реальности, ЭВМ для жестких условий эксплуатации.
            </p>
            <button className={s.button}>
             <span>Подробнее</span>
            </button>
            </div>
          </div>
          <div  className={s.productInfo}>
            <CarouselBox1 />
          </div>
        </div>
      </div>



      <div className={s.service}>
       
          <h1>НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</h1>
       
        <div className={s.infoBlocks}>

          <div className={s.infoItemBlock}>
            <div className={s.infoImgTitle}>
              <div className={s.infoTitle}> <img src={icon1} width="50" height="50" className={s.leftimg}/>
              <p> Разработка и производство систем отображения информации специального назначения</p>
              </div> 
            </div>
          </div>
        
          <div className={s.infoItemBlock}>
            <div className={s.infoImgTitle}>
              <div className={s.infoTitle}> <img src={icon2} width="50" height="50" className={s.leftimg}/>
              <p>Участие в новых проектах, научно-исследовательских и опытно-конструкторских работах</p>
              </div> 
            </div>
          </div>

          <div className={s.infoItemBlock}>
            <div className={s.infoImgTitle}>
              <div className={s.infoTitle}> <img src={icon3} width="50" height="50" className={s.leftimg}/>
              <p>Проведение широкого спектра испытаний любой сложности и продолжительности</p>
              </div> 
            </div>
          </div>

          <div className={s.infoItemBlock}>
            <div className={s.infoImgTitle}>
              <div className={s.infoTitle}> <img src={icon4} width="50" height="50" className={s.leftimg}/>
              <p>3D Моделирование и оформление конструкторской документации </p>
              </div> 
            </div>
          </div>
        </div>

      </div>
      <div className={s.main}>
      <div className={s.products}>
        <div  className={s.productInfo}>
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
          <button className={s.button}>
          <span>Подробнее</span>
          </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;