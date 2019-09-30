import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Summary from './ordSumm'
import ordSumm from './ordSumm';

 let mapStateToProps=(state)=>{
    return {data:state}
  }

class ContactUs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            check:false,
        }

    }
    handlerCheck=()=>{
        this.setState({ check: true });
        if(this.state.check == true){ 
        this.setState({ check: false });
        }
    }
    render(){
        return(
            <div className="ordItemCont">
              <div className="headCont">
                  <div className="leftSide">
                      <span>
                          <p>ORDER DELIVERED TO</p>
                          <h5>{this.props.info.to}</h5>
                      </span>
                      <span>
                          <p>ORDER NUMBER</p>
                          <h5>{this.props.info.ordNum}</h5>
                      </span>
                      <span>
                          <p>TOTAL</p>
                          <h5>Rs {this.props.info.tot}</h5>
                      </span>
                  </div>
                  <div className="rightSide">
                  <span>
                          <p>ORDERED ON</p>
                          <h5>{this.props.info.date}</h5>
                      </span>
                      <a onClick={this.handlerCheck} className="summOpenbtn"><img src="./images/eye.png" />VIEW ORDER SUMMARY</a>
                  </div>
                { this.state.check ? <Summary /> : null }
              </div>
              <div className="Ordfooter">
                  <h5>{this.props.info.status}</h5>
                  <Link>Reorder</Link>
              </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(ContactUs);
