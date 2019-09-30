import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return { data: state }
}

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'bounce')
    }
}
class Bowlselect extends React.Component {
    constructor(props) {
        super(props);
    }
    handler = () => {
        this.props.data.bow = 'Mini bowl'

    }

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
                        <img className="regMainBowl1" src="/images/regularBowl.png" />

                        <div className="textArea updatetTextarea"><p>Select your</p> <span>bowl</span></div>
                    </div>

                    <div className="underArea">
                        <div className="mainSelectedBowl">
                            <h5>Mini bowl</h5>
                            <p>350 ml</p>
                            <span>Starting from 250$</span>
                        </div>
                    </div>
                    <div className="miniBowlArea1 rightSide1">
                        <div><p>Regular bowl</p>
                        <span>650ml</span></div>
                        <Link to="/regularbowl"><img className="regBowlImg1" src="./images/miniBowl.png" /></Link>
                    </div>
                    <Link onClick={this.handler} to="/bowlselect2" className="nextBtn">Next</Link>
                </div>
            </StyleRoot>
        )
    }
}
export default connect(mapStateToProps)(Bowlselect);