import React, { PureComponent } from 'react';
import TotalComment from "./TotalComment.js";
import GoodComment from "./GoodComment.js";
import BadComment from "./BadComment.js";

export default class PublicPraiseChartRight extends PureComponent {
    render() {
        return (
            <div className="chart-right-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">总评论/满意度趋势</div>
                    <TotalComment></TotalComment>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">好评量/好评率趋势</div>
                    <GoodComment></GoodComment>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">差评量/差评率趋势</div>
                    <BadComment></BadComment>
                </div>
            </div>
            );
    }
}
