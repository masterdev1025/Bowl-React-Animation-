import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Orditem from './ordItem'

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
                <Link to="/"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                <h4>My orders</h4>
              </div>
                <div className="cnt-main-wrap">
                    {
                      this.props.data.myOrders.map((item,index)=>{
                        return <Orditem info={item} key={index} />
                      })
                    }
                </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(ContactUs);
