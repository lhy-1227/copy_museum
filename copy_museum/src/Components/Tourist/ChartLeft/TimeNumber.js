import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class TimeNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
   getOption1 = (params) => {
		let getSeries = () => {
		    let radius = 40;
			let arr = [];
			let colorList = ['#0099CC', '#00CCCC', '#00FFCC'];
			for(let i = 0; i < params.data.length; i++){
				arr.push(
					{
						
						name: params.name[i],
						type:'pie',
						hoverAnimation: false,
						radius: [radius + '%', radius+10+'%'],
						center: ['50%','40%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'outside', 
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
			color: ['#0099CC', '#00CCCC', '#00FFCC'],
			legend: {
				orient: 'vertical',
				data: ["人员拥挤", "人员正常", "人员稀少"],
				bottom: 'bottom',
				textStyle: { //图例文字的样式
                    color: '#0066CC',
                    fontSize: 12
                }
			},
			graphic: [{ //环形图中间添加文字
				type: 'text', //通过不同top值可以设置上下显示
				left: '40%',
				top: '35%',
				style: {
					text: '人员密集度',
					textAlign:'center',
					fill: 'white', //文字的颜色
					fontSize: 12,
				
				}
			}],
			series: getSeries()
		}
	}
    render() {
        return (
			<ReactEcharts option={this.getOption1({ data: [90, 70, 90], name: ["人员拥挤", "人员正常", "人员稀少"] })} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
