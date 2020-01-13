import React from "react";
import ReactEcharts from 'echarts-for-react';
import style from './EnergyStatistic.module.css';

var energy = [20, 60, 50, 70, 80, 60, 80];
var load = [120, 45, 60, 25, 30, 75, 80];
var electric = [100, 90, 30, 50, 40, 60, 70];
export default class EnergyStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectButton: 0,
            selectChoice: energy
        };
    }
	handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "能耗": {
                this.setState({
                    selectButton: 0,
                    selectChoice: energy
                })
                break;
            }
            case "负荷": {
                this.setState({
                    selectButton: 1,
                    selectChoice: load
                })
                break;
            }
			case "电费": {
                this.setState({
                    selectButton: 2,
                    selectChoice: electric
                })
                break;
            }
            default: { }
        }
    }
	getOption = () => {
		let op = {
			width: "80%",
            height: "65%",
			grid: {
                top: "20%",
                left: "12%"
            },
			 xAxis: {
				type: 'category',
				data: ['14:30', '', '15:30', '', '16:30', '', '17:30'],
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
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#00FFFF' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(0,0,0,0.4)' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						}
					}
				},
				itemStyle : { 
					normal : { 
						color:'#8cd5c2', //改变折线点的颜色
						lineStyle:{ 
							color:'#00FFFF'//改变折线颜色
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
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>能耗</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>负荷</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 2) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>电费</button>
				</div>
				<ReactEcharts option={this.getOption()} style={{ height: "90%", width: "100%" }}/>
			</div>
            
        )
    }
}
