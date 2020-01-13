import React, { PureComponent } from 'react';
import VideoSurveillance from "./VideoSurveillance.js";
import EquipmentOperation from "./EquipmentOperation.js";
import EnergyStatistics from "./EnergyStatistics.js";
import SystemCostDesign from "./SystemCostDesign.js";

export default class HomeChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
			<div className="chart-right-whole">
                <div className="chart-area">
                    <div className="chart-title">视频监控</div>
                    <VideoSurveillance></VideoSurveillance>
                </div>
                <div className="chart-area">
                    <div className="chart-title">设备运行</div>
                    <EquipmentOperation></EquipmentOperation>
                </div>
                <div className="chart-area">
                    <div className="chart-title">能源数据统计</div>
                    <EnergyStatistics></EnergyStatistics>
                </div>
				<div className="chart-area">
                    <div className="chart-title">系统费用设计</div>
                    <SystemCostDesign></SystemCostDesign>
                </div>
            </div>
        );
    }
}
