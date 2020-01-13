import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from "echarts";

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOption = () => {
		let op = {
			width: "80%",
            height: "70%",
			grid: {
				top: "18%",
                left: "15%"
			},
			xAxis: {
				type: 'category',
				data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
				axisLabel: {  
					textStyle:{
						color:'#0066FF',  //坐标的字体颜色
					},
					interval:1,
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
				max: 800,
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
				data: [500, 700, 600, 720, 280, 550, 370, 620, 430, 540, 320, 270],
				type: 'bar',
				barWidth: '80%',
				itemStyle: {
					normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 1, 1, 0,         //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位。
                            [
                                { offset: 0, color: 'rgba(0,0,0,0.6)' },
                                { offset: 1, color: 'rgb(10,102,238)' }
                            ]),
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
            <ReactEcharts
                option={this.getOption()}
                style={{ width: "100%", height: "90%", marginTop: "2%" }}
            ></ReactEcharts>
        );
    }
}