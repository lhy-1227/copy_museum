import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class HotComment extends React.Component {
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
                top: "20%"
            },
			 xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11','12','13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23','24','25', '26', '27', '28', '29', '30', '31'],
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
			yAxis: [{
				type: 'value',
				name: '热度',
				max: 20,
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
			{
				type: 'value',
				name: '满意度',
				max: 2,
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
			}],
			series: [{
				name: "热度",
				yAxisIndex : '0',
				data: [2,5,8,7,6,5,6,5,8,5,8,7,10,5,6,6,5,8,7,10,7,9,8,6,10,5,6,6,10,5,0],
				type: 'line',
				areaStyle: {
					normal: {
						color: '#00CCFF'
					}
				},
				itemStyle : { 
					normal : { 
						color:'#8cd5c2', //改变折线点的颜色
						lineStyle:{ 
							color:'#00CCFF'//改变折线颜色
						}
					} 
				}
			},
			{
				name: '满意度',
				data: [1,1,1,0.8,1,1,1,1,1,1,1,1,0.8,1,1,1,1,1,1,1,1,0.8,1,1,1,1,1,1,1,1,0],
				type: 'line',
				yAxisIndex : '1',
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
