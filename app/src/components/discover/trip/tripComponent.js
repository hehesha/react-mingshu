import React from 'react';
import './trip.scss';

export default class TripComponent extends React.Component{
    render(){
        return(
            <div className="trip">
                <ul className="t_nav">
                    <li><img src="../../../../assets/j_dali.jpg" /></li>
                    <li><img src="../../../../assets/j_chendu.jpg" /></li>
                    <li><img src="../../../../assets/j_wuhan.jpg" /></li>
                    <li><img src="../../../../assets/j_xiamen.jpg" /></li>
                    <li><img src="../../../../assets/j_shanghai.jpg" /></li>
                </ul>
            </div>
            )
    }
}