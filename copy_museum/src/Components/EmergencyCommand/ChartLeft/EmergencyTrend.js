import React from "react";
import ReactEcharts from 'echarts-for-react';
import style from './EmergenctButton.module.css';

var months = [6,5,7,8,8,8,8,7,10,6,6,8,7,6,7,6,5,7,8,8,8,8,7,10,6,6,8,10,5,6];
var years = [7, 4, 7, 8, 7, 10, 7, 6, 8, 5, 8, 5];
var monthsX = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11','12','13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23','24','25', '26', '27', '28', '29', '30', '31'];
var yearsX = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11','12'];
export default class EmergencyTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectButton: 0,
            selectChoice: months,
			selectX: monthsX,
			interval: 1,
        };
    }
    handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "月": {
                this.setState({
                    selectButton: 0,
                    selectChoice: months,
					selectX: monthsX,
					interval: 2,
                })
                break;
            }
            case "年": {
                this.setState({
                    selectButton: 1,
                    selectChoice: years,
					selectX: yearsX,
					interval: 0,
                })
                break;
            }
            default: { }
        }
    }
	
    getOption = () => {
		let op = {
			width: "80%",
            height: "55%",
			grid: {
                top: "23%",
                left: "12%"
            },
			 xAxis: {
				type: 'category',
				boundaryGap: false,
				data: this.state.selectX,
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
					interval: this.state.interval
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
				}
			},
			yAxis: {
				type: 'value',
				name: '数量',
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
								offset: 0, color: '#0066FF' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(0,0,0,0.4)' // 100% 处的颜色
							}],
							global: false // 缺省为 false
						}
					}
				},
				showSymbol: false,
				itemStyle : { 
					normal : { 
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
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>月</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>年</button>
				</div>
				<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
			</div>
        )
    }
}
