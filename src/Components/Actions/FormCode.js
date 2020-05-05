import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.text) {
        errors.text= 'Required'
      } else if (values.text.length < 2) {
        errors.text = 'Minimum be 2 characters or more'
      }
    return errors
  }
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <Field name="firstName" component={renderField} label="First Name" />
      </div>
      <div className="form-group">
        <Field name="text" component={renderField} label="Text"  as="textarea" rows="3"/>
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" />
      </div>
      <div className="form-group">
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Отправить</button>
      </div>
    </form>
  )
}
FormCode = reduxForm({
    form: 'contact',
    validate,
  })(FormCode);
  
  export default FormCode;