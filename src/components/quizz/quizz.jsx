import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { VerticalAlignTop } from '@mui/icons-material';

const useStyles = makeStyles({
      container:{
        height: '100vh',
        border: '1px solid #0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      picture:{
        display: 'flex',
        justifyContent: 'center'
      },
      question:{
        display: 'flex',
        justifyContent: 'center',
        background: '#808080'
      },
      answers:{
        display: 'flex',
        justifyContent: 'center'
      }
})

export default function Quizz() {

  const [quizzes, setQuizzes] = useState([])

  const classes = useStyles()

  useEffect (() => {
    fetch('http://localhost:8000/quizz')
      .then(res => res.json())
      .then(data => setQuizzes(data))
  }, [])

  return (
    <Container className={classes.picture}>
        <Typography className={classes.picture}> Hello</Typography>
        <Typography className={classes.question} m={7} pt={7} > Kérdés</Typography>
        <div className={classes.answers}>
          <ButtonGroup className={classes.answers}>
            <Button>Válasz1</Button>
            <Button>Válasz2</Button>
          </ButtonGroup>
        </div>
        <div className={classes.answers}>
          <ButtonGroup className={classes.answers}>
            <Button>Válasz3</Button>
            <Button>Válasz4</Button>
          </ButtonGroup>
        </div>
    </Container>    
    
  );
}