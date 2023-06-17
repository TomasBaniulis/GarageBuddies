import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Content from "../content/Content";
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import {Avatar} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import BuildIcon from "@mui/icons-material/Build";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import {removeUser} from "../../store/slices/userSlice";
import {removeGarage} from "../../store/slices/garageSlice";
import LanguageIcon from '@mui/icons-material/Language';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import {useTranslation} from "react-i18next";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const defaultTheme = createTheme();

export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const user = useSelector(state =>state.user.user);

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(removeUser());
        dispatch(removeGarage());
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px',
                            bgcolor:'black'
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            GarageBuddies
                        </Typography>
                        {
                            user ? <>< div  >{user.username}   . </div>   <Avatar
                                alt={user.username}
                                src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/11/shutterstock_1620107944-720x540.jpg.webp"
                                sx={{ width: 40, height: 40 }}
                            /> </>: <></>
                        }
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <React.Fragment>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary="MAIN"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DriveEtaIcon/>
                                </ListItemIcon>
                                <ListItemText primary="CARS"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BuildIcon/>
                                </ListItemIcon>
                                <ListItemText primary="GARAGES"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationImportantIcon/>
                                </ListItemIcon>
                                <ListItemText primary="NOTIFICATIONS"/>
                            </ListItemButton>

                    </React.Fragment>
                        <Divider sx={{ my: 1 }} />
                        <React.Fragment>
                            <ListSubheader component="div" inset>
                                Page settings
                            </ListSubheader>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LanguageIcon/>
                                </ListItemIcon>
                                <LanguageSwitcher/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="User setingsr"/>
                            </ListItemButton>
                            <ListItemButton onClick={onLogout}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Log out"/>
                            </ListItemButton>
                        </React.Fragment>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />

                        <BrowserRouter>
                            <Content/>
                        </BrowserRouter>

                </Box>
            </Box>
        </ThemeProvider>
    );
}