import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class EmergencyAnalyze extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
   getOption1 = (params) => {
		let getSeries = () => {
		    let radius = 35;
			let radiusCount = 50 / params.data.length;
			let arr = [];
			let colorList = ['#0066CC', '#0099CC', '#00CCCC', '#00FFCC'];
			for(let i = 0; i < params.data.length; i++){
				arr.push(
					{
						name: params.name[i],
						type:'pie',
						hoverAnimation: false,
						radius: [radius + '%', radius+radiusCount+'%'],
						center: ['30%','53%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
						   
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:[
							{
								value: 100-params.data[i], 
								name: 'a',
								itemStyle: {
									normal:{
										color: 'rgba(0,0,0,0)'
									}
								}
							},
							{
								value:params.data[i], 
								name:params.name[i],
								itemStyle: {
									normal:{
										//自定义颜色
										color: colorList[i]
									}
								}
							}	
						]
					}
				)
				radius += radiusCount;
			}
			return arr;
		} 
        return {
			color: ['#0066CC', '#0099CC', '#00CCCC', '#00FFCC'],
			legend: {
				orient: 'vertical',
				data: ["历史应急事件总数", "处理中事件总数", "待处理时间总数", "以处理事件总数"],
				itemHeight: 8,
				right: 'right',
				height: '70%',
				textStyle: { //图例文字的样式
                    color: '#0066CC',
                    fontSize: 12,
                }
			},
			grid: {
                bottom: '90%',
                left: "30%",
               
            },
			yAxis: [{
                type: 'category',
                min: -1,
               
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    inside: true,
                    textStyle: {
                        color: "rgb(28,244,249)",
                        fontSize: 12,
                    },
                    show: true
                },
                data: [20, 34, 60, 78]
            }],
            xAxis: [{
                show: false
            }],
			series: getSeries()
		}
	}
    render() {
        return (
			<ReactEcharts option={this.getOption1({ data: [20, 34, 60, 78], which: "down", name: ["历史应急事件总数", "处理中事件总数", "待处理时间总数", "以处理事件总数"] })} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
