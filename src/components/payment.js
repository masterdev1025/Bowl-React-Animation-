import React from 'react';
import {connect} from 'react-redux'
import TotIt from './totit'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
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
                <h4>Payment</h4>
              </div>
                <div className="pmntMainWrapp">
                    <div className="usePastaC">
                       <div className="head">
                            <h5>Use Pasta Project credits ($ 50)</h5>
                            <p>Use Pasta Project credits</p>
                            <hr/>
                       </div>
                       <div className="under">
                           <Link to="/apply" >Apply coupons</Link>
                       </div>
                    </div>
                    <div className="grTotWrapp">
                        <div className="leftSide">
                                <p className="p1">item Total</p>
                                <p className="p2">Packing & shipping charges</p>
                                <p className="p2">Taxes & charges</p>
                                <p className="p3">Discount</p>
                                <h5>Grand Total</h5>
                            </div>  
                        <div className="rightSide">
                        <p className="p1">{this.props.data.itemTotal.iTot}</p>
                                <p className="p2">{this.props.data.itemTotal.pS}</p>
                                <p className="p2">{this.props.data.itemTotal.tax}</p>
                                <p className="p3">{this.props.data.itemTotal.disc}</p>
                                <h5>{this.props.data.itemTotal.grandTot}</h5>
                            </div>  
                    </div>

                    <div className="itmWrapp">
                        {
                            this.props.data.itemTotal.d.map((item,index)=>{
                                return <TotIt />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(ContactUs);
