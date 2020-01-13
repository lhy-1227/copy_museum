import React from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";
export default class CulturaRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
    getOption = () => {
		let option = {
			width: "85%",
            height: "75%",
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'line'
				}
			},
			grid: {
				left: "1%",
                top: "22%",
				containLabel: true
			},
			xAxis: {
				type: 'value',
				name: '件',
				max: 2000,
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
			yAxis: {
				type: 'category',
				name: '级别',
				data: ['未定级','三级','二级','一级'],
				axisLabel: {
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
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
				data: [1120, 980, 1520, 1200],
				type: 'bar',
				barWidth: '65%',
				itemStyle: {
					normal: {
						 color: new echarts.graphic.LinearGradient(
							0, 0, 1, 0,
							[
								{offset: 0, color: '#0099FF'},
								{offset: 0.5, color: '#00CCFF'},
								{offset: 1, color: '#00FFFF'}
							]
						),
						label: {
							show: true, //开启显示
							position: 'right', 
							textStyle: { //数值样式
								color: '#00FFFF'
							}
						}
					}
				}
			}]
		}
		return option
	}
    render() {
        return (
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
