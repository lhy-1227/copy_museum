import React, { PureComponent } from 'react';
import TimeNumber from "./TimeNumber.js";
import TotalNumbers from "./TotalNumbers.js";
import NumberTrends from "./NumberTrends.js";
import SexAge from "./SexAge.js";

export default class TouristChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="chart-left-whole">
				<div className="chart-area" >
					<div className="chart-title">实时观众数量</div>
					<TimeNumber></TimeNumber>
				</div>
				<div className="chart-area" >
					<div className="chart-title">观众数量统计</div>
					<TotalNumbers></TotalNumbers>
				</div>
				<div className="chart-area" >
					<div className="chart-title">观众数量趋势分布</div>
					<NumberTrends></NumberTrends>
				</div>
				<div className="chart-area">
					<div className="chart-title">观众性年龄段统计</div>
					<SexAge></SexAge>
				</div>
			</div>
        );
    }
}