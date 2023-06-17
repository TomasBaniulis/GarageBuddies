import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Form, Formik} from "formik";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GarageIcon from "@mui/icons-material/Garage";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import TextInputComponent from "./TextInputComponent";
import Copyright from "./Copyright";
import * as React from "react";
import {saveGarage} from "../api/garageAPI";
import * as Yup from 'yup';


// const garageValidationSchema = Yup.object().shape(
//     {
//         companyCode:Yup.string().required("Company code is required"),
//         vatCode:Yup.string().required("VAT code is required"),
//         companyName:Yup.string().required("Company name is required"),
//         email:Yup.string().required(),
//         password:Yup.string().required(),
//         passwordRepeat:Yup.string().required(),
//         buildingNumber:Yup.string().required(),
//         street:Yup.string().required(),
//         town:Yup.string().required(),
//         numberOfWorkPlaces:Yup.number
//             .min(1, "minimum one work place is required")
//             .required(),
//         companyDescription:Yup.string().required()
//     }
// )

const defaultTheme = createTheme();

const Garage = () => {

    const navigate = useNavigate();

    const onSaveGarage = (values, helper) => {
        saveGarage({
            companyCode: values.companyName,
            vatCode: values.vatCode,
            companyName: values.companyName,
            email: values.email,
            password: values.password,
            repeatPassword: values.password,
            address: {
                buildingNumber: values.buildingNumber,
                street: values.street,
                town: values.town
            },
            numberOfWorkPlaces: values.numberOfWorkPlaces,
            companyDescription: values.companyDescription
        })
            .then((response) => {
                helper.resetForm();
                navigate('/login');
            })
            .catch(({response}) => setError(response.data.reason))
            .finally(() => helper.setSubmitting(false));
    }

    const {t} = useTranslation('garage');
    const [error, setError] = useState();

    return (

        <Formik initialValues={{
            companyCode: '',
            vatCode: '',
            companyName: '',
            email: '',
            password: '',
            repeatPassword: '',
            buildingNumber: '',
            street: '',
            town: '',
            numberOfWorkPlaces: "",
            companyDescription: ""

        }}
                onSubmit={(values, helper) => onSaveGarage(values, helper)}

            // validationSchema={garageValidationSchema}
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
                                backgroundImage: 'url(https://i1.pickpik.com/photos/883/775/680/car-repair-car-workshop-repair-shop-garage-preview.jpg)',
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
                                    GARAGE REGISTRATION
                                </Typography>

                                <Box sx={{mt: 1}}>

                                    <Form>
                                        {error && <Alert severity="error">{t(error)}</Alert>}
                                        <Stack spacing={2} direction='column'>
                                            <TextInputComponent
                                                error={props.touched.companyCode && !!props.errors.companyCode}
                                                name="companyCode"
                                                label="Company code"
                                                margin="normal"
                                                fullWidth
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.vatCode && !!props.errors.vatCode}
                                                                name="vatCode"
                                                                label="VAT code"
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.companyName && !!props.errors.companyName}
                                                name="companyName"
                                                label="Company name"
                                            ></TextInputComponent>
                                            <TextInputComponent error={props.touched.email && !!props.errors.email}
                                                                name="email"
                                                                label="Email"
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.buildingNumber && !!props.errors.buildingNumber}
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
                                            <TextInputComponent
                                                error={props.touched.numberOfWorkPlaces && !!props.errors.numberOfWorkPlaces}
                                                name="numberOfWorkPlaces"
                                                label="Number of work places"
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.companyDescription && !!props.errors.companyDescription}
                                                name="companyDescription"
                                                label="CompanyDesription"
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.password && !!props.errors.password}
                                                name="password"
                                                label="Password"
                                            ></TextInputComponent>
                                            <TextInputComponent
                                                error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                                name="repeatPassword"
                                                label="Password confirmation"
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
                                                        Register
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

export default Garage;