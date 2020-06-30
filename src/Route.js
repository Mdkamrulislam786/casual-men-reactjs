import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from './Hoc/Layout/Layout'
//COMPONENTS
import Home from './Home'
import Collections from './Components/NavbarRoutes/Collections/Collections'
import TShirts from './Components/NavbarRoutes/TShirts/TShirts'
import Shirts from './Components/NavbarRoutes/Shirts/Shirts'
import Jeans from './Components/NavbarRoutes/Jeans/Jeans'
import OurPP from './Components/OurPP/OurPP'
import Polos from './Components/NavbarRoutes/TShirts/AllTshirts/Polos/Polos'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/T-Shirts" exact component={TShirts} />
          <Route path="/online-shop&all-collections" exact component={Collections} />
          <Route path="/shirts" exact component={Shirts} />
          <Route path="/jeans" exact component={Jeans} />
          <Route path="/Exclusive-Products" exact component={OurPP}/>
          <Route path="/polos" exact component={Polos}/>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
