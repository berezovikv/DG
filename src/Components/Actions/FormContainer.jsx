import React, { Component } from "react";

/* Import Components */

import Input from "./FormComponent/Input";
import TextArea from "./FormComponent/TextArea";
import Button from "./FormComponent/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        email: "",
        about: ""
      },

      
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }



  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => { 
      response.json().then(data => {
       alert("Сообщение отправленно" );
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        email: "",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"email"}
          title={"Email"}
          name={"email"}
          validationMessage={true}
          pattern={"[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" }
          value={this.state.newUser.email}
          placeholder={"Введите email"}
          handleChange={this.handleInput}
          
        />{" "}
       
        <TextArea
          title={"Комментарий"}
          rows={5}
          value={this.state.newUser.about}
          name={"Info"}
          handleChange={this.handleTextArea}
          placeholder={"Введите текст сообщения"}
          
          
        />

        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        />{" "}
       
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Очистить"}
          style={buttonStyle}

        />{" "}
   
      </form>
    );
  }
}
const buttonStyle = {
  margin: "10px 10px 10px 10px"
  
};


export default FormContainer;