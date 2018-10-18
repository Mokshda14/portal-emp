import { connect } from 'react-redux'
import {Switch, Route, Link} from 'react-router-dom';
import React, {Component} from 'react';
import LoginCpt from './login.component';
import SignupCpt from './signup.component';

export class Login extends Component {

    
    render(){
        
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </nav>
                
            </div>
        )
    }

    
}

// const mapDispatchToProps = (dispatch) => {
//     return(
//         // {getTeamDetails: () => dispatch(getTeamDetails())}
//     )
// }



export default connect(
    null,
    null
  )(Login)