import React from 'react'
import './preorder.scss'

export default class PreorderComponent extends React.Component{
    render(){
        return(
                <div className="preorder">
                    <header className="pre_header">
                       <i className="angle left icon" data-filtered="filtered"></i>预订
                    </header>
                    <main className="pre_main">
                        <div className="p_area clearfix">
                            <div className="p_img"></div>
                            <p>近南站号线地铁 公益西樵站 50米公益西樵站</p>
                            <h4>宜住两人，最少入住1天</h4>
                        </div>
                        <ul className="j_massage">
                            <li>
                                <dl>
                                    <dt>2018-02-22</dt>
                                    <dd>最早入住时间14：00</dd>
                                </dl>
                                <dl>
                                    <dt>2018-02-23</dt>
                                    <dd>最晚离开时间12：00</dd>
                                </dl>
                            </li>
                            <li>
                                <i className="minus icon" data-filtered="filtered"></i>
                                <span><p>1套</p><span>房源数</span></span>
                                <i className="plus icon" data-filtered="filtered"></i>
                            </li>
                            <li>
                                <p>标准入住人数/套</p>
                                <span>2人</span>
                            </li>
                        </ul>
                        <div className="o_massage">
                            <h3>预订人信息</h3>
                            <ul>
                                <li>
                                    姓名<span>请填写</span>
                                </li>
                                <li>
                                    手机号码<span>12234325334646</span>
                                </li>
                            </ul>
                            <p>用于接收入住提醒短信和房间详细地址</p>
                        </div>
                        <div className="bx">
                            <i className="users icon" data-filtered="filtered"></i>
                            <p>添加出行意外险（免费赠送一份）</p>
                            <i className="angle right icon" data-filtered="filtered"></i>                           
                        </div>
                        <textarea>
                           
                        </textarea>
                        <div className="ui checkbox">
                          <input type="checkbox"  className="hidden"/>
                          <label>我同意<a>房东交易规则</a></label>
                        </div>
                    </main>
                    <footer className="pre_footer">
                        <p>实付款： 328.00</p>
                        <botton>立即预订</botton>
                    </footer>
                </div>
            )
    }
}