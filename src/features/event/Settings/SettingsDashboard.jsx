import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingNav from './SettingNav'
import { Switch, Route, Redirect } from 'react-router-dom'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotoPages from './BasicPage'
import AccountPage from './AccountPage'


function SettingsDashboard() {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic'/>
                    <Route path='/settings/basic' component={BasicPage}/>
                    <Route path='/settings/about' component={AboutPage}/>
                    <Route path='/settings/photo' component={PhotoPages}/>
                    <Route path='/settings/account' component={AccountPage}/>
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingNav/>
            </Grid.Column>
        </Grid>
    )
}

export default SettingsDashboard
