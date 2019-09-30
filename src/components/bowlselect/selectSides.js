import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Summary from './summary'
import {connect} from 'react-redux'
import Side from './SdPl'
import Slider from '../swiper'

 let mapStateToProps=(state)=>{
    return {data:state}
  }

class Bowlselect extends React.Component { 
    constructor(){
        super();
        this.clicked = false;
    }
    cl=(e)=>{
        e.target.style.transition = "all 0.5s linear"
        if(this.clicked == false){
            document.querySelector('.forSumm').style.transform = 'translateY(190px)'
            this.clicked = true;
            e.target.style.transform = 'translateY(-145px)'
            e.target.src = './images/summ1.png'
        }else{
            document.querySelector('.forSumm').style.transform = 'translateY(0px)'
            this.clicked = false;
            e.target.style.transform = 'translateY(0px)'
            e.target.src = './images/ordsm.png'
        }
    }
    render(){
        return(
            <div className="mainWrapForSect">
            <div className="bowlSelectContainer updatet forSumm">
                 <div className="circle updatetCircle">
                    <Summary/>
                   <Link to="/bowlselect4"><img className="prevBtn" src="./images/prevBtn.png"/></Link>
                   <img onClick={this.cl.bind(this)} className="ordsm" src="./images/ordsm.png"></img>
                    <img className="regMainBowl" src="./images/regularBowl.png" />
                    <div className="slectSideSect">
                        <h5>Congratulations!</h5>
                        <p>You have made your pasta</p>
                    </div>
                </div> 
                <div className="under-section">
                <p>Select yor <span>sides</span> </p> 
                </div>
                    <div className='selectSide'>
                    {
                        this.props.data.sidesTypes.map((item,index)=>{
                            let style = ''
                            if(index%2==0){
                                style='#FFF0CA'
                            }else{
                                style="#E6D7B1"
                            }
                            return < Side type={'side'} key={index} info={item} style={style} />
                        })
                    }
                    </div>
                <Link to="/congratulations" className="nextBtn wtCart">Next</Link>
                <Link to="/cart" className="cartBtn">Your cart</Link>
            </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);