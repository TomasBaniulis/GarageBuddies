import {Form, Formik} from "formik";
import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";
import FormSelectComponent from "./FormSelectComponent";
import DateSelectorForCar from "./DateSelectorForCar";
import {addCar} from "../../store/slices/userSlice";
import {addCarToUserGarage} from "../api/userApi";

const carValidationSchema = Yup.object().shape(
    {
        vinCode:Yup.string()
            .min(17, "VIN code is 17 symbols")
            .max(17, "VIN code is 17 symbols")
            .required("VIN code is required"),
        make:Yup.string()
            .min(2, "makes must be min 2 symbols")
            .max(15, "make must be max 15 symbols")
            .required("make is required"),
        model:Yup.string()
            .min(2, "model must be min 2 symbols")
            .max(15, "model must be max 15 symbols")
            .required("model is required"),
        engineCapacity:Yup.number()
            .min(3, "engine capacity min 3 numbers")
            .max(4, "engine capacity max 4 numbers")
            .required("engine capacity is required"),
        power:Yup.number()
            .min(2, "power must be min 2 numbers"),
        dateOfProduction:Yup.date()
            .required("production date is required"),
        technicalInspectionDate:Yup.date()
            .required("technical inspection date is required"),
        mileage:Yup.number()
            .min(1, "lowest mileage can be 0 km")
            .required("car mileage is required")
    }
)

const Car = () => {

    const fuel = ["GAS", "LPG", "DIESEL"];

    const onRegisterCar =(values, helpers)=>{
        addCarToUserGarage(values)
            .catch()
            .finally()
    }

    return(

        <Formik initialValues={
            {
                vinCode:"",
                make:"",
                model:"",
                engineCapacity:"",
                fuel:"",
                power:"",
                transmission:"",
                drivetrain:"",
                airConditioning:"",
                dateOfProduction:"",
                technicalInspectionDate:"",
                mileage:""
            }}
                onSubmit={onRegisterCar}

        validationSchema={carValidationSchema}>

            {props =>(
                <Form>
                    <Stack spacing={2} direction ='column'>
                        <Typography variant="h5">VEHICLE REGISTRATION:</Typography>
                        <TextInputComponent error={props.touched.make && !!props.errors.make}
                                            name="make"
                                            label="Make"
                        ></TextInputComponent>
                        <TextInputComponent error={props.touched.model && !!props.errors.model}
                                            name="model"
                                            label="Model"
                        ></TextInputComponent>
                        <TextInputComponent error={props.touched.vinCode && !!props.errors.vinCode}
                                            name="vinCode"
                                            label="Vin Code"
                        ></TextInputComponent>
                        <DateSelectorForCar name="dateOfProduction"
                                            label="Date of production"
                        ></DateSelectorForCar>
                        <TextInputComponent error={props.touched.mileage && !!props.errors.mileage}
                                            name="mileage"
                                            label="Mileage in Km"
                        ></TextInputComponent>
                        <TextInputComponent error={props.touched.engineCapacity && !!props.errors.engineCapacity}
                                            name="engineCapacity"
                                            label="Engine Capacity"
                        ></TextInputComponent>
                        <TextInputComponent error={props.touched.power && !!props.errors.power}
                                            name="power"
                                            label="Power in kW"
                        ></TextInputComponent>
                        <FormSelectComponent name="fuel"
                                             label="Fuel"
                                             selections={[{id:7, value:"GAS"}, {id:8, value:"LPG"}, {id:9, value:"DIESEL"}]}>
                        </FormSelectComponent>
                        <FormSelectComponent name="transmission"
                                             label="Transmission"
                                             selections={[{id:5, value:"Manual"},{ id:6, value:"Automatic"}]}>
                        </FormSelectComponent>
                        <FormSelectComponent name="drivetrain"
                                             label="Drivetrain"
                                             selections={[{id:3, value:"2WD"}, {id:4, value:"4WD"}]}>
                        </FormSelectComponent>
                        <FormSelectComponent name="airConditioning"
                                             label="Air Conditioning"
                                             selections={[{id:1, value:"true"},{ id:2, value:"false"}]}>
                        </FormSelectComponent>
                        <DateSelectorForCar name="technicalInspectionDate"
                                            label="Technical inspection date "
                        ></DateSelectorForCar>



                    </Stack>
                    <Typography sx={{textAlign:'right', mt:2}}>
                        {
                            props.isSubmitting ? <CircularProgress/> :
                                <Button variant="outlined" type="submit">Save car</Button>
                        }
                    </Typography>
                </Form>
            )}
        </Formik>
    )
}



export default Car;