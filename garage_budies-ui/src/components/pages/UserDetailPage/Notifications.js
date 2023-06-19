import Container from "@mui/material/Container";
import Copyright from "../../forms/Copyright";
import {useDispatch, useSelector} from "react-redux";
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useTranslation} from "react-i18next";
import {addUser, deleteMessage} from "../../../store/slices/userSlice";
import {deleteNotification, getUser} from "../../api/userApi";
import {useState} from "react";


const Notifications = () => {

    const user = useSelector(state => state.user.user);
    const messages = useSelector(state => state.user.notifications);
    const dispatcher =useDispatch();

    const userId = user.id;

    const {t}=useTranslation('notifications')

    console.log(messages)
    console.log(userId)

    const [msg, setMsg] = useState(messages)


    const onDelete = (messageId, userId) => {
        console.log("message id to delete",messageId);
        console.log("user id to delete from:",userId);
        deleteNotification(messageId, userId)
            .then(response=>{
                const updatedMessages = msg.filter(m=>!m.id===messageId);
                setMsg(updatedMessages);
            })
            .catch((error)=>console.log(error))
            .finally()

    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography component="h1" variant="h5">
                {t('notifications')}
            </Typography>
            {msg.map((message) => (
                    <Card key ={message.id} sx={{ maxWidth: 1200, mt:5 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src="http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2023/05/04231855/2023-Luftgekult-9_Trevor-Ryan-Speedhunters_004-1200x800.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {message.header}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {message.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{mt:3}}>
                                    {message.notificationText}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick = {()=>onDelete(message.id, userId)}>
                                {t('delete')}
                            </Button>
                        </CardActions>
                    </Card>
                )

            )
            }
            <Copyright sx={{ pt: 4 }} />
        </Container>
    )

}
export default Notifications;