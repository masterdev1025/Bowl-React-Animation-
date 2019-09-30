import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Popuprp from './rpPasta'

let mapStateToProps=(state)=>{
    return {data:state}
  }
   
class Crtitem extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            clicked:false,
        }
    }
    handler=()=>{
        this.setState({ clicked: true });
       
    }
    render(){ 
        return(
        <div>
            { this.state.clicked ? <Popuprp /> : null }
            
            <div className="crtItemWrap">
            <div className="infoSect">
                <h4>Alfredo Spagetti</h4>
                <p>
                Broccoli, Bell pepper, Mushroom 
                Chicken sausage, Black olives, 
                Parsley, Farm fresh salad.
                </p>
                <div className="tmpWrap">
                <span>₹ 250</span> <div onClick={this.handler} className="plType">Regular</div>
                <div className="changeBtn">
                    <span>-</span>1<span>+</span>
                </div>
            </div>
                </div>
            <div className="imgSect">
                <img className="cartImg" src="./images/miniBowl.png"></img>
                <Link to='/editpasta' className="edtPastaBtn">edit pasta</Link>
                
            </div>

        </div>
        </div>
        )
    }
}
export default connect(mapStateToProps)(Crtitem);
//payment,yourcollection