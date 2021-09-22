import React from 'react'
import {Card, CardContent} from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import LoginForm from './login/login';
import LoginWithCardForm from './login/loginwithcard';

export default function LoginLayout({children}) {
    return (
        <Card>
            <CardContent>
                <Switch>
                    <Route exact path="/login"      component = {LoginForm} />
                    <Route exact path="/login/card" component = {LoginWithCardForm} />
                </Switch>
            </CardContent>
        </Card>
    )
}