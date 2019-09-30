import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Crtitem from './cartItem' 
let mapStateToProps=(state)=>{
    return {data:state}
  }

class Editpasta extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="contactUsWrapp">
            <div className="cnt-nav">
              <Link to="/cart"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
              <h4>Edit pasta</h4>
            </div>
          </div>
        )
    }

} 
export default connect(mapStateToProps)(Editpasta);
