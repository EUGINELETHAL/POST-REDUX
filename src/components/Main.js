import {BrowserRouter,Switch, Route } from 'react-router-dom';
import React from 'react'
import Meals from './Meals'
import Nav from './Nav'
import About  from './About'

    


const Main = () => (
     <BrowserRouter>
     <div>
    <Nav/>
    <Switch>
     <Route exact path='/' component={Meals}></Route>
     <Route exact path='/add' component={About}></Route>
    </Switch>
    </div>
   </BrowserRouter>
  );
export default Main;
