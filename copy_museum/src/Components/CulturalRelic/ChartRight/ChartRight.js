import React, { PureComponent } from 'react';
import Income from './Income.js';
import Show from './Show.js';
import Ranking from './Ranking.js';

export default class CulturaRelicChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">展览活动统计</div>
                    <Show></Show>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文创产品销售排行榜</div>
                    <Ranking></Ranking>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">文创产品收入统计</div>
                     <Income></Income>
                </div>
            </div>
        );
    }
}
