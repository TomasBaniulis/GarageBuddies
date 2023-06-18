import * as  Yup from "yup";
import * as React from 'react';
import {Field, Form, Formik} from "formik";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {Alert, Avatar, Button, Checkbox, CircularProgress, FormControlLabel, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from "@mui/material/Link";
import Copyright from "./Copyright";
import GarageIcon from '@mui/icons-material/Garage';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../api/userApi";
import {addUser} from "../../store/slices/userSlice";
import TextInputComponent from "./TextInputComponent";
import {NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const loginValidationSchema = Yup.object().shape(
    {
        username: Yup.string().required(),
        password: Yup.string().required()
    });

const defaultTheme = createTheme();


const LoginPage = () => {

    const dispatch = useDispatch();

    const [showError, setShowError] = useState(false);

    const {t} = useTranslation('login');

    const navigate = useNavigate();

    const onLogin = (values, helpers) => {
        login(values)
            .then(({data: data, headers}) => {
                    dispatch(addUser({
                        user: data,
                        jwtToken: headers.authorization,
                        notifications:data.notifications
                    }));
                    console.log("nr of cars", data.numberOfCars)
                console.log("notifications:", data.notifications)
                {data.numberOfCars==0 ? navigate("/users/addCar") : navigate("/users/main") }

                }
            )
            .catch((error) => {
                console.log(error);
                setShowError(true)
            })
            .finally(helpers.setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{username: '', password: ''}}

            onSubmit={onLogin}

        >

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
                                backgroundImage: 'url(http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2023/05/04231855/2023-Luftgekult-9_Trevor-Ryan-Speedhunters_004-1200x800.jpg)',
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

                                {showError && <Alert severity="error">LOGIN FAILED</Alert>}

                                <Box sx={{mt: 1}}>
                                    <Form>
                                        <TextInputComponent error={props.touched.username && !!props.errors.username}
                                                            name="username"
                                                            label={t('username')}
                                                            margin="normal"
                                                            fullWidth
                                                            required
                                        ></TextInputComponent>
                                        <TextInputComponent error={props.touched.password && !!props.errors.password}
                                                            name="password"
                                                            label={t('password')}
                                                            margin="normal"
                                                            mr="2rem"
                                                            fullWidth
                                                            required
                                                            type="password"
                                        ></TextInputComponent>
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary"/>}
                                            label={t('rememberMe')}
                                        />
                                        <Typography sx={{textAlign: 'right', mt: 2}}>
                                            {
                                                props.isSubmitting ? <CircularProgress/> :
                                                    <Button
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        sx={{mt: 3, mb: 2, bgcolor: 'black'}}
                                                    >
                                                        {t('signIn')}
                                                    </Button>
                                            }
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body2">
                                                    {t('forgotPsw')}
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link component={NavLink} to="/users" variant="body2">
                                                    {t('dontHaveAcc')}
                                                </Link>
                                            </Grid>
                                        </Grid>
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
    );
}

export default LoginPage;