import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Forma extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                  message: '',
                    email: '',
                   
                }}
                validationSchema={Yup.object().shape({
                    
                  message: Yup.string()
                        .required('Введите текст сообшения'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Введите email '),
                   
                })}
                onSubmit={ initialValues => {
                        fetch("https://jsonplaceholder.typicode.com/posts", {
                        method: "POST",
                        body: JSON.stringify( initialValues),
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        }
                      }).then(response => { 
                        response.json().then(fields => {
                          alert('Форма отправлена\n\n' + JSON.stringify(fields, null, 3))
                   
                })
                        .catch(error => {
                          console.log ("error",error)
                        })
              })
              }}
                render={({ errors, status, touched }) => (
                    <Form>                       
                      
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Тест сообщения</label>
                            <Field component="textarea" rows="5" name="message" type="text" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>
                    
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary mr-2">Отправить</button>
                            <button type="reset" className="btn btn-secondary">Очистить</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export { Forma }; 