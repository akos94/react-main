import React, {useState} from "react";
import {makeStyles, Typography, TextField, Button, Container, Avatar} from '@material-ui/core';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    field: {
        marginTop:20,
        marginBottom:10,
        display: 'block'
    },
    container:{
        height: '100vh',
        border: '1px solid #0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    }
}))

export default function TabletLoginForm({ Login, error}){
    const [details, setDetails] = useState({ felhasznalonev:"", password:"", key:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const classes = useStyles()
    const history = useHistory()

    return (
        
        <Container className={classes.container}>
            <form onSubmit = {submitHandler}>
            <Typography component="h2">Bejelentkezés</Typography>
            <Avatar src="/profilepic.webp" className={classes.avatar}/>

            <TextField
                className={classes.field}
                label="Felhasználónév"
                id="felhasznalonev"
                variant="outlined"
                required
                onChange={e => setDetails({...details, felhasznalonev: e.target.value})} value={details.felhasznalonev}
            />

            <TextField 
                className={classes.field}
                label="Jelszó"
                id="password"
                variant="outlined"
                required
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
            />

            <Button
                className={classes.field}
                color="primary"
                variant="contained"
                type="submit">
            Bejelentkezés
            </Button>

            <Button
                className={classes.field}
                color="primary"
                variant="contained"
                type="submit"
                onClick= {() => history.push('/login/card')}>
            Bejelentkezés kártyával
            </Button>
            </form>
        </Container>
            
        
    )
}