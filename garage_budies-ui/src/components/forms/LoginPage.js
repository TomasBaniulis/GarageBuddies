import * as  Yup from "yup";
import * as React from 'react';
import {Form, Formik} from "formik";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {Avatar, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from "@mui/material/Link";
import Copyright from "./Copyright";
import GarageIcon from '@mui/icons-material/Garage';

const loginValidationSchema = Yup.object().shape(
    {
        username:Yup.string().required(),
        password:Yup.string().required(),
    });

const defaultTheme = createTheme();

    const onLogin = (values, helpers) => {}

const LoginPage =() => {

        return (
            <Formik
                initialValues={ {username: '', password: ''} }

                onSubmit={ onLogin }

                validationSchema={ loginValidationSchema }>

                { props => (

    <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://scontent.fvno7-1.fna.fbcdn.net/v/t1.18169-9/29594652_1954199954654972_1810066133396071461_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=p7K5UlqW2N4AX9-iYr2&_nc_ht=scontent.fvno7-1.fna&oh=00_AfANKzRVxirMgoAUW_GZNyVTbaGpKh14udvIKR3oUk5UGg&oe=64AD9A34)',
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
                        Sign in to Garage Buddies
                    </Typography>
                    <Form>
                    <Box component="form" noValidate onSubmit={onLogin} sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="usernamel"
                            label="Username"
                            name="usernamel"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, bgcolor:'black'}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{mt: 5}}/>
                    </Box>
                    </Form>
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