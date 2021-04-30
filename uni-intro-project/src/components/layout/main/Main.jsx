import React from 'react'
import UsersList from '../../users/user-list/UsersList'
import { Switch, Route } from 'react-router-dom'
import User from '../../users/user/User'

const Main = () => {
    return (
        <main className="main-content">
            <Switch>
                <Route exact path='/users-list' component={UsersList} />
                <Route exact path='/users/:id' component={User} />
            </Switch>
        </main>
    )
}

export default Main
