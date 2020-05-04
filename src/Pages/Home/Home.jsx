import React from 'react';
import s from './Home.module.css';
import icon1 from '../../assets/icon/1.png';
import icon2 from '../../assets/icon/2.png';
import icon3 from '../../assets/icon/3.png';
import icon4 from '../../assets/icon/4.png';
import mac from './mac.png';
import CarouselBox from '../../Components/CarouselBox';


const Home = () => {
  return (
    <>
    <CarouselBox />
      <div className={s.main}>
      <div className={s.products}>
        <div className={s.productInfo}>
          <div className={s.productInfoText}>
          <h1>О нас</h1>
          <p>Our company is your one stop solution for all needs. There is no doubt that we are the leaders and you don’t have to worry about our image because it is perfect. A great number of different grateful clients is the best proof of the previous statement.</p>
          <button className={s.button}><span>Reade More</span></button>
          </div>
        </div>
        <div  className={s.productInfo}><img src={mac} width="500" height="500" className={s.mac}/></div>
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
        <div  className={s.productInfo}><img src={mac} width="500" height="500" className={s.mac}/></div>
        <div className={s.productInfo}>
          <div className={s.productInfoText}>
          <h1>Продукция</h1>
          <p>Our company is your one stop solution for all needs. There is no doubt that we are the leaders and you don’t have to worry about our image because it is perfect. A great number of different grateful clients is the best proof of the previous statement.</p>
          <button className={s.button}><span>Reade More</span></button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home;