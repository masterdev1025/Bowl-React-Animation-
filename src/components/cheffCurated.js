import React from 'react';
import {connect} from 'react-redux'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import CheffItem from './chfPl'
 let mapStateToProps=(state)=>{
    return {data:state}
  }
   

class CheffCurated extends React.Component {
    constructor(props){
        super(props);
    }
        
    render(){
        return(
            <div className="cheffCurMainWrap">
                <div className="headContCheff">
                <Link to="/"><img className="btnPr" src="./images/prevBtn.png"/></Link>
                    <h5 className="srch">Search</h5>
                    <h2 className="headH2">Chef curated</h2>
                </div>
                <div className="cheffCuratedMainCont">
                    {
                        this.props.data.cheffCurated.map((item,index)=>{
                            return <CheffItem info={item} key = {index} />
                        })
                    }
                </div>
            </div>
        )
    }

} 
export default connect(mapStateToProps)(CheffCurated);
