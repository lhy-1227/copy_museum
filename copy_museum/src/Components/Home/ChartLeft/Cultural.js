import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class Cultural extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
   getOption1 = (params) => {
		let getSeries = () => {
		    let radius = 20;
			let arr = [];
			let colorList = ['#0033CC', '#0066CC', '#0099CC', '#00CCCC', '#00FFCC'];
			for(let i = 0; i < params.data.length; i++){
				arr.push(
					{
						name: params.name[i],
						type:'pie',
						hoverAnimation: false,
						radius: [radius + '%', radius+10+'%'],
						center: ['70%','45%'],
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
								value:params.data[i], 
								name:params.name[i],
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
			legend: {
				orient: 'vertical',
				data: ["在库文物数量", "布展文物数量", "外出巡展文物数量", "外部文物数量", "馆内文物展览数量"],
				itemHeight: 8,
				left: 'left',
				bottom: 'bottom',
				height: '70%',
				itemGap: 1,
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
			<ReactEcharts option={this.getOption1({ data: [33, 25, 12, 90, 55], which: "down", name: ["在库文物数量", "布展文物数量", "外出巡展文物数量", "外部文物数量", "馆内文物展览数量"] })} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
