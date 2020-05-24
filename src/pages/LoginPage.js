import React, { Component } from 'react';

class LoginPage extends Component {
    state = {}
    render() {
        return (<div>
            <label htmlFor="login">Podaj login<input id='login' type="text" /></label>
            <label htmlFor="pass">Podaj hasło<input id='pass' type="password" /></label>
            <button>Zaloguj</button>
        </div>);
    }
}

export default LoginPage;