import React , { Component } from 'react';
import Projects from './Projects'
//import {Link} from 'react-router-dom'
export class MyProjects extends Component {
    super 
    render(){
        return(
            <div className=" bg-gray-400">
            <Projects 
                projects={this.state.data}
            />
           {/*  <Link to="/exercises/new">
                <img className="h-8 w-8"alt='' src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2Fdescarga.jpg?alt=media&token=c805b8ae-938d-4b6c-b759-32ae3f479323"/>
            </Link> */}
            </div>
        );
    }
}