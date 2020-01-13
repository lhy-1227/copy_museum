import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class PublicPraise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   
   getOption = () => {
		let op = {
			width: "85%",
            height: "60%",
			grid: {
				top: "14%"
			},
			xAxis: {
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月','12月'],
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
				name: '指数',
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
				data: [68.45, 63.75, 64.94, 68.49, 77.09, 70.17, 82.42, 76.14, 83.4, 80.65, 77.05, 72.17],
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
			<ReactEcharts option={this.getOption()} style={{height:'100%',width:'100%'}}></ReactEcharts>
        )
    }
}
