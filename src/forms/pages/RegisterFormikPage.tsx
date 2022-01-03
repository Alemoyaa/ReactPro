import { Form, Formik } from "formik"
import * as Yup from 'yup'
import { MyTextInput } from "../components"
import "../styles/styles.css"

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }} onSubmit={(values) => {
                console.log(values)
            }} validationSchema={
                Yup.object({
                    name: Yup.string().min(2, 'El nombre debe tener mas de 2 caracteres').max(15, 'El nombre debe ser menor a 15 caracteres').required('Requerido'),
                    email: Yup.string().email("Revise el formato del correo").required('Requerido'),
                    password1: Yup.string().min(6, 'Minimo de 6 caracteres').required('Requerido'),
                    password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir').min(6, 'Minimo de 6 caracteres').required('Requerido'),
                })
            }

            >
                {formik => (
                    <Form>
                        <MyTextInput label="Nombre" name="name" placeholder="Alejandro" />
                        <MyTextInput label="Email" name="email" placeholder="email@ejemplo.com" type="email" />
                        <MyTextInput label="Password" name="password1" placeholder="******" type="password" />
                        <MyTextInput label="Password" name="password2" placeholder="******" type="password" />


                        <button type="submit"> Create </button>
                        <button type="button" onClick={formik.handleReset}> Reset </button>
                    </Form>
                )}



            </Formik>


        </div>
    )
}
