import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
// import {HashRouter,Route,Switch} from 'react-router-dom'
import Home from '../views/home/index'
import NotMatch from '../views/notMatch/index'
import Admin from '../views/admin/index'
import Order from '../views/order/index'
import Bar from '../views/echarts/bar/index'
import Pie from '../views/echarts/pie/index'
import OrderDetail from '../views/order/detail'
import './index.less'
export default class Router extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
         <Switch>
            
             <Route path='/common/order/detail/:id' component={OrderDetail}></Route>
             <Admin>       
               <Switch>     
                    {/* <Redirect from='/' to='/admin/home'></Redirect>                */}
                    <Route path='/admin/home' component={Home}></Route>
                    <Route path='/admin/order' component={Order}></Route>
                    <Route path='/admin/echarts/bar' component={Bar}></Route>
                    <Route path='/admin/echarts/pie' component={Pie}></Route>
                    {/* <Redirect from='/' to='/admin/home'></Redirect>   */}
                    <Route  component={NotMatch}></Route>
               </Switch>
             </Admin>
             <Redirect from='/' to='/admin/home'></Redirect> 
             {/* <Route  component={NotMatch}></Route> */}
         </Switch>    
        </div>
      </BrowserRouter>
    )
  }
}
 


/* <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={()=>
                            <Admin>
                                <Switch>    
                                    <Route path="/admin/home" component={Home}></Route>   
                                    <Route path="/admincondPage" component={SecondPage}></Route>  
                                    <Route component={NotMatch}></Route>
                                </Switch>                              
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter> */
