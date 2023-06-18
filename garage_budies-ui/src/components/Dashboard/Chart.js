import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Title from './Title';
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";

export default function Chart() {
    const theme = useTheme();

    const user = useSelector(state => state.user.user);

    const car = user.cars.at(0)


    return (
        <React.Fragment>
            <Title>Vehicle data:</Title>

            <Typography component="p" variant="h4" sx={{mb:3}}>
                {car.make} {car.model}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Typography> VIN code: {car.vinCode}</Typography>
                    </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Typography> Registration plate: {car.registrationNumber}</Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Typography> Engine capacity: {car.engineCapacity} ccm</Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Typography> Power: {car.power} kW</Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Typography> Fuel type: {car.fuel}</Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Typography> Date of porduction: {car.dateOfProduction}</Typography>
                </Grid>
            </Grid>



        </React.Fragment>
    );
}