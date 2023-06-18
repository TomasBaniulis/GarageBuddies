import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useSelector} from "react-redux";
import {useState} from "react";
import {Button} from "@mui/material";
import FormDialogue from "../pages/UserDetailPage/FormDialogue";

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {

    const user = useSelector(state => state.user.user);

    const car = user.cars.at(0);

    const km = car.mileage



    return (
        <React.Fragment>
            <Title>Mileage:</Title>
            <Typography component="p" variant="h4" sx={{mb:3}}>
                 {km} km
            </Typography>
            <Title>Next TUV inspection:</Title>
            <Typography component="p" variant="h4">
                {car.technicalInspectionDate}
            </Typography>

        </React.Fragment>
    );
}