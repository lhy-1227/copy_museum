import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class SexAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  getOption = () => {
		let op = {
			width: '80%',
			height: '65%',
			grid: {
				top: '20%',
				left: '13%'		
			},
			xAxis: {
				type: 'category',
				data: ['男观众人数','女观众人数','全部人数'],
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
				},
				axisTick:{
					show:false, //隐藏坐标轴的刻度
					
				}	
			},
			yAxis: {
				type: 'value',
				name: '人数',
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
				data: [500, 300, 800],
				type: 'bar',
				barWidth: '25%',
				itemStyle: {
					normal: {
						color: function(p){
							let colorList = ["#0033FF","#0066FF","#0099FF"];
							return colorList[p.dataIndex];
						},
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
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
