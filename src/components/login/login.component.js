import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { loginAcc } from '../../actions/login.action';
import { connect } from 'react-redux';
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
                <div class="link"><Link to='/signup'>Sign Up</Link></div>
                <div class="button-container" onClick={e => this.props.login(this.state)}><button>Submit</button></div>
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (user) => dispatch(loginAcc(user))
})

const mapStateToProps = (state, ownProps) => {
    if(state.fetchedData.payload.token) {
        window.location.replace('/portal/home') 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginCpt);