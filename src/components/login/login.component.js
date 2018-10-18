import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { loginAcc } from '../../actions/login.action';
import { connect } from 'react-redux'
class LoginCpt extends Component {
    
    render() {
        let user = {"username":"", "password":""};
        return(
            <div className="login-container">
                <div className="login-sub-header">
                    LogIn
                </div>
                <div className="card-container">
                    <div className="login-field">
                        <label> Username: </label>
                        <input type="text" value={user.username} />
                    </div>
                    <div className="login-field">
                        <label> Password: </label>
                        <input type="text" value={user.password} />
                    </div>
                </div>
                <div class="link"><Link to='/signup'>Sign Up</Link></div>
                <div class="button-container" onClick={this.props.login(user)}><button>Submit</button></div>
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(loginAcc(user))
})

export default connect(
    null,
    mapDispatchToProps
  )(LoginCpt);