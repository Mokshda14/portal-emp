import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
class LoginCpt extends Component {
    
    render() {
        let username = '';
        let password = '';
        return(
            <div className="login-container">
                <div className="login-sub-header">
                    LogIn
                </div>
                <div className="card-container">
                    <div className="login-field">
                        <label> Username: </label>
                        <input type="text" value={username} />
                    </div>
                    <div className="login-field">
                        <label> Password: </label>
                        <input type="text" value={password} />
                    </div>
                </div>
                <div class="link"><Link to='/signup'>Sign Up</Link></div>
                <div class="button-container"><button>Submit</button></div>
            </div>
        )
    }
}

export default LoginCpt;