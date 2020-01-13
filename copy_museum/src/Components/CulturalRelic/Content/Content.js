import React, { PureComponent } from 'react';
import style from './Content.module.css';
import ObjectList from './ObjectList.js';
import Display from './Display.js';
export default class CulturalRelicContent extends PureComponent {
    render() {
        return (
            <div className={style.chartCon}>
                <div className={style.chartTwoCon}>
                    <div className={style.chartTitle}>藏品列表</div>
                    <ObjectList></ObjectList>
                </div>
                <div className={style.chartTwoCon} style={{marginTop:'2%'}}>
                    <div className={style.chartTitle}>历史展览活动</div>
                    <Display></Display>
                </div>
            </div>
        );
    }
}
