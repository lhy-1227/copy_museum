import React from "react";
import ReactEcharts from 'echarts-for-react';
import style from './EmergenctButton.module.css';

var days = [6, 5, 4, 4.5, 5.5];
var months = [5, 4, 6, 3.5, 4.5];
var years = [4, 5, 4, 5.5, 6];
export default class EmergencyRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectButton: 0,
            selectChoice: days
        };
    }
   handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "日": {
                this.setState({
                    selectButton: 0,
                    selectChoice: days
                })
                break;
            }
            case "月": {
                this.setState({
                    selectButton: 1,
                    selectChoice: months
                })
                break;
            }
			case "年": {
                this.setState({
                    selectButton: 2,
                    selectChoice: years
                })
                break;
            }
            default: { }
        }
    }
   getOption = () => {
		let op = {
			width: "75%",
            height: "55%",
			grid: {
				top: "23%",
                left: "15%"
			},
			xAxis: {
				type: 'category',
				data: ['社会安全事件', '自然灾害事件', '事故灾难事件', '公共卫生事件', '文物安全事件'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
					margin: 20,
                    fontSize: 12,
                    align: "center",
					interval:0,
                    rotate: 13
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
				},
				axisTick:{
					show:false, //隐藏坐标轴的刻度
					
				}	
			},
			yAxis: {
				type: 'value',
				name: '数量',
				max: 8,
				axisLabel: {
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
				},
				splitLine:{
					show:false,  //去掉背景的网格线
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
				},
				axisTick:{
					show:false, //隐藏坐标轴的刻度
				}
			},
			series: [{
				data: this.state.selectChoice,
				type: 'bar',
				barWidth: '35%',
				itemStyle: {
					normal: {
						color: "#0066FF",
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: '#00FFFF'
							}
						}
					}
				}
			}]
		}
		return op
	}
    render() {
        return (
			<div>
				<div className={style.enTop}>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>日</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>月</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 2) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>年</button>
				</div>
				<ReactEcharts option={this.getOption()} style={{ height: "90%", width: "100%" }}/>
			</div>
        )
    }
}
