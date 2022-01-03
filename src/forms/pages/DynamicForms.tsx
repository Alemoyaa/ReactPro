import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'

const initialValues: {[x: string]: any} = {};

const requiredFields: {[x: string]: any} = {};

for (const { name, value, validation } of formJson) {
    initialValues[name] = value;

    if (!validation) continue;

    let schema = Yup.string()

    for (const rule of validation) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value || 2} caracteres `)
        }

        if (rule.type === 'email') {
            schema = schema.email(`El email no es valido`)
        }
    }

    requiredFields[name] = schema;
};

const validationSchema = Yup.object({...requiredFields})

export const DynamicForms = () => {
    return (
        <div>
            <h1>Formik Dynamic Form</h1>

            <Formik
                initialValues={
                    initialValues
                }
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate>
                        {formJson.map(({ type, label, name, placeholder, options }) => {

                            if (type === 'input' || type === 'password'|| type === 'email') {
                                return <MyTextInput key={name} label={label} type={(type as any)} name={name} placeholder={placeholder} />
                            } else if (type === 'select') {
                                return (
                                    <MySelect 
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map(option => (
                                                <option key={option.id} value={option.value}>{option.value}</option>
                                            ))
                                        }
                                    </MySelect> 
                                )
                            }
                            
                            <span> Type: {type} no es soportado </span>
                        })}
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}