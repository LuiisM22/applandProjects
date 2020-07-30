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
    console.log(this.state.inputSearch);
    //this.setState({ inputSearch:''})
  }
/*         componentDidMount(){
          this.state.inputSearch=''
        } */
/*   constructor(props){
    super(props);
    this.Login = this.Login.bind(this)
  } */
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

/*   Login(){
    let provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider).then(result=>{
      console.log(result);
      }
    )
  } */
    render(){
      //const {user}=this.props
      return(
<div>
          <link rel="stylesheet" href="../../build/tailwind.css" ></link>
          <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-1">
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
                <div className=" md:flex w-auto">
                  <input 
                  //onChange={this._handleChange}
                  className="mx-0 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal" type="text" placeholder="Buscar"></input>
                  <button onClick={this._handleSubmit} className="mx-1 lg:inline-block mt-1000 text-sm px-4 py-2 leading-none border rounded text-white border-white block hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Buscar</button>
                </div>
              </form>
                  <button onClick={this.Login} className="mx-3 lg:inline-block  z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt=""/>
                  </button>
            </div>
          </nav>
      </div>
    );
  }
}