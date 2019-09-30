import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Crtitem from './cartItem' 
import Swiper from 'react-id-swiper';
import Favorite from './favComp'
import Slider from './swiper'

let mapStateToProps=(state)=>{
    return {data:state}
  }

class Cart extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="contactUsWrapp">
            <div className="cnt-nav">
              <Link to="/"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
              <h4>Cart</h4>
            </div>
            <Link to="/bowlselect1" className="btCartS">Add pasta</Link>
            <div className="mainWrappForCart">
             <Crtitem n ={this.props.data.pasta} m={this.props.data.meet} v={this.props.data.veggied} g={this.props.data.garnish} b={this.props.data.pasta} s={this.props.data.sauce}  plate={this.props.data.bow}/>

              <div className="sideWrappf">
                <h4>Cheese potatoes</h4>
                <span>₹ 30</span>
                <div className="changeBtn upChangeBtn">
                    <span>-</span>1<span>+</span>
                </div>
              </div> 
              <div className="addDesertSect">
                <h4>Add drinks & desserts</h4>
                <Slider info={this.props.data.desserts} />
              </div>
              <div className="delivAddrChange">
                <h5>ENTER DELIVERY ADDRESS</h5>
                <Link className="changeAddrBtn">Change</Link>
                <p>1912, Cusp Studios, Greenwood City..</p>
              </div>
              <Link className="proccedLinkCrt">PROCEED</Link>
            </div>

            
          </div>
        )
    }

} 
export default connect(mapStateToProps)(Cart);
