import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import { MyTextInput, MyCheckbox, MySelect } from '../components/'

import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikAbstract = () => {
    return (
        <div>
            <h1>Formik Abstract</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string ().max  (15,     'Debe tener 15 caracteres o menos'    ).required('Requerido'),
                        lastName : Yup.string ().max  (8 ,     'Debe tener 8 caracteres o menos'     ).required('Requerido'),
                        email    : Yup.string ().email(        'El correo no tiene un formato valido').required('Requerido'),
                        terms    : Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'     ),
                        jobType  : Yup.string ().notOneOf(['it-jr'], 'Esta opcion no esta permitida' ).required('Requerido')
                    })
                }
            >
                { 
                formik => 
                    (
                        <Form>
                            <MyTextInput label='First Name' name='firstName' placeholder='Alejandro'/>

                            <MyTextInput label='Last Name' name='lastName' placeholder='Moya'/>

                            <MyTextInput label='Email' name='email' placeholder='john@gmail.com' type='email'/>

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It-senior</option>
                                <option value="it-jr">It-jr</option>
                            </MySelect>

                            <MyCheckbox label='Terms and conditions' name='terms'/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
