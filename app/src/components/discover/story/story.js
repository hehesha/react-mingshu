import React from 'react';
import './story.scss'
import {connect} from 'react-redux'
import * as actions from '../../../actions/storyAction';

class Story extends React.Component{
    componentWillMount(){
        this.props.getstrategy()
    }
    render(){
        return(
                <div className="story">
                    {/* <div className="box">
                        <img src="../../../../assets/04.jpg" />
                        <div>
                            <span>故事</span>
                            <p>南方人的北京卤煮初体验</p>
                            <p>
                                <b>2018/1/9</b>
                                <span><i className="empty heart icon"></i>687</span>                    
                                <span><i className="talk outline icon"></i>1</span>           
                            </p>
                        </div>
                   </div> */}
                   {
                    this.props.ajaxResult.map(item=>{
                        return (<div className="box" key={item.id}>
                            <img src={item.imgurls.split(';')[0]} />
                            <div>
                                <span>故事</span>
                                <p>{item.title}</p>
                                <p>
                                    <b>2018/1/9</b>
                                    <span><i className="empty heart icon"></i>{item.commons}</span>                    
                                    <span><i className="talk outline icon"></i>{item.likes}</span>           
                                </p>
                            </div>
                        </div>)
                    })
                }
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

export default connect(mapStateToProps, actions)(Story);