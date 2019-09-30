import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
 let mapStateToProps=(state)=>{
    return {data:state}
  }
   
class AboutUs extends React.Component {
    constructor(props){
        super(props);
    }
        
    render(){
        return(
            <div className="contactUsWrapp">
              <div className="cnt-nav">
                <Link to="/selectsides"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
              </div>
              <div className="congrMainWrapp">
                  <div className="head">
                    <h5>Congratulations!</h5>
                    <p>You have made your pasta</p>
                  </div>
                  
              </div>
                   <div className="congrImgWrap">
                   <img  className="congbg" src="./images/congbg.png"/>
                    <img className="congPlate" src="./images/regularbowl.png"/>
                   </div>
                   <div className="congrUnderSect">
                        <h4>Name your pasta</h4>
                        <input placeholder="For eg- 'Sam's pasta'" type='name'></input>
                        <Link to='/thanksfororder' className="sWfBtn">Share with friends</Link>
                    </div>
                  </div>
        )
    }

} 
export default connect(mapStateToProps)(AboutUs);
