import {FieldArray, Form, Formik} from "formik";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";
import {saveUser} from "../api/userApi";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Paper from "@mui/material/Paper";
import GarageIcon from "@mui/icons-material/Garage";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Copyright from "./Copyright";

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
        username: Yup.string()
            .min(3, 'user name must be min 3 symbols')
            .max(15, 'username must be max 15 symbols'),
        email: Yup.string()
            .email('enter valid email address')
            .required('email is required'),
        password: Yup.string()
            .min(4, 'password must be min 4 symbols')
            .max(8, 'password mus be max 8 symbols')
            .required('password is required'),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'passwords must match')
            .required('password confirmation is required'),
        phoneNumber: Yup.string()
            .required('phone number is required'),
        buildingNumber: Yup.string()
            .required('house number is required'),
        street: Yup.string()
            .min(5, 'street name must be min 5 symbols')
            .max(15, 'street name must be max 15 symbols')
            .required('street name is required'),
        town: Yup.string()
            .min(5, 'town name must be min 5 symbols')
            .max(15, 'town name must be max 15 symbols')
            .required('town name is required')
    }
)

const defaultTheme = createTheme();

const User = () => {

    const navigate = useNavigate();

    const onSaveUser = (values, helper) => {
        saveUser({
            name: values.name,
            surname: values.surname,
            username: values.username,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
            repeatPassword: values.password,
            address: {
                buildingNumber: values.buildingNumber,
                street: values.street,
                town: values.town
            }
        })
            .then((response) => {
                helper.resetForm();
                navigate('/login');
            })
            .catch(({response}) => setError(response.data.reason))
            .finally(() => helper.setSubmitting(false));
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
                <ThemeProvider theme={defaultTheme}>

                    <Grid container component="main" sx={{height: '100vh'}}>
                        <CssBaseline/>
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2023/05/04231855/2023-Luftgekult-9_Trevor-Ryan-Speedhunters_004-680x453.jpg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />

                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <GarageIcon/>

                                <Typography component="h1" variant="h5">
                                    {t('header')}
                                </Typography>

                                <Box sx={{mt: 1}}>

                                    <Form>
                                        {error && <Alert severity="error">{t('username.error')}</Alert>}
                                        <Stack spacing={2} direction='column'>
                                            <TextInputComponent error={props.touched.name && !!props.errors.name}
                                                                name="name"
                                                                label={t('name')}
                                                                margin="normal"
                                                                fullWidth
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.surname && !!props.errors.surname}
                                                                name="surname"
                                                                label={t('surname')}
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.email && !!props.errors.email}
                                                                name="email"
                                                                label={t('email')}
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.phoneNumber && !!props.errors.phoneNumber}
                                                name="phoneNumber"
                                                label={t('phoneNumber')}
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.buildingNumber && !!props.errors.buildingNumber}
                                                name="buildingNumber"
                                                label={t('buildingNumber')}
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.street && !!props.errors.street}
                                                                name="street"
                                                                label={t('street')}
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.town && !!props.errors.town}
                                                                name="town"
                                                                label={t('town')}
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.username && !!props.errors.username}
                                                name="username"
                                                label={t('username.username')}
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.password && !!props.errors.password}
                                                name="password"
                                                label={t('password')}
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                name="repeatPassword"
                                                label={t('passwordRepeat')}
                                            ></TextInputComponent>


                                        </Stack>
                                        <Typography sx={{textAlign: 'right', mt: 2}}>
                                            {
                                                props.isSubmitting ? <CircularProgress/> :
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{mt: 3, mb: 2, bgcolor: 'black'}}
                                                    >
                                                        {t('register')}
                                                    </Button>
                                            }
                                        </Typography>

                                        <Copyright sx={{mt: 5}}/>
                                    </Form>
                                </Box>

                            </Box>

                        </Grid>
                    </Grid>
                </ThemeProvider>
            )
            }
        </Formik>
    )

}

export default User;
    
    