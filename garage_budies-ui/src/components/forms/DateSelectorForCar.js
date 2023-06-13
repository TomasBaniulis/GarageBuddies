import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Field} from "formik";
import {useState} from "react";
const DateSelectorForCar =({name, label}) => {

    const [selectedDate, setSelectedDate] = useState("")

    const onSelectingDate =(event)=>{
        console.log(event.target.value)
        setSelectedDate(event.target.value)

    }

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Field
                id={name}
                name={name}
                as={DatePicker}
                value={selectedDate}
                onChange={onSelectingDate}
            ></Field>

        </LocalizationProvider>

    );
}

export default DateSelectorForCar;