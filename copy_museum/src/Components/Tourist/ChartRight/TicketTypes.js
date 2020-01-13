import React from "react";
import ReactEcharts from 'echarts-for-react';
import style from './TicketType.module.css';

const today = [ {"value": 1000-475},{"value": 475},{"value": 1000-474},{"value": 474},{"value": 1000-564},{"value": 564}];
const week = [ {"value": 1000-142},{"value": 142},{"value": 1000-742},{"value": 742},{"value": 1000-574},{"value": 574}];
const month = [ {"value": 1000-392},{"value": 392},{"value": 1000-316},{"value": 316},{"value": 1000-536},{"value": 536}];
const year = [ {"value": 1000-266},{"value": 266},{"value": 1000-353},{"value": 353},{"value": 1000-384},{"value": 384}];
export default class TicketTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectButton: 0,
            selectChoice: today
        };
    }
	handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "今日": {
                this.setState({
                    selectButton: 0,
                    selectChoice: today
                })
                break;
            }
			case "近七日": {
                this.setState({
                    selectButton: 1,
                    selectChoice: week
                })
                break;
            }
			case "本月": {
                this.setState({
                    selectButton: 2,
                    selectChoice: month
                })
                break;
            }
			case "本年": {
                this.setState({
                    selectButton: 3,
                    selectChoice: year
                })
                break;
            }
            default: {}
        }
    }
  getOption = () => {
	let op = {
			width: '30%',
			tooltip: {
				trigger: 'item',
				formatter: "{c} "
			},
			series: [
				{
					center: ['20%', '40%'],
					color: ['rgba(0,0,0,0)','#0066FF'],
					type:'pie',
					radius: ['50%', '40%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[ this.state.selectChoice[0],this.state.selectChoice[1]]
				},
				{	
					center: ['50%', '40%'],
					color: ['rgba(0,0,0,0)','#0099FF'],
					type:'pie',
					radius: ['50%', '40%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [ this.state.selectChoice[2],this.state.selectChoice[3]]
				},
				{	
					center: ['80%', '40%'],
					color: ['rgba(0,0,0,0)','#00FFFF'],
					type:'pie',
					radius: ['50%', '40%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [this.state.selectChoice[4],this.state.selectChoice[5]]
				}
			]
		}
		return op;		
	}
    render() {
        return (
			<div>
				<div className={style.enTop}>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>今日</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>近七日</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 2) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>本月</button>
					<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 3) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>本年</button>
				</div>
				<ReactEcharts option={this.getOption()} style={{ height: "90%", width: "100%" }}/>
			</div>
        )
    }
}
