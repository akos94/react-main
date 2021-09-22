import { ClassNames } from "@emotion/react";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Button, Drawer } from '@material-ui/core';
import { Typography } from "@mui/material";
import { List } from "@mui/material"; 
import { ListItem } from "@mui/material";
import { ListItemText } from "@material-ui/core";
import { useHistory } from "react-router";
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Dashboard from "./dashboard/dashboard";


const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
        padding: 50
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#808080'
    },
    root: {
        display:'flex'
    },
    bottomPush: {
        position: "fixed",
        bottom: 0,
        textItems: "center",
        paddingBottom: 10,
        marginLeft:50   
     }
})

export default function Layout({ children }){
    const classes = useStyles()
    const history = useHistory()

    const menuItems = [
        {
            text: 'Dashboard',
            path: '/dashboard'
        },
        {
            text: 'Quiz',
            path: '/'
        },
        {
            text: 'Bónusz Rendszer',
            path: '/'
        }
    ]

    return (
        <div className={classes.root} >

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant ="h5">
                        ACSG 
                    </Typography>
                </div>
                
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick= {() => history.push(item.path)}
                        >
                            <ListItemText primary={item.text}/>     
                        </ListItem>
                    ))}
                </List>
                <div className={classes.bottomPush}>
                    <IconButton aria-label="logout" size="large">
                        <LogoutIcon/>
                    </IconButton>
                    <IconButton aria-label="settings" size="large">
                        <SettingsIcon />
                    </IconButton>
                    <IconButton aria-label="profil" size="large">
                        <PersonIcon />
                    </IconButton>
                </div>
            </Drawer>
            <div className={classes.page}>
                <Switch>
                    <Route exact path="/dashboard"      component = {Dashboard} />
                </Switch>
            </div>
            
        </div>
    )
}