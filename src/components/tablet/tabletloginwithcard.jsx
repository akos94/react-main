import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
//import { md5 } from 'blueimp-md5'
import {makeStyles, Container, Typography, Card, CardContent, Button, Avatar, CardActions, Divider, Paper} from '@material-ui/core'
import { useHistory } from "react-router";

const md5 = require("blueimp-md5")

const useStyles = makeStyles((theme) => ({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    },
    card:{
        width: '90vw'
    },
    container:{
        height: '100vh',
        border: '1px solid #0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: { 
        flexGrow: 1,
        flexWrap: 'wrap',
        textAlign: "center",
        alignItems: "center",
        display: 'flex',
        justifyContent: "center",
        marginBottom: '2rem',
    },
    img: {
        width: '25vw'
    },
    cardData: {
        display: 'flex',
        flexGrow: 1,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        margin: '1.5rem auto 1.5rem auto'
    },
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30)
    },
    nameEmpty: {
        color: '#BDBDBD',
        fontWeight: 'bold',
        backgroundColor: '#BDBDBD',
        borderRadius: '2rem',
        marginBottom: '1rem'
    },
    name: {
        color: '#9a0036', 
        fontWeight: 'bold'
    },
    posEmpty: { 
        color: '#BDBDBD',
        fontWeight: 'bold',
        backgroundColor: '#BDBDBD',
        borderRadius: '2rem'
    },
    pos: { 
        color: '#303030', 
        fontWeight: 'bold'
    },
    btn: {
        width: '60%',
        height: '100%',
        margin: '0px'
    }
  }))

export default function TabletLoginWithCardForm(){
    const [rfid, setRFID] = useState('1234567890')
    const [userHash, setUserHash] = useState('e9fa42131fb0df09ebf728ef05edfb5e')
    const [userName, setUserName] = useState('Várom a kártyát!') // Minta Jánosné
    const [userPos, setUserPos] = useState('') // Operátor
    const [avatarLink, setAvatarLink] = useState('')
    const [userLogs, setUserLogs] = useState([])
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const history = useHistory()

    const handleOnKeyDown = useCallback((e) => {
        if(e.key === 'Enter'){
            if(rfid.length === 10){
                setUserHash(md5(rfid))
                Axios.post(`http://192.168.1.92:3000/login/${userHash}`)
                .then(response => {
                    setUserName(response.data.ydolgnev)
                    
                    setUserPos(response.data.ydolgozo_beruf)
                    response.data.table.forEach(e => {
                        setUserLogs(userLogs.push(e))
                    })
                    console.log(userLogs)
                })
                .then(() =>{
                    console.log(userLogs[userLogs.length-1])
                    setIsUserLoggedIn(userLogs === null ? false : userLogs[userLogs.length-1].ytbeido !== '' ? true : false)
                })
            }else{
                setUserName('Hiba, kérem olvassa be újra!')
                setUserPos('')
            }
        }else{
            e.key === 'ö' ? setRFID(rfid + '0') : setRFID(rfid + e.key)
        }
    }, [rfid, userLogs])

    const logIn = (e) => {
        Axios.post(`http://192.168.1.92:3000/login/${userHash}/login`)
            .then((response => {
                setIsUserLoggedIn(!isUserLoggedIn)
            }))
        
    }
    const logOut = (e) => {
        Axios.post(`http://192.168.1.92:3000/login/${userHash}/logout`)
            .then((response => {
                setIsUserLoggedIn(!isUserLoggedIn)
            }))
    }
    


    useEffect(() => {
        document.addEventListener("keydown", handleOnKeyDown, false);
    
        return () => {
          document.removeEventListener("keydown", handleOnKeyDown, false);
        };
      }, [handleOnKeyDown]);

    const classes = useStyles()


    const buttons = () => {
        if(userName !== 'Várom a kártyát!' && isUserLoggedIn){
            return <Button ssize="large" variant="contained" color="secondary" className={classes.btn} onClick={logOut}>Kilépek</Button>
        }else if(userName !== 'Várom a kártyát!' && !isUserLoggedIn) {
            return <Button size="large" variant="contained" color="primary" className={classes.btn} onClick={logIn}>Belépek</Button>
        }else{
            return <br/>
        }
    }

    return (
        <Container className={classes.container} >
            <Paper elevation={5}>
                <Card
                    className={classes.card}
                >
                    <CardContent>
                        <Typography variant="h2"  className={classes.title}>
                            <img src="/images/logo.png" alt="logo" className={classes.img}/>
                            Bejelentkezés
                        </Typography>
                        <Divider />
                        <Container className={classes.cardData}>
                            <Avatar className={classes.avatar} src={avatarLink}></Avatar>
                            <Container>
                                <Typography variant='h2' className={userName ? classes.name : classes.nameEmpty}>{userName}</Typography>
                                <Typography variant='h4' className={userName ? classes.pos : classes.posEmpty}>{userPos}</Typography>
                            </Container>
                        </Container>
                    </CardContent>
                    <CardActions className={classes.cardData}>
                        {buttons()}
                    </CardActions>
                    
                </Card>
                <Button
                className={classes.cardData}
                color="primary"
                variant="contained"
                type="submit"
                onClick= {() => history.push('/login')}>
            Bejelentkezés jelszóval
            </Button>
            </Paper>
        </Container>
    )
}