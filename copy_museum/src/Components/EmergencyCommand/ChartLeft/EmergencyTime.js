import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class EmergencyTime extends React.Component {
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
				boundaryGap: false,
				data: ['','', '事件2', '', '事件4', '', '事件6',''],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
				},
				axisLine:{
					lineStyle:{
						color:'#0066FF',  //坐标轴的颜色
					},
				}
			},
			yAxis: {
				type: 'value',
				name: '分钟',
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
				data: [0, 5, 6, 2, 7, 8, 10, 3],
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
				itemStyle : { 
					normal : { 
						color:'#8cd5c2', //改变折线点的颜色
						lineStyle:{ 
							color:'#00FFFF'//改变折线颜色
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
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
