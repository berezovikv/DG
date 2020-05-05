import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  const renderField1 = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <textarea {...input} rows='5' type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    
    <form onSubmit={ handleSubmit }>
        <div className="form-group">
        <Field name="email" component={renderField} label="E-mail" />
      </div>
      <div className="form-group">
        <Field name="text" component={renderField1} label="Комментарий"/>
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