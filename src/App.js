import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Components/Header';
import Footer from './Components/Footer';
import {Route, HashRouter} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Product from './Pages/Product/Product';
import Service from './Pages/Service/Service';
import Contacts from './Pages/Contacts/Contacts';



function App() {
  return (
   <div>
     <HashRouter>
     <Header />
        <Route exact path="/" render={()=><Home/>}/>
        <Route exact  path="/about" render={()=><About/>}/>
        <Route exact path="/product" render={()=><Product/>}/>
        <Route exact path="/service" render={()=><Service/>}/>
        <Route path="/contacts" render={()=><Contacts/>}/>
     <Footer />
     </HashRouter>

   </div>
  );
}

export default App;
