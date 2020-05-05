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
  </div>
  </>
  )


export default Product;