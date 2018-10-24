import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {createAcc} from '../../actions/login.action';
import {connect} from 'react-redux';
class SignupCpt extends Component {

    constructor(props) {
        super(props);
        this.state = {"username":"", user: {
            firstName:"", password:"", email:""
        }}
        this.setAcc = this.setAcc.bind(this);
    }
    

    setAcc(evt, field) {
        switch(field) {
            case 'username': {
                this.setState({...this.state, username: evt.target.value});
                break;
            }
            case 'password': {
                let user = Object.assign({}, this.state.user, {password: evt.target.value});
                this.setState({...this.state,  user: user});
                break;
            }
            case 'email': {
                let user = Object.assign({}, this.state.user, {email: evt.target.value});
                this.setState({...this.state,  user: user});
                break;
            }
            case 'firstName': {
                let user = Object.assign({}, this.state.user, {firstName: evt.target.value});
                this.setState({...this.state,  user: user});
                break;
            }
            default: return null;
        }
    }
    render() {

        
        // let user = {username: 'moksh', password:'moksh', email:'moksh@moksh.com', firstName:'moksh'};
        // let username = "moksh"
        return(
            <div className="login-container">
                <div className="login-sub-header">
                    SignUp
                </div>
                <div className="card-container">
                    <div className="login-field">
                        <label> Username: </label>
                        <input type="text" name="username" 
                        value={this.state.username} onChange={(e) => this.setAcc(e, 'username')} />
                    </div>
                    <div className="login-field">
                        <label> Password: </label>
                        <input type="text" value={this.state.user['password']} onChange={(e) => this.setAcc(e, 'password')}/>
                    </div>
                    <div className="login-field">
                        <label> Email: </label>
                        <input type="text" value={this.state.user['email']} onChange={(e) => this.setAcc(e, 'email')}/>
                    </div>
                    <div className="login-field">
                        <label> Name: </label>
                        <input type="text" value={this.state.user['firstName']} onChange={(e) => this.setAcc(e, 'firstName')}/>
                    </div>
                </div>
                <div className="link"><Link to='/login'>LogIn</Link>  <Link to='/portal/home'>Portal</Link></div>
                <div className="button-container"><button onClick={ e => this.props.signup(this.state.user, this.state.username)}>Submit</button></div>
            </div>
        )
    }


    
}
const mapDispatchToProps = (dispatch) => {
    
    return ({
    signup: (user, userName) => {
        let userAcc = {};
        userAcc[userName] = user;
        if(userName) {
            dispatch(createAcc(userAcc))
        }
    }
    })
}


export default connect(
    null,
    mapDispatchToProps
  )(SignupCpt);