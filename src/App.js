import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/UI/Header/Header';

import { Login } from './components/Users/Login/Login'
import { Signup } from './components/Users/Signup/Signup'
import { PrivateRoute } from "./components/PrivateRoute";
import { Dashboard } from './components/Dashboard/Dashboard'
import { ProductUpdate } from './components/Dashboard/Update_Product'

import Cart from './views/Cart'
import Layout from './components/Layout/Layout';
// import Cart from './views/Cart'

function App() {
  return (
    <>
      <Router>
        {/* forceRefresh={true}   Effet de rechagement de page */}

        {/* Call HEADER */}
        <Header />


        <Switch>
          
          <Route path="/cart" exact component={Cart} />

          <Route path="/" exact component={Layout} />
          {/* <Route path="/Cart" exact component={Cart} /> */}

          <Route path="/newsHome/update/:id" exact component={ProductUpdate} />

          <Route path="/login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />

          <PrivateRoute path="/dashboard" component={Dashboard} />


          <Route path="/" component={() => <div className="mt-5 text-center"><h1>Erreur 404</h1></div>} />

        </Switch>
      </Router>

      {/* <Layout />          Components */}

    </>
    );
}

export default App;
