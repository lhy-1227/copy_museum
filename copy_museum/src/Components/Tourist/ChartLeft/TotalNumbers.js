import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class TotalNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
   getOption = (params) => {
		let getSeries = () => {
		    let radius = 30;
			let arr = [];
			let colorList = ['#0033CC', '#0066CC', '#0099CC', '#00CCCC', '#00FFCC'];
			for(let i = 0; i < params.data.length; i++){
				arr.push(
					{
						name: params.name[i],
						type:'pie',
						radius: [radius + '%', radius+20+'%'],
						startAngle: 1,
						data:[
							{
								value:params.data[i], 
								name:params.name[i],
								 label: {
									normal: {
										textStyle: {
											color: colorList[i]
										}
									}
								},
								labelLine: {
									normal: {
										lineStyle: {
											color: colorList[i]
										}
									}
								},
								itemStyle: {
									normal:{
										//自定义颜色
										color: colorList[i]
									}
								}
							},
							{
								value: 100-params.data[i], 
								name: 'a',
								itemStyle: {
									normal:{
										color: 'rgba(0,0,0,0)'
									}
								}
							}
						]
					}
				)
				radius += 10;
			}
			return arr;
		} 
        return {
			color: ['#0033CC', '#0066CC', '#0099CC', '#00CCCC', '#00FFCC'],
			tooltip : {
				trigger: 'item',
				formatter: "{a} : {c}"
			},
			
			series: getSeries()
		}
	}
    render() {
        return (
			<ReactEcharts option={this.getOption({ data: [90, 65, 50, 25, 10], which: "down", name: ["数量全部", "年统计", "月统计", "7日统计", "今日统计"] })} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
