import {Title} from "@mui/icons-material";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";

const GarageInfo = () => {

    const garage = useSelector(state => state.garage.garage);

    return(
        <React.Fragment>
            <Title>{garage.companyName}</Title>
            <ResponsiveContainer>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs</Item>
                    </Grid>
                    <Grid item xs={4}
                          sx={{
                              backgroundImage: 'url(https://swifttyrespecialist.sg/wp-content/uploads/2023/01/choose-local-auto-repair-shop.webp)',
                              backgroundRepeat: 'no-repeat',
                              backgroundColor: (t) =>
                                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                          }}
                    />
                </Grid>



            </ResponsiveContainer>
        </React.Fragment>

    );
}

export default GarageInfo;