import React, { PureComponent } from 'react';

import Close from "../Image/close.png";
export default class Alert extends PureComponent {
	close=() => {
        this.props.closeDetail();
    }
    render() {
        return (
            <div >
				<div >
					<span>未处理事件02</span>
					<img src={Close} alt="" style={{width:'4%',marginLeft:'57%'}} onClick={this.close}/>
				</div>
				<div>
					<div>上报时间：2019-09-18</div>
					<div>事件类型：公共卫生事件</div>
					<div>事件等级：特别重大</div>
					<div>事件位置：2-1油画厅</div>
					<div>事件描述：事件未处理</div>
					<div>事件状态：接处警</div>
					<div>上报人：徐凯</div>
					<div>处理人：顾飞</div>
				</div>
			</div>
        );
    }
}