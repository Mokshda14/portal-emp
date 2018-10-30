import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { loginAcc } from '../../actions/login.action';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
// import * as helper from '../../helper/helper';
class LoginCpt extends Component {
    

    constructor(props) {
        super(props);
        this.state = {"username":"", "password":""}
        this.setAcc = this.setAcc.bind(this);
    }


    setAcc(evt, field) {
        switch(field) {
            case 'username': {
                this.setState({...this.state, username: evt.target.value});
                break;
            }
            case 'password': {
                this.setState({...this.state, password: evt.target.value});
                break;
            }
            default: return null;
        }
    }
    

    render() {
        console.log(this.props);
        if (!this.props.isSessionValid.session_flag) {
        return(
            <div className="login-container">
                <div className="login-sub-header">
                    LogIn
                </div>
                <div className="card-container">
                    <div className="login-field">
                        <label> Username: </label>
                        <input type="text" name="username" 
                        value={this.state.username} onChange={(e) => this.setAcc(e, 'username')} />
                    </div>
                    <div className="login-field">
                        <label> Password: </label>
                        <input type="text" value={this.state.password} onChange={(e) => this.setAcc(e, 'password')}/>
                    </div>
                </div>
                <div className="link"><Link to='/signup'>Sign Up</Link></div>
                <div className="button-container" onClick={e => this.props.login(this.state)}><button>Submit</button></div>
            </div>
        ) } else if(this.props.location.pathname === '/login') {
            return (
                <div>
                PORTAL HOME
                <Redirect to='/portal/home' push={false} />
                </div>
            )
        } else {
            return(
            <div>
                <Redirect to={this.props.location.pathname} push={false} />
                </div>
            )
        }
    }
    
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(loginAcc(user))
})

const mapStateToProps = (state, ownProps) => {
    return ({isSessionValid : state.session})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginCpt);
