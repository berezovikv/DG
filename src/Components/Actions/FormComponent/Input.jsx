import React from "react";

const Input = props => {

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Введите E-mail'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Введите корректный E-mail'
    }
    if (!values.text) {
        errors.text= 'Введите текст сообешния'
      } else if (values.text.length > 50) {
        errors.text = 'Введите сообщение'
      }
    return errors
  }

  //console.log(props.value);
  return (


    
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.email}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
