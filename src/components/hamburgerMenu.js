import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import LogoutComponent from './logout'

 let mapStateToProps=(state)=>{
    return {data:state}
  }

class Hamburger extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
         checkLogout:false,
        }
    }
    handlerCheckLogout=()=>{
        this.setState({ checkLogout: true });
        if(this.state.checkLogout == true){ 
        this.setState({ checkLogout: false });
        }
    }
    render(){
        return(
            <div className="mainWrap">
             { this.state.checkLogout ? <LogoutComponent handlFun={this.handlerCheckLogout}/> : null }
                <div className="hambMenu">
                <div className="hambHeader">
                    <div className="userArea">
                        <div className="circle"></div>
                        <div className="userInfo"> 
                            <h3>{this.props.userInfo[0].name}</h3>
                            <p>{this.props.userInfo[0].email}</p>
                            <p>{this.props.userInfo[0].phone}</p>
                        </div>
                    </div>
                </div>
                <div className="hambMain">
                    <ul> 
                        <li><img src='/images/shopping-bag.png'/><Link to='/myorders'>My orders</Link></li>
                        <li><img src='/images/placeholder.png'/><Link to="/manageaddress">Manage Addresses</Link></li>
                        <li><img src='/images/information.png'/><Link to="/aboutus">About pasta project</Link></li>
                        <li onClick={this.handlerCheckLogout}  ><img src='/images/logout.png'/><p>Log out</p></li>
                        <li><img src='/images/phone-call.png'/><Link to="/contactus">Contact us</Link></li>
                    </ul>
                </div>
                
            </div>
                <div className="hambEffect"></div>
            </div>

        )
    }
}
export default connect(mapStateToProps)(Hamburger);