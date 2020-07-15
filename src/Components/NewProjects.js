import React , { Component } from 'react';
import ProjectsForm from './ProjectsForm'
/* 
const NewProjects =(props)=>(
    <div className="flex mb-4 animated fadeIn Low">
        {
            <h1>Crear un Nuevo Proyecto</h1>

        }
    </div>
)
export default NewProjects
import React from 'react' */

class NewProjects extends Component {
    state = {
        form:{}
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <ProjectsForm
                onChange={this.handleChange}
                form={this.state.form}
            />
        )
    }
}

export default NewProjects