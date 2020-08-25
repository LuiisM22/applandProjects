import React, { Component } from "react";
import firebase from "firebase";

class FileUpload extends Component {
  constructor(props) {
    super();
    this.state = {
      uploadValue: 0,
      picture:
        "https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2Fvacio.png?alt=media&token=2a9f63d6-3898-4259-889c-e0017b649e2f",
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/src/img/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        storageRef.getDownloadURL().then((url) => {
          this.setState({
            picture: url,
          });
          this.handleURLi(url);
        });
      }
    );
  }
  handleURLi = (url) => {
    this.props.getURL(url);
  };
  render() {
    return (
      <div>
        <progress value={this.state.uploadValue} max="100">
          {this.state.uploadValue} %
        </progress>
        <br />
        <input type="file" onChange={this.handleUpload} />
        <br />
        <img width="220" src={this.state.picture} alt="" />
      </div>
    );
  }
}

export default FileUpload;
