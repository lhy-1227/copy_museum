import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class TouristData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   
   getOption = () => {
		let op = {
			width: "75%",
            height: "50%",
			grid: {
				top: "18%",
                left: "15%"
			},
			xAxis: {
				type: 'category',
				data: ['应入馆团体人数', '应入馆散客人数', '已入馆团体人数', '已入馆散客人数'],
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
				data: [120, 200, 150, 80],
				type: 'bar',
				barWidth: '35%',
				itemStyle: {
					normal: {
						color: function(p){
							let colorList = ["#0066FF","#0099FF","#00CCFF","#00FFFF"];
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
		return op
	}
    render() {
        return (
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
