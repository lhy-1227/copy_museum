import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class VenuesPraise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
	getOption = () => {
		let op = {
			grid: {
                top: "20%",
                left: "12%"
            },
			radar: {
				shape: 'polygon',
				splitNumber: 5, // 雷达图圈数设置
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
				   { name: '美食', max: 30},
				   { name: '酒店', max: 30},
				   { name: '服务', max: 30},
				   { name: '体验', max: 30},
				   { name: '风景', max: 30},
				   { name: '交通', max: 30},
				   { name: '其他', max: 30},
				   { name: '服务', max: 30},
				   { name: '体验', max: 30},
				   { name: '风景', max: 30},
				   { name: '交通', max: 30}
				   
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
						value: [15, 28 ,0 ,24,5,0,15, 28 ,0 ,24],
						name: '2018-07',
						// 设置区域边框和区域的颜色
						itemStyle: {
							normal: {
								color: '#0099FF',
								lineStyle: {
									color: '#0099FF',
								},
							},
						}
					},
					{
						value: [8, 24, 5, 0, 15, 28, 0, 15, 28, 10],
						name: '',
						 itemStyle: {
							normal: {
								color: '#0066FF',
								lineStyle: {
									width: 1,
									color: '#0066FF',
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
            <ReactEcharts option={this.getOption()} style={{ width: "70%", height: "75%" }}></ReactEcharts>
        )
    }
}
