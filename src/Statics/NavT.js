import React, { Component } from "react";
import SimpleModal from "../Services/Modal";
import axios from "axios";
import PropTypes from "prop-types";
//import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
let firebase = require('firebase/app');

firebase.initializeApp({
  apiKey: "AIzaSyAauRcZVPtFCEUKS8eKdPXxv2N0WpuFoSc",
  authDomain: "applandproyects.firebaseapp.com",
  storageBucket: "gs://applandproyects.appspot.com/",
});

SimpleModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export class NavT extends Component {
  state = {
    inputSearch: "",
    isSignedIn: false,
    User: {},
    photo:
      "https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2FNoProfile.jpg?alt=media&token=e11b597b-cfd8-4675-b263-f810a9bcb902",
    show: false,
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  _handleChange = (e) => {
    this.setState({ inputSearch: e.target.value });
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputSearch);
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      try {
        if (!firebase.auth().currentUser.photoURL) {
          this.setState({ photo: this.state.photo });
        } else {
          this.setState({ photo: firebase.auth().currentUser.photoURL });
          this.setState({ User: firebase.auth().currentUser });
          const createUser = async ()=>{
          try {
            let usr ={
              idUser:firebase.auth().currentUser.uid,
              name:firebase.auth().currentUser.displayName
            }
              await axios.post(
                "http://localhost:5000/applandproyects/us-central1/api/createUser",
                 usr 
              );
          } catch (error) {
            console.log("createUser",error);
          }
        }
        createUser();
          //        NewProjects.props.setState
          //        state.userCredendials.userID=firebase.auth().currentUser.uid
        }
      } catch (error) {
        //console.log('setPhoto',error);
      }
    });
    //console.log(NewProjects.userCredendials);
  };

  render() {
    return (
      <div>
        <nav className="center flex fixed  w-full z-10 top-0 items-center justify-between flex-wrap bg-gray-700 p-1">
          <div className="flex items-center flex-shrink-0 text-teal-200 mr-6">
            <a href="/" className="font-semibold text-xl tracking-tight">
              Appland Projects
            </a>
          </div>
          <div className="w-auto md:flex flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="md:flex text-sm lg:flex-grow">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Mis Proyectos
              </a>
              <a
                href="/Create-Projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Nuevo Proyecto
              </a>
            </div>
            <form onSubmit={this._handleSubmit}>
              <div className=" md:flex w-auto">
                <input
                  onChange={this._handleChange}
                  className="mx-0 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal"
                  type="text"
                  placeholder="Buscar"
                ></input>
                <button
                  onClick={this._handleSubmit}
                  className="mx-1 lg:inlinde-block mt-1000 text-sm px-4 py-2 leading-none border rounded text-white border-white block hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Buscar
                </button>
              </div>
            </form>
            <button
              onClick={(e) => {
                this.showModal();
              }}
              type="button"
              id="googleLogin"
              className="mx-3 lg:inline-block z-10  block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
            >
              <img
                className="h-full w-full object-cover"
                src={this.state.photo}
                alt=""
              />
            </button>
          </div>
        </nav>
        <SimpleModal onClose={this.showModal} show={this.state.show}>
          {this.state.isSignedIn ? (
            <div>
              <h1>{firebase.auth().currentUser.displayName}</h1>
              <button
                className="shadow bg-gray-700 text-teal-200 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  firebase.auth().signOut() &&
                  this.setState({
                    photo:
                      "https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2FNoProfile.jpg?alt=media&token=e11b597b-cfd8-4675-b263-f810a9bcb902",
                  })
                }
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </SimpleModal>
      </div>
    );
  }
}
