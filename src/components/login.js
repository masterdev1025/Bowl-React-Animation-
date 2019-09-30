import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
 let mapStateToProps=(state)=>{
    return {data:state}
  }
class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="LoginWrapp">
              <div className="forCenter">
                <div className="inpWrap">
                    <p>E-mail ID/ Phone number</p>
                    <input type="email"></input>
                </div>
                  <div className="inpWrap">
                      <p>Password</p>
                    <input type="password"></input>
                  </div>
                  <Link className="fPassLink">Forget password?</Link>
                  <Link className="LogindoneBtn">Log In</Link>
              </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(Login);
