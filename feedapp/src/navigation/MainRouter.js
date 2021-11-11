import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Feed, CreateFeed, Home} from '../pages';
export const MainRouter = () => {
    return (
        <Switch>
            <Route exact path={global.locales.pages.createFeed} component={CreateFeed} />
            <Route exact path={global.locales.pages.feed} component={Feed} />
            <Route exact path='/' component={Home} />
        </Switch>
    );
};
