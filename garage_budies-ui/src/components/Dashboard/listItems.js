import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import BuildIcon from '@mui/icons-material/Build';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/slices/userSlice";
import {removeGarage} from "../../store/slices/garageSlice";


const ListItems  = () => {



     const mainListItems = (

        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
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
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="User setings"/>
            </ListItemButton>
        </React.Fragment>
    );

     const secondaryListItems = (

        <React.Fragment>
            <ListSubheader component="div" inset>
                Repair history
            </ListSubheader>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Current month"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Year"/>
            </ListItemButton>
            <ListItemButton >
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Log out"/>
            </ListItemButton>
        </React.Fragment>
    );

}

export default ListItems;


