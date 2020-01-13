import React from "react";
import ReactEcharts from 'echarts-for-react';

export default class CommentHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   
  getOption = () => {
		let op = {
			color: ['#00FFCC','#0033CC','#9966CC'],
			legend: {
				orient: 'vertical',
				right: 'right',
				data:['好评 6715 84%','中评 773 9%','差评 439 5%'],
				textStyle: { //图例文字的样式
                    color: ['#00FFCC','#0033CC','#9966CC']
                }
			},
			graphic: [{ //环形图中间添加文字
				type: 'text', //通过不同top值可以设置上下显示
				left: '15%',
				top: '35%',
				style: {
					text: '评论总数'+'\n'+'7927',
					textAlign:'center',
					fill: '#00FFCC', //文字的颜色
					width: 30,
					height: 30,
					fontSize: 20,
				
				}
			}],

			series: [
				{
					name:'访问来源',
					type:'pie',
					radius: ['50%', '65%'],
					center: ['30%', '45%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:6715, name:'好评 6715 84%'},
						{value:773, name:'中评 773 9%'},
						{value:439, name:'差评 439 5%'}
					]
				}
			]
		}
		return op;		
	}
    render() {
        return (
			<ReactEcharts option={this.getOption()} style={{height:'90%',width:'100%'}}></ReactEcharts>
        )
    }
}
