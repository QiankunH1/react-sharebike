import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Home from '../views/home/index'
import NotMatch from '../views/notMatch/index'
export default class Router extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route  component={NotMatch}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
 