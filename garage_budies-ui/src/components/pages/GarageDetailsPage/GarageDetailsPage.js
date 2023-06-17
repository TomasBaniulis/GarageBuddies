import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../Dashboard/Chart";
import Deposits from "../../Dashboard/Deposits";
import Copyright from "../../forms/Copyright";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {showGarageDetails} from "../../api/garageAPI";
import {useDispatch, useSelector} from "react-redux";
import {addGarage} from "../../../store/slices/garageSlice";
import Orders from "../../Dashboard/Orders";

const GarageDetailsPage = () =>{

    const {garageId} = useParams();
    const[loading, setLoading]=useState(true);
    const dispatch=useDispatch();
    const garageData = useSelector(state => state.garage.garage);


    useEffect(() => {
        showGarageDetails(garageId)
            .then((data) => dispatch(addGarage({garage:data})))
            .catch((error) => console.log(error))
            .finally(()=>setLoading(false));
        },[]
    );


    return (

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )

}

export default GarageDetailsPage;