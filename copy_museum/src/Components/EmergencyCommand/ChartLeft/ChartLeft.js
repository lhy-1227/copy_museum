import React, { PureComponent } from 'react';
import EmergencyAnalyze from "./EmergencyAnalyze.js";
import EmergencyTrend from "./EmergencyTrend.js";
import EmergencyRank from "./EmergencyRank.js";
import EmergencyTime from "./EmergencyTime.js";
export default class EmergencyCommandChartLeft extends PureComponent {
    render() {
        return (
             <div className="chart-left-whole">
                <div className="chart-area">
                    <div className="chart-title">应急事件处理情况分析</div>
                    <EmergencyAnalyze></EmergencyAnalyze>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件发展趋势</div>
                   <EmergencyTrend></EmergencyTrend>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件类型及等级排名</div>
					<EmergencyRank></EmergencyRank>
                </div>
                <div className="chart-area">
                    <div className="chart-title">应急事件处理耗时统计</div>
                    <EmergencyTime></EmergencyTime>
                </div>
            </div>
        );
    }
}
