import {Form, Formik} from "formik";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";
import FormSelectComponent from "./FormSelectComponent";
import {addCarToUserGarage} from "../api/userApi";
import Copyright from "./Copyright";
import * as React from "react";
import {useState} from "react";
import Container from "@mui/material/Container";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {useSelector, useStore} from "react-redux";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const carValidationSchema = Yup.object().shape(
    {
        vinCode: Yup.string()
            .min(17, "VIN code is 17 symbols")
            .max(17, "VIN code is 17 symbols")
            .required("VIN code is required"),
        registrationNumber: Yup.string()
            .required("registration number is required"),
        make: Yup.string()
            .min(2, "make must be min 2 symbols")
            .max(15, "make must be max 15 symbols")
            .required("make is required"),
        model: Yup.string()
            .min(2, "model must be min 2 symbols")
            .max(15, "model must be max 15 symbols")
            .required("model is required"),
        engineCapacity: Yup.number()
            .min(3, "engine capacity min 3 numbers")
            // .max(5, "engine capacity max 4 numbers")
            .required("engine capacity is required"),
        power: Yup.number()
            .min(2, "power must be min 2 numbers"),
        mileage: Yup.number()
            .min(1, "lowest mileage can be 0 km")
            .required("car mileage is required")
    }
)

const Car = () => {

    const user = useSelector(state => state.user.user)
    const [showError, setShowError] = useState(false);
    const {t} = useTranslation('car')
    const navigate = useNavigate();

    const onRegisterCar = (values, helpers) => {
        console.log("test:", values, user.id)
        addCarToUserGarage(values, user.id)
            .then((response) => {
                helpers.resetForm();
                navigate('/users/main')
            })
            .catch((err) => {
                console.log(err);
                setShowError(true)
            })
            .finally(() => helpers.setSubmitting(false))
    }

    function time(date) {
        return new Date(date).getTime();
    }


    return (

        <Formik initialValues={
            {
                vinCode: "",
                registrationNumber: "",
                make: "",
                model: "",
                engineCapacity: "",
                fuel: "",
                power: "",
                transmission: "",
                drivetrain: "",
                airConditioning: "",
                dateOfProduction: "",
                technicalInspectionDate: "",
                mileage: ""
            }}
                onSubmit={onRegisterCar}

                validationSchema={carValidationSchema}>

            {props => (


                <Form>
                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        <Stack spacing={2} direction='column'>
                            <Typography variant="h5">{t('vehicleRegistration')}</Typography>
                            {showError && <Alert severity="error">VEHICLE REGISTRATION FAILED</Alert>}
                            <TextInputComponent error={props.touched.make && !!props.errors.make}
                                                name="make"
                                                label={t('make')}
                            ></TextInputComponent>
                            <TextInputComponent error={props.touched.model && !!props.errors.model}
                                                name="model"
                                                label={t('model')}
                            ></TextInputComponent>
                            <TextInputComponent error={props.touched.vinCode && !!props.errors.vinCode}
                                                name="vinCode"
                                                label={t('vinCode')}
                            ></TextInputComponent>
                            <TextInputComponent
                                error={props.touched.registrationNumber && !!props.errors.registrationNumber}
                                name="registrationNumber"
                                label={t('registrationNumber')}
                            ></TextInputComponent>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField label={t('dateOfProduction')}
                                           format="YYYY-MM-DD"
                                           onChange={date => props.setFieldValue('dateOfProduction', time(date))}
                                />
                            </LocalizationProvider>
                            <TextInputComponent error={props.touched.mileage && !!props.errors.mileage}
                                                name="mileage"
                                                label={t('mileage')}
                            ></TextInputComponent>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField label={t('inspectiondate')}
                                           format="YYYY-MM-DD"
                                           onChange={date => props.setFieldValue('technicalInspectionDate', time(date))}
                                />
                            </LocalizationProvider>
                            <TextInputComponent error={props.touched.engineCapacity && !!props.errors.engineCapacity}
                                                name="engineCapacity"
                                                label={t('engineCapacity')}
                            ></TextInputComponent>
                            <TextInputComponent error={props.touched.power && !!props.errors.power}
                                                name="power"
                                                label={t('power')}
                            ></TextInputComponent>
                            <FormSelectComponent name="fuel"
                                                 label={t('fuel')}
                                                 properties={props}
                                                 selections={[{id: 7, value: "GAS"}, {id: 8, value: "LPG"}, {
                                                     id: 9,
                                                     value: "DIESEL"
                                                 }]}>
                            </FormSelectComponent>
                            <FormSelectComponent name="transmission"
                                                 label={t('transmission')}
                                                 properties={props}
                                                 selections={[{id: 5, value: "Manual"}, {id: 6, value: "Automatic"}]}>
                            </FormSelectComponent>
                            <FormSelectComponent name="drivetrain"
                                                 label={t('driveTrain')}
                                                 properties={props}
                                                 selections={[{id: 3, value: "2WD"}, {id: 4, value: "4WD"}]}>
                            </FormSelectComponent>
                            <FormSelectComponent name="airConditioning"
                                                 label={t('airConditioning')}
                                                 properties={props}
                                                 selections={[{id: 1, value: "true"}, {id: 2, value: "false"}]}>
                            </FormSelectComponent>

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
                    </Container>
                </Form>
            )}
        </Formik>
    )
}


export default Car;