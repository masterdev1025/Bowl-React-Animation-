import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Crtitem from './cartItem' 
let mapStateToProps=(state)=>{
    return {data:state}
  }

class Rppasta extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="pastaRepeatWrap">
             <div className="cntr">
                 <h5>Repeat pasta</h5>
                 <p>Your previous customisation</p>
                 <span>Full bowl</span>
                 <button>Mini bowl</button><button>Regular bowl</button>
             </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(Rppasta);
