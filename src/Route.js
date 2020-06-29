import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from './Hoc/Layout/Layout'
//COMPONENTS
import Home from './Home'
import Collections from './Components/NavbarRoutes/Collections/Collections'
import TShirts from './Components/NavbarRoutes/T-Shirts/TShirts'


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/T-Shirts" exact component={TShirts} />
          <Route path="/online-shop&all-collections" exact component={Collections} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
