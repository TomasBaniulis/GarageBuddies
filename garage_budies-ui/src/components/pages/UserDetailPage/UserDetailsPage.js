import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../Dashboard/Chart";
import Deposits from "../../Dashboard/Deposits";
import Copyright from "../../forms/Copyright";
import Orders from "../../Dashboard/Orders";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";

const UserDetailsPage = () => {

    const user = useSelector(state => state.user.user )



    return(
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            {
                user.numberOfCars == 0 ?  <Card sx={{ maxWidth: 1200 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src="https://www.littlegatepublishing.com/wp-content/uploads/2015/07/Fotolia_41458681_Subscription_Monthly_M.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    YOU DON'T HAVE ANY CARS IN YOU GARAGE TO SHOW
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Please use car registration form to add you first vehicle to you GarageBuddies garage.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> :
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