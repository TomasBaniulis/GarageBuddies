import * as React from 'react';
import {DateField, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Field} from "formik";

const DateFieldForCar =({name, label}) => {


    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Field id ={name}
                   name={name}
                   label={label}
                   as={DateField}

            ></Field>
        </LocalizationProvider>

    );
}

export default DateFieldForCar;