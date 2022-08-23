import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Star3Screen } from '../components/star3/Star3Screen';
import { StarScreen } from '../components/star2/StarScreen';
import { Star1Screen } from '../components/star1/star1';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/star3" component={ Star3Screen } />
                    <Route exact path="/per/:personajeId" component={ StarScreen } />
                    <Route exact path="/star1" component={ Star1Screen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/star3" />
                </Switch>
            </div>


        </>
    )
}
