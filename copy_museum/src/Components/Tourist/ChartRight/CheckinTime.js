import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class CheckinTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
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
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					}
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
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
				}
			},
			series: [{
				data: [7, 9, 9, 6, 10, 13, 5],
				type: 'line',
				itemStyle : { 
					normal : { 
						color:'#0033FF', //改变折线点的颜色
						lineStyle:{ 
							color:'#00FFFF'//改变折线颜色
						} ,
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: '#0099FF'
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
            <ReactEcharts option={this.getOption()} style={{ height: "90%", width: "100%" }}/>
        )
    }
}
