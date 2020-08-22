
import React, { Component } from "react";
import "./App.css";
import { NavT } from "./Statics/NavT";
import { Footer } from "./Statics/Footer";
import  Grid  from "./Services/Grid";
import { MyProjects } from "./Components/MyProjects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewProjects from "./Components/NewProjects";
import ProjectsDetails from "./Components/ProjectsDetails";
import NotFound from "./Components/NotFound";
class App extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="../build/tailwind.css"></link>
        <NavT/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/My-Projects" component={MyProjects} />
            <Route exact path="/" component={Grid} />
            <Route exact path="/Create-Projects" component={NewProjects} />
            <Route
              path="/ProjectsDetails/:id"
              component={(props) => <ProjectsDetails {...props} />}
            ></Route>
            {/* <Route path="/Details/:idProject"  component={Details}></Route> */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        {/* <Reutilizable reu={'holaa'} reu2={'reu2'}></Reutilizable> */}
        {/*  <Grid/> */}
        <Footer/>
      </div>
    );
  }
}
export default App;