import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const HeaderAvatar =()=>{

    const user = useSelector(state => state.user.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispach = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = () => {
        dispach(removeUser());
    }


    return(
        <>
            {
                user ?
                    <>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={ handleClick }
                                size="small"
                                sx={ {mx: 2} }
                                aria-controls={ open ? 'account-menu' : undefined }
                                aria-haspopup="true"
                                aria-expanded={ open ? 'true' : undefined }
                            >
                                <Avatar sx={ {width: 32, height: 32} }></Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={ anchorEl }
                            id="account-menu"
                            open={ open }
                            onClose={ handleClose }
                            onClick={ handleClose }
                            PaperProps={ {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            } }
                            transformOrigin={ {horizontal: 'right', vertical: 'top'} }
                            anchorOrigin={ {horizontal: 'right', vertical: 'bottom'} }>
                            <MenuItem>
                                <Avatar/> {user.fullName}
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={ handleClose }>
                                <ListItemIcon>
                                    <Settings fontSize="small"/>
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={ onLogout }>
                                <ListItemIcon>
                                    <Logout fontSize="small"/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                    :
                    <></>
            }


        </>
    );
}

export default HeaderAvatar