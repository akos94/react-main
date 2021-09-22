import React from 'react'
import {Card, CardContent} from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import TabletLoginForm from './tablet/tabletlogin';
import TabletLoginWithCardForm from './tablet/tabletloginwithcard';

export default function TabletLoginLayout({children}) {
    return (
        <Card>
            <CardContent>
                <Switch>
                    <Route exact path="/login"      component = {TabletLoginForm} />
                    <Route exact path="/login/card" component = {TabletLoginWithCardForm} />
                </Switch>
            </CardContent>
        </Card>
    )
}