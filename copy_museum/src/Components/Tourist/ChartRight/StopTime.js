import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class StopTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  getOption = () => {
		let op = {
			width: '80%',
			height: '60%',
			grid: {
				top: '20%',
				left: '13%'		
			},
			xAxis: {
				type: 'value',
				name: '时',
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
			yAxis: {
				type: 'category',
				data: ['>=1D',"",'8H',"",'6H',"",'4H',"",'2H'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
					interval:0
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
				}
			},
			series: [{
				data: [564, 186, 254, 104, 144, 620, 465, 265, 536, 846],
				type: 'bar',
				barWidth: '65%',
				itemStyle: {
					normal: {
						color: '#0066FF',
						label: {
							show: true, //开启显示
							position: 'right', //在上方显示
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
			<ReactEcharts option={this.getOption()} style={{height:'100%',width:'100%'}}></ReactEcharts>
        )
    }
}
