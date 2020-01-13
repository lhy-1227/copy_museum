import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class Integrity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
        };
    }
	
    getOption = () => {
		let option = {
			color: ['#00CCFF','#0099FF'],
			series : [
				{
					type: 'pie',
					radius : '60%',
					center: ['50%', '50%'],
					data:[
						{value:75, name:'残缺'},
						{value:25, name:'完整'},
						
					],
					labelLine: {    //引导线设置
						 normal: {
							show: true,   //引导线显示
							length: 8,
							length2: 80
						 }
				    },
					label: {
						normal: {
							formatter: '{b}: {c}%',
							textStyle: {
								fontSize: 12,
								padding: [3, -60, 30, -60],
							}
						}
					}
				}
			]
		}
		return option
	}
    render() {
        return (
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
