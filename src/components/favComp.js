import React from 'react';


class FavComp extends React.Component {
    constructor(props){
        super(props);
      }
      
  render(){
    return(
      <div className="favorite">
          <img src={this.props.info.src}></img>
          <h5>{this.props.info.name}</h5>
          <div className="under-sect">
              <div className='leftSide'>
                <div className="und-decoration">
                    <span className="dot"></span>
                </div>
              </div>
             <div className="rightSide">
                <p> ₹ {this.props.info.price}</p>
             </div>
          </div>
      </div>
    )
  }
};

export default FavComp;
