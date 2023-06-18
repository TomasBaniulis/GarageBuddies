import * as React from 'react';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Content from "../../content/Content";
import {BrowserRouter, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Badge} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import BuildIcon from "@mui/icons-material/Build";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import {removeUser} from "../../../store/slices/userSlice";
import {removeGarage} from "../../../store/slices/garageSlice";
import LanguageIcon from '@mui/icons-material/Language';
import LanguageSwitcher from "../../../i18n/LanguageSwitcher";
import {useTranslation} from "react-i18next";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
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

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
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

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const messages = (user)=> {
        if(user == null){
            return "0"
        }else if (user.notifications.length == null){
            return 0
    } else{
        return user.notifications.length
    }}

    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(removeUser());
        dispatch(removeGarage());
        navigate("/login");
    }

    const {t} = useTranslation('dashBoard');

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px',
                            bgcolor: 'black'
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            GarageBuddies
                        </Typography>
                        {
                            user ? <>
                                < div>{user.username} .</div>
                                <Avatar
                                    alt={user.username}
                                    src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/11/shutterstock_1620107944-720x540.jpg.webp"
                                    sx={{width: 40, height: 40}}
                                /> </> : <></>
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
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        <React.Fragment>
                            <ListItemButton component={NavLink} to="/users/main">
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary={t('main')}/>
                            </ListItemButton>
                            <ListItemButton component={NavLink} to="/users/addCar">
                                <ListItemIcon>
                                    <DriveEtaIcon/>
                                </ListItemIcon>
                                <ListItemText primary={t('cars')}/>
                            </ListItemButton>
                            <ListItemButton component={NavLink} to="/garages/list">
                                <ListItemIcon>
                                    <BuildIcon/>
                                </ListItemIcon>
                                <ListItemText primary={t('garages')}/>
                            </ListItemButton>
                            <ListItemButton component={NavLink} to="/users/notifications">
                                <ListItemIcon>
                                    <Badge badgeContent={messages(user)} color="secondary">
                                    <NotificationImportantIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary={t('notification')}/>
                            </ListItemButton>

                        </React.Fragment>
                        <Divider sx={{my: 1}}/>
                        <React.Fragment>
                            <ListSubheader component="div" inset>
                                {t('pageSettings')}
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
                                <ListItemText primary={t('pageSettings')}/>
                            </ListItemButton>
                            <ListItemButton onClick={onLogout}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText primary={t('logOut')}/>
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
                    <Toolbar/>
                        <Content/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}