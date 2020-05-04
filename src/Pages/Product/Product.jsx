import React from 'react';
import  ModuleList  from '../../Components/Containers/module-list';
import  Details  from '../../Components/Containers/details-list';
import s from '../About/About.module.css';
import p from '../Product/Product.module.css';




const Product = () => (

  <>

<div className={s.pageTitle}>
   <div className={s.center}>
    <h1> Наши разработки </h1>
    </div>
</div>

  <div className={s.center}>
    <div className={p.module} >
    <h3> Модули</h3>
    <ModuleList />
      </div> 
      <div className={p.details} >
      <Details />

      </div> 
     
      
    {/* // <div className={s.pageTitle}>
    //   <div className={s.center}>
    //   <h1> Наши разработки </h1>
    //   </div>
    // </div>
    // <h1>ВИДЕО МОДУЛИ</h1>
    // <div className={p.flex}>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 3.5 дюйма</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 5.7 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 10 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 12 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 12.5 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 19 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 24 дюйма</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 25.6 дюймов</h4>
    //     </div>
    //   </div>
    //   <div className={p.item}>
    //     <div className={p.imgContainer}>
    //     </div>
    //     <div className={p.imgTitle}>
    //     <h4>диагональ 3.5 дюйма</h4>
    //     </div>
    //   </div>
    // </div> */}
  </div>
  </>
  )


export default Product;