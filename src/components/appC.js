import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Cp from './cp'
 let mapStateToProps=(state)=>{
    return {data:state}
  }
   

class ContactUs extends React.Component {
    constructor(props){
        super(props);
    }
        
    render(){
        return(
            <div className="contactUsWrapp">
              <div className="cnt-nav">
                <Link to="/payment"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                <h4>Apply coupons</h4>
              </div>
                <div className="appCpMainWrap">
                    <div className="inpWrap">
                        <input placeholder="Enter promo code" type="text"></input>
                        <a className="apply">Apply</a>
                    </div>
                    <div className="avbCp">
                        <h5>Available coupons</h5>
                        <hr/>
                        <div className="avbCpwrap">
                            {
                                this.props.data.availableCoupons.map((item,index)=>{
                                        return <Cp info = {item}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(ContactUs);
