import React from "react";
import ConditionerIcon from "../Image/conditionerIcon.png"
import VideoIcon from "../Image/videoIcon.png"
import PumpIcon from "../Image/pumpIcon.png"
import SensorIcon from "../Image/sensorIcon.png"
import style from './EquipmentOperation.module.css';

var Airconditioner = [ConditionerIcon,333,"运行","#00CCFF"];
var Video = [VideoIcon,456,"停止",'red'];
var Pumpingunit = [PumpIcon,240,"运行",'#00CCFF'];
var Sensor = [SensorIcon,542,"停止",'red'];

class EquipmentOperation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			selectButton: 0,
			selectChoice: Airconditioner
		};
    }
	handleButtonClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerText) {
            case "空调机组": {
                this.setState({
                    selectButton: 0,
                    selectChoice: Airconditioner
				})
                break;
            }
            case "摄像头机组": {
                this.setState({
                    selectButton: 1,
                    selectChoice: Video
                })
                break;
            }
			case "水泵机组": {
                this.setState({
                    selectButton: 2,
                    selectChoice: Pumpingunit
                })
                break;
            }
			case "传感器": {
                this.setState({
                    selectButton: 3,
                    selectChoice: Sensor
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
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 0) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>空调机组</button>
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 1) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" }}>摄像头机组</button>
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 2) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" ,marginTop: '2%',marginBottom: '2%'}}>水泵机组</button>
				<button className={style.btn} onClick={this.handleButtonClick} style={(this.state.selectButton === 3) ? { background: "#0066FF" } : { background: "rgba(2,48,115,0.6)" ,marginTop: '2%',marginBottom: '2%'}}>传感器</button>
			</div>
            <div className={style.equipmentBottom}>
                <div>
					<span style={{marginRight: '10%'}}>数量：</span>
					<img src={this.state.selectChoice[0]} alt="" style={{width:'20%',height: '30%'}}/>
					<span style={{marginLeft: '12%'}}>[</span>
					<span style={{color: '#00CCFF',marginLeft: '6%',marginRight: '6%'}}>{this.state.selectChoice[1]}</span>
					<span>]</span>
				</div>
			    <div>
					<span>空调机组运行状态:</span>
					<span className={style.equipmentRunning} style={{ backgroundColor:this.state.selectChoice[3]}}>{this.state.selectChoice[2]}</span>
				</div>
            </div>
		</div>
        )
    }
}
export default EquipmentOperation;