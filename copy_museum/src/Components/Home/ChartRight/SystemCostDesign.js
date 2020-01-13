import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class SystemCostDesign extends React.Component {
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
				top: '22%',
				left: '13%'		
			},
			xAxis: {
				type: 'category',
				data: ['4-17','4-18','4-19', '4-20','4-21','4-22','4-23'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
					interval:1
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
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar',
				barWidth: '35%',
				itemStyle: {
					normal: {
						color: function(p){
							let colorList = ["#00FFFF","#0099FF","#00FFFF","#0099FF","#00FFFF","#0099FF","#00FFFF"];
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
