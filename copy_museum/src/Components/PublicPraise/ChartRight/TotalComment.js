import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class TotalComment extends React.Component {
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
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月','12月'],
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
				}
			},
			yAxis: {
				type: 'value',
				name: '条',
				
				
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
				data: [52, 96, 122, 150, 123, 123, 156, 153, 123, 136, 138, 135],
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
							color:'#0066FF'//改变折线颜色
						} ,
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: '#0066FF'
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
