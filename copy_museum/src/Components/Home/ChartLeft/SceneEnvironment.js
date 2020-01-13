import React from "react";
import { Progress } from 'antd';
import style from './Scene.module.css';

var indoor = [ {"value": 30,"name":"30°"},{"value": 73,"name":"73%"},{"value": 60,"name":"0.6mg/m³"},
			 {"value": 10,"name":"0.1mg/m³"},{"value": 35,"name":"35ug/m³.5"},{"value": 25,"name":"25%"}];
var outdoor = [ {"value": 18,"name":"18°"},{"value": 90,"name":"90%"},{"value": 30,"name":"0.3mg/m³"},
			 {"value": 50,"name":"0.5mg/m³"},{"value": 66,"name":"66ug/m³.5"},{"value": 12,"name":"12%"}];
export default class SceneEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
			selectButton: 0,
            selectChoice: indoor
        };
    }
	getValue =()=> {
		let arr = [];
		for(let i=0;i<6;i++){
			arr.push(
				<div className={style.stepContent}><Progress strokeColor={{from: '#0033FF',to: '#00CCFF',}} percent={this.state.selectChoice[i].value} showInfo={false} /></div>
			);
		}
		return arr
	}
	getName =()=> {
		let arr1 = [];
		for(let i=0;i<6;i++){
			arr1.push(
				<div>{this.state.selectChoice[i].name}</div>
			);
		}
		return arr1
	}
	
	handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "室内": {
                this.setState({
                    selectButton: 0,
                    selectChoice: indoor
				})
                break;
            }
            case "室外": {
                this.setState({
                    selectButton: 1,
                    selectChoice: outdoor
                })
                break;
            }
            default: {}
        }
    }
    render() {
        return (
		<div>
			<div className={style.enTop}>
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>室内</button>
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>室外</button>
			</div>
			<div className={style.step}>
				<div className={style.environmentTitle}>
					<div>温度</div>
					<div>湿度</div>
					<div>TVOC</div>
					<div>甲醛</div>
					<div>PM2.5</div>
					<div>氨</div>
				</div>
				<div className={style.environmentContent}>
					{this.getValue()}
				</div>
				<div className={style.environmentData}>
					{this.getName()}
				</div>
			</div>
		</div>
        )
    }
}
