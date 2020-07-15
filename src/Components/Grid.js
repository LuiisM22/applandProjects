import React , { Component } from 'react';
import Projects from './Projects'
import {Link} from 'react-router-dom'
import axios from "axios";
export class Grid extends Component {
    constructor (props){
        super(props)
        this.state={
            data:[]
        }
        this.getData= this.getData.bind(this)
    }
    async getData(){
        try {
            let { data } = await axios.post(
                'http://localhost:5000/applandproyects/us-central1/getProject',
              );
              if (data.success ){
                  console.log(data);
                  this.setState({
                      data:data.data  
                  })
                }
                else{
                    console.log('error ');
                }
        } catch (error) {   
        }
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <div className=" bg-gray-400">
            <Projects 
                projects={this.state.data}
            />
            <Link to="/exercises/new">
                <img className="h-8 w-8"alt='' src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2Fdescarga.jpg?alt=media&token=c805b8ae-938d-4b6c-b759-32ae3f479323"/>
            </Link>
            </div>
        );
    }
}