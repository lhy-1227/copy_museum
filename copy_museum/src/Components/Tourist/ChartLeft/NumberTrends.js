import React from "react";
import ReactEcharts from 'echarts-for-react';
import style from './numberTrends.module.css';

var days = [4, 6, 6, 9, 9, 5, 4];
var months = [4, 4, 0, 4, 3, 7, 7];
var years = [8, 3, 4, 6, 6, 2, 2];
export default class NumberTrends extends React.Component {
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
            default: {}
        }
    }
    getOption = () => {
		let op = {
			width: "80%",
            height: "65%",
			grid: {
                top: "24%",
                left: "12%"
            },
			 xAxis: {
				type: 'category',
				data: ['14:30', '', '14:50', '', '15:10', '', '15:30'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					}
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
				name: '数量/天',
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
				type: 'line',
				areaStyle: {
					normal: {
						color: '#0033FF'
					}
				},
				itemStyle : { 
					normal : { 
						color:'#0033FF', //改变折线点的颜色
						lineStyle:{ 
							color:'#0033FF'//改变折线颜色
						} ,
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
		return op;		
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
