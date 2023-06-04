import {FieldArray, Form, Formik} from "formik";
import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";

const userValidationSchema = Yup.object().shape(
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
        repeatPassword:Yup.string()
            .oneOf([Yup.ref('password'), null], 'passwords must match')
            .required('password confirmation is required'),
            phoneNumber:Yup.string()
                .required('phone number is required'),
            buildingNumber:Yup.string()
                .required('house number is required'),
            street: Yup.string()
                .min(5, 'street name must be min 5 symbols')
                .max(15, 'street name must be max 15 symbols')
                .required('street name is required'),
            town:Yup.string()
                .min(5, 'town name must be min 5 symbols')
                .max(15, 'town name must be max 15 symbols')
                .required('town name is required')
    }
)

const User = () => (
    
    <Formik initialValues={{
        name:'',
        surname:'',
        email:'',
        password:'',
        repeatPassword:'',
        buildingNumber:'',
        street:'',
        town:'',
        postCode:''
    }}
            onSubmit={(values, helpers)=>{
                    console.log('values', values);
                    console.log('helpers', helpers);

                    setTimeout(() => {
                                helpers.setSubmitting(false);
                                helpers.resetForm();
                        },
                        1000);
            }}

            validationSchema={userValidationSchema}>



                {props=>(
                    <Form>
                        <Stack spacing={2} direction = 'column'>
                                <Typography variant="h5">USER REGISTRATION:</Typography>
                                <TextInputComponent error={props.touched.name && !!props.errors.name}
                                                    name="name"
                                                    label="Name"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.surname && !!props.errors.surname}
                                                    name="surname"
                                                    label="Surname"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.email && !!props.errors.email}
                                                    name="email"
                                                    label="Email"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.password && !!props.errors.password}
                                                    name="password"
                                                    label="Password"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                    name="repeatPassword"
                                                    label="Password confirmation"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.phoneNumber && !!props.errors.phoneNumber}
                                                    name="phoneNumber"
                                                    label="Phone number"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.buildingNumber && !!props.errors.buildingNumber}
                                                    name="buildingNumber"
                                                    label="House number"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.street && !!props.errors.street}
                                                    name="street"
                                                    label="Street name"
                                ></TextInputComponent>
                                <TextInputComponent error={props.touched.town && !!props.errors.town}
                                                    name="town"
                                                    label="Town"
                                ></TextInputComponent>
                        </Stack>
                            <Typography sx={{textAlign:'right', mt:2}}>
                                    props.isSubmitting ? <CircularProgress/> :
                                    <Button variant="outlined" type="submit">Save user</Button>
                            </Typography>
                    </Form>

                )
                }


    </Formik>

    
)

export default User;
    
    