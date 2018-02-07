import React from 'react'
import './sare.scss'

import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import * as actions from '../../../actions/strategyAction.js';

 class SareComponent extends React.Component{
     componentWillMount(){
        console.log(this.props.location.query.id)
        this.props.getShare(this.props.location.query.id)
    }
    render(){
      
        return (

            <div className="sare">
                <header>
                <p>
                    <i className="angle left icon" onClick={()=>hashHistory.goBack()}></i>
                    <span>
                    <i className="talk outline icon"></i>
                    <i className="share icon"></i>
                    </span>
                </p>
                </header>
                <div className="content">
                    {
                        this.props.ajaxResult.map(item=>{
                            return <div key="item.sid" dangerouslySetInnerHTML={{__html: item.text}}></div>
                        })
                    }
                </div>           
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

export default connect(mapStateToProps, actions)(SareComponent);