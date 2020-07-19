import React , { Component } from 'react';

export class NavT extends Component {
  state={
    inputSearch:''
  }
  _handleChange=(e) =>{
    this.setState({ inputSearch :e.target.value })
  }
  _handleSubmit=(e)=>{
    e.preventDefault()
    alert(this.state.inputSearch)
  }
  
  data() {
    return {
      isOpen: false
    }}
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }

    document.addEventListener('keydown', handleEscape)

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  }
    render(){
      const {user}=this.props
      return(
        <div>
          <link rel="stylesheet" href="../../build/tailwind.css" ></link>
          <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-3">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <a href="/"  className="font-semibold text-xl tracking-tight">Appland Projects</a>
            </div>
            <div className="w-auto md:flex flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="md:flex text-sm lg:flex-grow">
                <a href="/My-Projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Mis Proyectos
                </a>
                <a href="/Create-Projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Nuevo Proyecto
                </a>
                <a href="/Create-Projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">

                </a>
              </div>
              <form onSubmit={this._handleSubmit}>
                <div className="md:flex w-auto">
                  <input  
                  onChange={this._handleChange}
                  className="mx-0 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal" type="text" placeholder="Buscar"></input>
                  <button className="mx-1 lg:inline-block mt-1000 text-sm px-4 py-2 leading-none border rounded text-white border-white block hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Buscar</button>
                  <button  className="mx-3 lg:inline-block  z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar"/>
                  </button>
                </div>
              </form>
              <div className="relative">
              {/* <button onClick="isOpen = false" className="fixed h-full w-full bg-black opacity-50 cursor-default"></button> */}
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg">
                <p href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Hola: {user}</p>
                <p href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Cuenta</p>
                <p href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Cerrar Sesión</p>
              </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            </div>
            </div>
          </nav>
      </div>
    );
  }
}




/* 
<template>
  <div class="relative">
    <button onclick="isOpen = !isOpen" class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar">
    </button>
    <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape)

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  }
}
</script>


*/