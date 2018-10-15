import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
class SignupCpt extends Component {
    
    render() {
        let username = '';
        let firsName = '';
        let email = '';
        let password = '';
        return(
            <div className="login-container">
                <div className="login-sub-header">
                    SignUp
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
                    <div className="login-field">
                        <label> Email: </label>
                        <input type="text" value={email} />
                    </div>
                    <div className="login-field">
                        <label> Name: </label>
                        <input type="text" value={firsName} />
                    </div>
                </div>
                <div class="link"><Link to='/login'>LogIn</Link></div>
                <div class="button-container"><button>Submit</button></div>
            </div>
        )
    }
}

export default SignupCpt;