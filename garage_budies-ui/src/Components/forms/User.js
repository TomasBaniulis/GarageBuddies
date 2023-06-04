import {FieldArray, Form, Formik} from "formik";
import {Stack} from "@mui/material";
import * as Yup from 'yup';

const userValidationSchema = Yup.object.shape(
    {
        name: Yup.string()
            .min(3, 'name must be min 3 symbols')
            .max(15, 'name must be max 15 symbols')
            .required('name is required'),
        surname: Yup.string()
            .min(5, 'surname must be min 5 symbols')
            .max(15, 'surname must be max 15 symbols')
            .required('surname is required'),
        email:Yup.string()
            .email('enter valid email address')
            .required('email is required'),
        password:Yup.string()
            .min(4, 'password must be min 4 symbols')
            .max(8, 'password mus be max 8 symbols')
            .required('password is required'),
        repeatPassword:Yup.string()}
)

const User = () => (
    
    <Formik initialValues={{
        name:'',
        surname:'',
        email:'',
        password:'',
        repeatPassword:'',
        buildingNumber:'',
        flatNumber:'',
        street:'',
        town:'',
        postCode:''
    }}
            onSubmit={}

            validationSchema={userValidationSchema}>



                {props=>(
                    <Form>
                        <Stack spacing={2} direction = column>



                        </Stack>
                    </Form>

                )
                }


    </Formik>

    
)

export default User;
    
    