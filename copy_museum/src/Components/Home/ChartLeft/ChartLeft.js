import React, { PureComponent } from 'react';
import Cultural from "./Cultural.js";
import SceneEnvironment from "./SceneEnvironment.js";
import TouristData from "./TouristData.js";
import VenuesPraise from "./VenuesPraise.js";

export default class HomeChartLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
			 <div className="chart-left-whole">
                <div className="chart-area">
                    <div className="chart-title">文物统计</div>
                    <Cultural></Cultural>
                </div>
                <div className="chart-area">
                    <div className="chart-title">场馆环境实时数据</div>
                    <SceneEnvironment></SceneEnvironment>
                </div>
                <div className="chart-area">
                    <div className="chart-title">游客实时数据</div>
                    <TouristData></TouristData>
                </div>
				<div className="chart-area">
                    <div className="chart-title">场馆口碑</div>
                    <VenuesPraise></VenuesPraise>
                </div>
            </div>
        );
    }
}
