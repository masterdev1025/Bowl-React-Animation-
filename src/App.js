import React from 'react';
import './App.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Swiper from 'react-id-swiper';
import Favorite from './components/favComp'
import Slider from './components/swiper'
import HambMenu from './components/hamburgerMenu'
import $ from "jquery";
import BowlSelect1 from './components/bowlselect/bowlSelect1'
import LogoutComponent from './components/logout'
import {connect} from 'react-redux'


 let mapStateToProps=(state)=>{
    return {data:state}
  }
class PastaProject extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorits:[
        {name:'Alfredo spagetti',price:250,src:'./images/alf.png'},
        {name:'Alfredo spagetti',price:250,src:'./images/alf2.png'},
        {name:'Alfredo spagetti',price:250,src:'./images/alf2.png'},
        {name:'Alfredo spagetti',price:250,src:'./images/alf2.png'},
        
     
     ],
     user:[
       {name:"John Doe",email:"johndoe123456@gmail.com",phone:"+91 9415 100 182"}
      ],
      clicked:false,
      conut:0,
    }
  }
  openHamburger=()=>{
    this.setState({ clicked: true });
    if(this.state.clicked == true){
      this.setState({ clicked: false });
    }
  }
  render(){
    return(
       
      <div className="">
        <div className="header-section">
          <div className="leftSide">
            <div onClick={this.openHamburger} className="header-nav-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
            { this.state.clicked ? <HambMenu userInfo={this.state.user} /> : null }
            <div className="wrap-txt-area">
              <h3>Hey Mayan , </h3>
              <h5>Let`s get you a pasta </h5>
            </div>
          </div>
          <div className="rightSide">
            <img src='/images/logo.png' />
          </div>
        </div>
        <div className="ownPastaMakeSection">
          <h3>Make your own pasta</h3>
          <h5>Craft a pasta on your own, share it & <br></br> enjoy with friends & family</h5>
          <img src =  'images/plate.png'></img>
          <Link className="linkBtn" to="/bowlselect1">Start now</Link>
        </div>
        <div className="section3">
          <div className="effect"></div>
          <div className="leftSide">
            <h3>Chef curated pasta</h3> 
            <p>Try our delicious, hand -crafted pasta <br></br>
               range curated by experienced chefs.</p>
               <button><Link style={{color:"#000"}} to="/cheff">Order now</Link></button>
          </div>
          <div className="rightSide"></div> 
        </div>
        <div className="section4">
          <h3>My favorits</h3>
            <div className='favWrapper'>
              <Slider info={this.state.favorits} />
            </div>
        </div>
        
      </div>
    )
  }
};


export default connect(mapStateToProps)(PastaProject);

