import {Avatar} from "@mui/material";
import * as React from "react";

{
    <Avatar
        alt={user.username}
        src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/11/shutterstock_1620107944-720x540.jpg.webp"
        sx={{ width: 40, height: 40 }}
    />
}




{
    user ? <>< div  >{user.username}     .</div>   <Avatar
        alt={user.username}
        src="https://youprobablyneedahaircut.com/wp-content/uploads/2021/11/shutterstock_1620107944-720x540.jpg.webp"
        sx={{ width: 40, height: 40 }}
    /> </>: <></>
}