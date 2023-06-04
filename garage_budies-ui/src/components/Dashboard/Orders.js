import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Brake specialists Kaunas',
        'Braka calipers rebuild',
        'VISA ⠀•••• 3719',
        312.44,
    ),
    createData(
        1,
        '16 June, 2020',
        'Eoltas',
        'Engine oil change',
        'VISA ⠀•••• 2574',
        866.99,
    ),
    createData(2, '16 Mar, 2019',
        'Autoaibe',
        'Spark plugs replacement',
        'MC ⠀•••• 1253',
        100.81),
    createData(
        3,
        '16 Mar, 2023',
        'Wheel alingment',
        'Kemi service',
        'AMEX ⠀•••• 2000',
        654.39,
    ),
    createData(
        4,
        '15 May, 2023',
        'Pas Vycka garaze',
        'Shock absorbers replacement',
        'VISA ⠀•••• 5919',
        212.79,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Repair History</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Garage Name</TableCell>
                        <TableCell>Rapair type</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Repair cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more repairs
            </Link>
        </React.Fragment>
    );
}