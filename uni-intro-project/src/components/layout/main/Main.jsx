import React from 'react'
// import UsersList from '../../users/user-list/UsersList'
import UsersList from '../../users/user-list/UsersList';
import { Switch } from 'react-router-dom'
import User from '../../users/user/User'
import { AuthenticatedRoute } from '../../../utils/guards/AuthenticatedRoute'

const Main = () => {
    return (
        <main className="main-content">
            <Switch>
                <AuthenticatedRoute exact path='/users-list' component={UsersList} />
                <AuthenticatedRoute exact path='/users/:id' component={User} />
            </Switch>
        </main>
    )
}

export default Main