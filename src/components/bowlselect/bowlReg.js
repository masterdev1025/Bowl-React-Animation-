import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux'
import './bowlselect.css';
let mapStateToProps = (state) => {
    return { data: state }
}

const styles = {
    bounce: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(slideInRight, 'bounce')
    }
}

class Bowlselect extends React.Component {
    constructor(props) {
        super(props);
    }
    handler = () => {
        this.props.data.bow = 'Regular bowl'

    }
    handler1(){
        window.alert("sdfsdf");
        this.props.history.push({ pathname: "/minibowl" });
    };
    render() {
        return (
            <StyleRoot>
                <div className="bowlSelectContainer updatet">
                    <div className="circle updatetCircle">
                        <Link to="/bowlselect1">
                            <img className="prevBtn" src="./images/prevBtn.png" /></Link>
                        <div className="selectCont regCont">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* <img style={styles.bounce} className="regMainBowl" src="/images/regularBowl.png" /> */}
                        <img  className="regMainBowl select1" src="/images/regularBowl.png" />

                        <div className="textArea updatetTextarea"><p>Select your</p> <span>bowl</span></div>
                    </div>

                    <div className="underArea">
                        <div className="mainSelectedBowl">
                            <h5>Regular bowl</h5>
                            <p>650 ml</p>
                            <span>Starting from 250$</span>
                        </div>
                    </div>
                    <div className="miniBowlArea area1">
                        
                        <Link to ="/minibowl"><img src="./images/miniBowl.png" /></Link>
                        <p>Mini bowl</p>
                        <span>350ml</span>
                    </div>
                    <Link onClick={this.handler} to="/bowlselect2" className="nextBtn">Next</Link>
                </div>
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);