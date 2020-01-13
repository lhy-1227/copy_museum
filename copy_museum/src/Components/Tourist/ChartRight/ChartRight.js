import React, { PureComponent } from 'react';
import HotPlace from "./HotPlace.js";
import StopTime from "./StopTime.js";
import TicketTypes from "./TicketTypes.js";
import CheckinTime from "./CheckinTime.js";

export default class TouristChartRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area">
                    <div className="chart-title">热门客源地分析</div>
					<HotPlace></HotPlace>
                </div>
                <div className="chart-area">
                    <div className="chart-title">观众逗留时长分析</div>
                    <StopTime></StopTime>
                </div>
                <div className="chart-area">
                    <div className="chart-title">票种分析</div>
					<TicketTypes></TicketTypes>
                </div>
				<div className="chart-area">
                    <div className="chart-title">检票时间分析</div>
                    <CheckinTime></CheckinTime>
                </div>
            </div>
        );
    }
}