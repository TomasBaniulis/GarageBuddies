import {Formik} from "formik";
import {Button, Typography} from "@mui/material";
import * as Yup from 'yup';
import TextInputComponent from "./TextInputComponent";

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
        model:Yup.string("enter numbers only")
            .min(2, "model must be min 2 symbols")
            .max(15, "model must be max 15 symbols")
            .required("model is required"),
        engineCapacity:Yup.number("enter numbers only")
            .min(3, "engine capacit min 3 numbers")
            .max(4, "engine capacity max 4 numbers")
            .required("engine capacity is required"),
        power:Yup.number("enter numbers only")
            .min(2, "power must be min 2 numbers")
            .max(4, "power must be max 4 numbers"),
        dateOfProduction:Yup.date()
            .max(Date.now(), "Date can't be in the future")
            .required("production date is required"),
        technicalInspectionDate:Yup.date()
            .required("technical inspection date is required"),
        mileage:Yup.number("enter numbers only")
            .min(0, "lowest mileage can be 0 km")
            .required("car mileage is required")
    }
)

const Car = () => {

    return(

        <Formik initialValues={
            {
                vinCode:"",
                make:"",
                model:"",
                engineCapacity:"",
                fuel:["petroleum", "diesel", "LPG"],
                power:"",
                transmission:["automatic","manual"],
                drivetrain:["2WD", "4WD" ],
                airConditioning:["true", "false"],
                dateOfProduction:"",
                technicalInspectionDate:"",
                mileage:""
            }}
                onSubmit={}

        validationSchema={carValidationSchema}>

            <form>
                <Stack spacing={2} direction = 'column'>
                    <Typography variant="h5">VEHICLE REGISTRATION:</Typography>

                    




                    <Stack/>
                    <Typography sx={{textAlign:'right', mt:2}}>
                        <Button variant="outlined" type="submit">Save</Button>
                    </Typography>

            </form>


        </Formik>
    )
}



export default Car;