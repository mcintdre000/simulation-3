import React, { Component } from 'react';
import loginLogo from './logo.png';

export default class Login extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         user: 
    //     }
    // }
    render() {
        const redirectUri = encodeURIComponent(`${window.location.origin}/callback`);
        const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
        return (
            <div className='login'>
                <div>
                    <img className='logo' src={loginLogo} alt="logo" />
                    <h1 className='login-title'>Helo</h1>
                    <button className='login-btn'><a className="link" href={auth0LoginUrl}>Login with Github</a></button>
                </div>
            </div>
        );
    }
}