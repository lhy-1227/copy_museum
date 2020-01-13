import React, { PureComponent } from 'react';
import HotComment from './HotComment.js';
import PublicPraise from './PublicPraise.js';
import OTAComment from './OTAComment.js';
import style from './content.module.css'
export default class PublicPriseContent extends PureComponent {
    render() {
        return (
            <div style={{height:'90%',paddingTop:'3%'}}>
                <div className={style.charContent}>
                    <div className={style.chartitle}>评论热度满意度趋势</div>
                    <HotComment></HotComment>
                </div>
                <div className={style.charContent} style={{marginTop:'3%'}}>
                    <div className={style.chartitle}>综合口碑指数</div>
                    <PublicPraise></PublicPraise>
                </div>
                <div className={style.charContent} style={{marginTop:'3%'}}>
                    <div className={style.chartitle}>OTA评论分布</div>
					<OTAComment></OTAComment>
                </div>
            </div>
        );
    }
}
