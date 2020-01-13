import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class CulturaNum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
   getOption = (params) => {
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
								value: 15000-params.data[i], 
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
			color: [ '#0099CC', '#00CCCC', '#00FFCC'],
			legend: {
				orient: 'vertical',
				data: ["在外展览藏品数量", "馆内展览藏品数量", "藏品库房数量"],
				itemHeight: 13,
				right: 'right',
				bottom: 'bottom',
				height: '80%',
				textStyle: { //图例文字的样式
                    color: '#0066CC',
                    fontSize: 12,
                }
			},
			series: getSeries()
		}
	}
    render() {
        return (
			<ReactEcharts option={this.getOption({ data: [2070, 5700, 9000], name: ["在外展览藏品数量", "馆内展览藏品数量", "藏品库房数量"] })} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
