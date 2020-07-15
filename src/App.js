import React ,{Component} from 'react';
import './App.css'
import {NavT} from './Components/NavT'
import {Grid} from './Components/Grid'
import {MyProjects} from './Components/MyProjects'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NewProjects from './Components/NewProjects'
import NotFound from './Components/NotFound'
//import Reutilizable from './Components/Reutilizable'
//import {Card} from './Components/Card'

class App extends Component{
    render(){
        return(
            <div>
                <NavT user="Usuario"/>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/My-Projects" component={MyProjects} />
                        <Route exact path="/" component={Grid} />
                        <Route exact path="/Create-Projects" component ={NewProjects}/>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                {/* <Reutilizable reu={'holaa'} reu2={'reu2'}></Reutilizable> */}
                {/*  <Grid/> */}
                
            </div>
        );
    }
}
export default App;
