import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../Dashboard/Chart";
import Deposits from "../../Dashboard/Deposits";
import Copyright from "../../forms/Copyright";
import Orders from "../../Dashboard/Orders";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";

const UserDetailsPage = () => {

    const user = useSelector(state => state.user.user )

    const cars = user.numberOfCars



    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {
                cars == 0 ? <Typography> YOU DON'T HAVE CARS IN YOU GARAGE TO SHOWW</Typography> :
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
            }


            <Copyright sx={{ pt: 4 }} />
        </Container>
    )
}

export default UserDetailsPage;