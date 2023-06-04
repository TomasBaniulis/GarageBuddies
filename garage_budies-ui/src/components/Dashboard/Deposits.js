import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>Last updated mileage:</Title>
            <Typography component="p" variant="h4">
                243000 km
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2023
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Update mileage
                </Link>
            </div>
        </React.Fragment>
    );
}