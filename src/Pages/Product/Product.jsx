import React from 'react';
import { Container } from 'react-bootstrap';
import ModuleList from '../../Components/Containers/module-list';
import Details from '../../Components/Containers/details-list';
import s from '../About/About.module.css';
import p from './Product.module.css';
import { Col, Row, Tab } from 'react-bootstrap';





const Product = () => (
  <>
    <div className={s.pageTitle}>
      <div className={s.center}>
        <Container>
          <h1> Разработки </h1>
        </Container>
      </div>
    </div>


    <Container style={{paddingTop: '2%', paddingBottom: '2%'}}>
      <Tab.Container id='ledt-tabs-example'>
        <Row className={p.row}>
          <Col className={p.col3} >
            <h3> Модули</h3>

            <ModuleList />
      
          </Col>
          <Col style={{paddingTop:"10px"}}>
            <Details />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  </>
)


export default Product;