import React from 'react';
import './App.css';
//COMPONENTS
import Header from './Components/Header/header'
import CMJumbotron from './Components/Header/Jumbotron/jumbotron'
import Popularp from './Components/PProducts/Popularp'
import DiscoverPS from './Components/DiscoverPS/DiscoverPS'
import OurPP from './Components/OurPP/OurPP'
import Footer from './Components/Footer/Footer'

const App=()=> {
  return (
    <>
      <Header/>
      <CMJumbotron/>
      <Popularp/>
      <DiscoverPS/>
      <OurPP/>
      <Footer/>
    </>
  );  
}

export default App;
