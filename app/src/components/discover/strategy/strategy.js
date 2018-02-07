import React, {Component} from 'react'
import './strategy.scss'
import {connect} from 'react-redux'
import * as actions from '../../../actions/strategyAction.js';

class StrategyComponent extends Component{
    componentWillMount(){
        this.props.getstrategy()
    }
    render(){
        return (
            <div>
                
                <div>{
                    this.props.ajaxResult.map(item=>{
                        return (<div className="main" key={item.id}>
                            <ul className="pic">
                            <li><u>01</u><img src={item.imgurls.split(';')[0]}/></li>
                            <li><u>02</u><img src={item.imgurls.split(';')[1]}/></li>
                            <li><u>03</u><img src={item.imgurls.split(';')[2]}/></li>
                        </ul>
                        <h3 className="clearfix"><span>攻略</span><b>{item.title}</b></h3>
                        <p>
                        <b>2018/1/9</b>
                        <span><i className="empty heart icon"></i>{item.likes}</span>                    
                        <span><i className="talk outline icon"></i>{item.common}</span>           
                        </p>
                    

                        </div>)
                    })
                }</div>
                 
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.strategylist.status,
        ajaxResult: state.strategylist.result || []
    }
}

export default connect(mapStateToProps, actions)(StrategyComponent);