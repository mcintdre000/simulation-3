import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';



export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/form' component={Form} />
        <Route path='/post' component={Post} />
    </Switch>
)