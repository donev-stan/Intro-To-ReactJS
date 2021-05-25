import React from 'react'
import { Route, Switch } from 'react-router'
import { Users } from '../users/Users'

export const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <Switch>
                        <Route exact path="/users" component={Users} />
                    </Switch>

                </div>
            </div>
        </div>
    )
}
