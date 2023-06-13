import {FieldArray, Form, Formik} from "formik";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";
import {saveUser} from "../api/userApi";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

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
        username:Yup.string()
            .min(3, 'user name must be min 3 symbols')
            .max(15, 'username must be max 15 symbols'),
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

const User = () => {

    const navigate = useNavigate();

    const onSaveUser = (values, helper) => {
        saveUser({
            name:values.name,
            surname:values.surname,
            username:values.username,
            email:values.email,
            phoneNumber:values.phoneNumber,
            password:values.password,
            repeatPassword:values.password,
            address: {
                buildingNumber:values.buildingNumber,
                street:values.street,
                town:values.town
            }})
            .then((response)=>{
                helper.resetForm();
                navigate('/login');
            })
            .catch(({response})=>setError(response.data.reason))
            .finally(()=>helper.setSubmitting(false));
    }

    const {t} = useTranslation('user');
    const [error, setError] = useState();

    return (

    <Formik initialValues={{
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: '',
        buildingNumber: '',
        street: '',
        town: '',
    }}
            onSubmit={(values, helper) => onSaveUser(values, helper)}

            validationSchema={userValidationSchema}>

        {props => (
            <Form>
                {error && <Alert severity="error">{t(error)}</Alert>}
                <Stack spacing={2} direction='column'>
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
                    <TextInputComponent error={props.touched.username && !!props.errors.username}
                                        name="username"
                                        label="username"
                    ></TextInputComponent>
                    <TextInputComponent error={props.touched.password && !!props.errors.password}
                                        name="password"
                                        label="Password"
                    ></TextInputComponent>
                    <TextInputComponent error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                        name="repeatPassword"
                                        label="Password confirmation"
                    ></TextInputComponent>


                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress/> :
                            <Button variant="outlined" type="submit">Save user</Button>
                    }
                </Typography>
            </Form>

        )
        }
    </Formik>
    )

}

export default User;
    
    