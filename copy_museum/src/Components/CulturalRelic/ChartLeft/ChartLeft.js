import React, { PureComponent } from 'react';
import CulturaNum from "./CulturaNum.js"
import CulturaRank from "./CulturaRank.js";
import Integrity from "./Integrity.js";
export default class CulturalRelicChartLeft extends PureComponent {
    render() {
        return (
            <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">藏品数量统计</div>
                    <CulturaNum></CulturaNum>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文物级别构成</div>
                    <CulturaRank></CulturaRank>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">完残程度统计</div>
                    <Integrity></Integrity>
                </div>
            </div>
        );
    }
}
