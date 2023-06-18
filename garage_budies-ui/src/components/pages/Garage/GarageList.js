import Container from "@mui/material/Container";
import Copyright from "../../forms/Copyright";
import React, {useEffect, useState} from "react";
import {getGarages} from "../../api/garageAPI";
import {CircularProgress, Rating, tableCellClasses, TableContainer, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {useTranslation} from "react-i18next";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${ tableCellClasses.head }`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${ tableCellClasses.body }`]: {
        fontSize: 14,
    },
}));

const GarageList = () => {

    const [garages, setGarages] = useState([])
    const [loading, setLoading]=useState(true)
    const{t}=useTranslation('garageList');

    useEffect(()=>{
        getGarages()
            .then(({data}) => {setGarages(data);
            console.log(data)})
            .catch((error)=>console.log(error))
            .finally(()=>setLoading(false));
        },
        []);


    return (
        <React.Fragment>
            {
                loading ? <CircularProgress/>:
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Typography component="h1" variant="h5">
                            {t('header')}
                        </Typography>
                        <Typography component="h1" variant="h5">
                            .
                        </Typography>

                        <TableContainer component={ Paper }>
                            <Table sx={ {minWidth: 700} } aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>{ t('name') }</StyledTableCell>
                                        <StyledTableCell>{ t('town') }</StyledTableCell>
                                        <StyledTableCell>{ t('description') }</StyledTableCell>
                                        <StyledTableCell align="right">{ t('workPlaces') }</StyledTableCell>
                                        <StyledTableCell align="right">{ t('evaluation') }</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {garages.map((garage) => (
                                        <StyledTableRow key={ garage.id }>
                                            <StyledTableCell component="th" scope="row">
                                                <NavLink to={ `/garages/${ garage.id }` }>
                                                    { garage.companyName }
                                                </NavLink>
                                            </StyledTableCell>
                                            <StyledTableCell>{ garage.address.town }</StyledTableCell>
                                            <StyledTableCell sx={ {maxWidth: 600} }>{ garage.companyDescription }</StyledTableCell>
                                            <StyledTableCell align="right">{ garage.numberOfWorkPlaces}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <Rating name="read-only" value={garage.evaluation} readOnly />
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    )) }
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Copyright sx={{ pt: 4 }} />
                    </Container>
            }
        </React.Fragment>


    )

}

export default GarageList