import React, { PureComponent } from 'react';
import CommentHot from './CommentHot.js';
import ScenicComment from './ScenicComment.js';

export default class PublicPraiseChartLeft extends PureComponent {
    render() {
        return (
             <div className="chart-left-whole">
                <div className="chart-area-one-third">
                    <div className="chart-title">评论热度分析</div>
                    <CommentHot></CommentHot>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">景区评论概况</div>
                    <ScenicComment></ScenicComment>
                </div>
                <div className="chart-area-one-third">
                    <div className="chart-title">评论热词</div>
                    
                </div>
            </div>
        );
    }
}
