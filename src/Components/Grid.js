import React , { Component } from 'react';
import Projects from './Projects'
import axios from "axios";
export class Grid extends Component {
    constructor (props){
        super(props)
        this.state={
            Data2:[]
        }
       // this.getData= this.getData.bind(this)
    }

    async getData(){
        try {
            let {data}  = await axios.get(
                'http://localhost:5000/applandproyects/us-central1/api/projects',
                );
                //console.log(data.data);
                if (data.success ){

                    this.setState({
                        Data2 : data.data
                    });
                }
                else{
                    console.log('error ');
                }
        } catch (error) {
            console.log(error);   
        }
    }
    componentDidMount(){
    this.getData()
    }
    render(){
        return(
            <div className=" h-auto w-auto ml-2 mr-2 mb-4 bg-gray-400">        
            <Projects 
                project= { this.state.Data2 }
                />
            </div>
        );
    }
}