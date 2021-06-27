import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MainRouter} from './MainRouter';

export const Router = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    )
};
