import {useSelector} from "react-redux";
import Container from "@mui/material/Container";
import Copyright from "../../forms/Copyright";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../../Dashboard/Chart";
import Deposits from "../../Dashboard/Deposits";
import Orders from "../../Dashboard/Orders";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";

const Notifications = () => {

    // const user = useSelector(state => state.use.user);

    // const messages = user.notifications;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            cia bus zinutes

            {/*<TableContainer component={ Paper }>*/}
            {/*    <Table sx={ {minWidth: 700} } aria-label="customized table">*/}
            {/*        <TableHead>*/}
            {/*            <TableRow>*/}
            {/*                <StyledTableCell>{ t('name') }</StyledTableCell>*/}
            {/*                <StyledTableCell>{ t('category') }</StyledTableCell>*/}
            {/*                <StyledTableCell>{ t('description') }</StyledTableCell>*/}
            {/*                <StyledTableCell align="right">{ t('quantity') }</StyledTableCell>*/}
            {/*                <StyledTableCell align="right">{ t('price') }</StyledTableCell>*/}
            {/*                <StyledTableCell align="right"></StyledTableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableHead>*/}
            {/*        <TableBody>*/}
            {/*            { messages.map((message) => (*/}
            {/*                <StyledTableRow key={ message.date }>*/}
            {/*                    <StyledTableCell component="th" scope="row">*/}
            {/*                        <NavLink to={ `/products/${ product.id }` }>*/}
            {/*                            { product.name }*/}
            {/*                        </NavLink>*/}
            {/*                    </StyledTableCell>*/}
            {/*                    <StyledTableCell>{ product.category }</StyledTableCell>*/}
            {/*                    <StyledTableCell sx={ {maxWidth: 600} }>{ product.description }</StyledTableCell>*/}
            {/*                    <StyledTableCell align="right">{ product.quantity }</StyledTableCell>*/}
            {/*                    <StyledTableCell align="right">{ product.price } €</StyledTableCell>*/}
            {/*                    <StyledTableCell align="right">*/}
            {/*                        {*/}
            {/*                            user?.roles.includes('ADMIN') && <DeleteProduct key={ product.id }*/}
            {/*                                                                            productId={ product.id }*/}
            {/*                                                                            removeProduct={ removeProduct }/>*/}
            {/*                        }*/}
            {/*                        <Button variant="outlined"*/}
            {/*                                type="button"*/}
            {/*                                color="primary"*/}
            {/*                                sx={ {ml: 1} }*/}
            {/*                                onClick={ () => addProduct(product) }><AddShoppingCartIcon/></Button>*/}
            {/*                    </StyledTableCell>*/}
            {/*                </StyledTableRow>*/}
            {/*            )) }*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}



            <Copyright sx={{ pt: 4 }} />
        </Container>
    )

}
export default Notifications;