import React from "react";
import s from '../../../Pages/Contacts/Contacts.module.css'

const Button = props => {
  console.log(props.style);
  return (
    <button
      style={props.style}
      className={s.button}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
