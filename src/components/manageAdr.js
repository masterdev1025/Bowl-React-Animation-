import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Addr from './addr'
 let mapStateToProps=(state)=>{
    return {data:state}
  }
   

class ManageAdressess extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="contactUsWrapp">
            <div className="cnt-nav">
              <Link to="/"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
              <h4>Manage address</h4>
            </div>
           <div className="mainContF">
          <Link to="/addaddress" className="addAdrBtn">Add address</Link>
            <div className="undr-cont">
                <div className="wrok-home-cont">
                   <Link>Home</Link>
                   <Link>Work</Link>
                </div>
            </div>
           </div>
                <div className="addresses">
                    {
                        this.props.data.addresessHome.map((item,index)=>{
                            return <Addr inf='home' info = {item} key={index} />
                        })
                    }
                </div>
            <Link  className="doneBtn" >Done</Link>
          </div>
        )
    }

} 
export default connect(mapStateToProps)(ManageAdressess);
