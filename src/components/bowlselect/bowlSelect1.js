import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { pulse } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 0.5s',
        animationName: Radium.keyframes(pulse, 'bounce')
    }
}

class Bowlselect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: '',
            animationMiniStyle: null,
            animationRegularStyle: null,
        }
    }
    handler = (e) => {
        const target = e.target;

        if (target.getAttribute('data-bowl') == 'regular') {
            this.setState({ animationRegularStyle: styles.bounce });    
        } else if (e.target.getAttribute('data-bowl') == 'mini') {
            this.setState({ animationMiniStyle: styles.bounce });    
        }

        setTimeout(() => {
            if (target.getAttribute('data-bowl') == 'regular') {
                this.props.history.push({ pathname: "/regularbowl" })
            } else if (target.getAttribute('data-bowl') == 'mini') {
                this.props.history.push({ pathname: "/minibowl" })
            }
        }, 300);
        console.log(this.props.location)

    }
    render() {
        return (
            <StyleRoot>
                <div className="bowlSelectContainer">
                    <div className="circle">
                        <Link to="/"><img className="prevBtn" src="./images/prevBtn.png" /></Link>
                        <div className="selectCont">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="textArea"><p>Select your</p> <span>bowl</span></div>
                    </div>

                    <div className="underArea">
                        <div className="leftSide">
                            <img data-bowl="mini" style={this.state.animationMiniStyle} onClick={this.handler.bind(this)}  src='/images/miniBowl.png' />
                            <h5>Mini bowl</h5>
                            <p>350 ml</p>
                        </div>
                        <div className="rightSide">
                            <img data-bowl="regular" style={this.state.animationRegularStyle} onClick={this.handler.bind(this)} className="regBowlImg img1" src='/images/regularBowl.png' />
                            <h5>Regular bowl</h5>
                            <p> 650 ml</p>
                        </div>
                    </div>
                    <Link to="/bowlselect2" className="nextBtn">Next</Link>
                </div>
            </StyleRoot>
        )
    }
}
export default Bowlselect;