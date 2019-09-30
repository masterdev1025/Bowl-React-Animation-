import React from 'react';
import {connect} from 'react-redux'

 let mapStateToProps=(state)=>{
    return {data:state}
  }
   

class Logout extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="logoutMainWrap">
                 <div className="popUp">
                     <h5>Are you sure?</h5>
                     <ul>
                         <li><a>Yes, log out</a></li>
                         <li onClick={this.props.handlFun} ><a >No, go back</a></li>
                     </ul>
                 </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(Logout);
