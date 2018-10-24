import React, {Component} from 'react';
import * as helper from '../../helper/helper';
import {Link} from 'react-router-dom';
class LogoutCpt extends Component {
    render(){
        return (
            <div>
            <h4>You are successfully logged out</h4>
            <h3 className="">Please click on 'Login' to login again to application<Link to='/login'>LogIn</Link></h3>
            </div>
        )
    }

    componentDidMount() {
        helper.deleteSession();
    }
}

export default LogoutCpt;