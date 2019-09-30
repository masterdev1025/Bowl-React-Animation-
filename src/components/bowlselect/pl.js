import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { data: state };
};

class Plcomponent extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.id === 0) {
      this.state = { y: -90, x:480 };
      this.animationClass = "choosePl1";
    }else if(this.props.id == 1)
    {
       this.state = {y:-90, x:480};
      this.animationClass = "choosePl2";

    }
    else if(this.props.id == 2)
    {
      this.state = {y:-90, x:480};
      this.animationClass = "choosePl3";

    }
    else if(this.props.id == 3)
    {
      this.state = {y:-90, x:480};
      this.animationClass = "choosePl4";

    }
    else if(this.props.id == 4){
      this.state = {y:-90, x:480};
      this.animationClass = "choosePl5";
    }
    else{
      this.state = {y:-130, x:this.props.id * 70};
      this.animationClass ="";
    }
    this.lastTarget = null;

  }

  handler = (e) => {
    let tmp = document.querySelectorAll('.plpops .choosePl .myborder');
    for (let i = 0; i < tmp.length; i++) {
      tmp[i].style.border = '3px solid transparent';
    }
    if (e.target.parentNode.className == 'choosePl') {
      if (this.lastTarget !== null) {
        this.lastTarget.style.border = '1px dashed transparent';
      }

      e.target.style.border = '2px dashed #67023F';
    }
    this.lastTarget = e.target;

    if (this.props.data[this.props.type] == 'pasta') {
      this.props.data[this.props.type] = this.props.info.name;
    } else {
      this.props.data[this.props.type] = this.props.info.name + ' ,';
    }
    console.log(this.props.data);
  };


  render() {
    console.log("choosePl " + this.animationClass);
    return (
      <div
        onClick={this.props.fun}
        onClick={this.handler.bind(this)}
        style={{ transform: `translate(${this.state.x}px, ${this.state.y}px) scale(0)`, marginLeft: 10 }}
        className="choosePl" id = {this.props.id}
      >
        <div className="myborder" />
        {this.props.info.kk ? <img className="decForPl" src={this.props.info.kk} /> : null}
        <img src={this.props.info.src} />
        <div className="nameSection">
          <p>{this.props.info.name}</p>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Plcomponent);
