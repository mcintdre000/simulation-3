import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">Dashboard
                <div>
                    <Nav />
                </div>
            </div>
        );
    }
}