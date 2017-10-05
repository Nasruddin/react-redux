import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import TodosPage from '../todo/TodosPage';
import AboutPage from '../about/AboutPage';

const MainRoutes = () =>
    <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/todo" component={TodosPage} />
        <Route path="/about" exact component={AboutPage} />
    </div>;

export default MainRoutes;