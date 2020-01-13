import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class ScenicComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   

  getOption = () => {
		let op = {
			 legend: {
				data: ['好评率', '行业平均'],
				right: 'right',
				bottom: '6%',
				textStyle: {
					color:'#0066FF'
				}
			},
			grid: {
                left: "12%"
            },
			radar: {
				shape: 'polygon',
				splitNumber: 6, // 雷达图圈数设置
				name: {
					textStyle: {
						color: '#0066FF',
						fontSize: '12'
					},
				},
				// 设置雷达图中间射线的颜色
				axisLine: {
					lineStyle: {
						color: '#0066FF',
						},
				},
				indicator: [
				   { name: '美食', max: 40},
				   { name: '风景', max: 40},
				   { name: '交通', max: 40},
				   { name: '其他', max: 40},
				   { name: '价格', max: 40},
				   { name: '环境', max: 40},
				   { name: '人员', max: 40},
				   { name: '体验', max: 40},
				   { name: '服务', max: 40},
				   { name: '酒店', max: 40}
				],
				//雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
				splitArea : {
					show : false,
					areaStyle : {
						color: '#0066FF', // 图表背景的颜色
					},
				},
				splitLine : {
					show : true,
					lineStyle : {
						width : 1,
						color : '#0066FF', // 设置网格的颜色
					},
				},
			},
			series: [{
				type: 'radar', //表示是雷达图
				symbol: 'none', // 拐点的样式，还可以取值'rect','angle'等
				areaStyle: {
					normal: {
						width: 1,
						opacity: 0.2,
					},
				},
				data: [
					{
						value: [30, 24, 40, 35, 15, 10, 10, 15, 28, 38, 40],
						name: '好评率',
						// 设置区域边框和区域的颜色
						itemStyle: {
							normal: {
								color: '#00FFFF',
								lineStyle: {
									color: '#00FFFF',
								},
							},
						}
					},
					{
						value: [20, 30, 35, 38, 15, 18, 20, 38, 28, 20, 15],
						name: '行业平均',
						 itemStyle: {
							normal: {
								color: '#0099FF',
								lineStyle: {
									width: 1,
									color: '#0099FF',
								},
							},
						},
					}	 
				]
			}]
		}
		return op;		
	}
    render() {
         return (
            <ReactEcharts option={this.getOption()} style={{ height: "100%", width: "100%" }}/>
        )
    }
}
