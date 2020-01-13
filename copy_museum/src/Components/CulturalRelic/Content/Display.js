import React from "react";
import ReactEcharts from 'echarts-for-react';
import HistoryShow from './historyShow.json';
import style from './Display.module.css';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
			
        };
    }
	getData=()=>{
		 return HistoryShow.map((item, index) => {
            return (
                <tr key={index} style={(index%2 === 0 )?{}:{backgroundColor:'rgba(0,51,153,0.4)'}}>
					<td className={style.tankTh}>{index}</td>
                    <td className={style.tankTh}>{item.name}</td>
                    <td className={style.tankTh}>{item.company}</td>
                    <td className={style.tankTh}>{item.activityType}</td>
                    <td className={style.tankTh}>{item.activityDate}</td>
                    <td className={style.tankTh}>{item.workNum}</td>
					<td className={style.tankTh}>{item.audienceNum}</td>
					<td className={style.tankTh}>{item.activityPlace}</td>
					<td className={style.tankTh}>{item.wholeName}</td>
                </tr>
            )
        })
	}
	render(){
		return(
			<div className={style.rankTable}>
				<table>
					<thead>
						<tr className={style.tableTitle}>
							<th className={style.tankTh}>序号</th>
							<th className={style.tankTh}>活动名称</th>
							<th className={style.tankTh}>主办单位</th>
							<th className={style.tankTh}>活动类型</th>
							<th className={style.tankTh}>活动时间</th>
							<th className={style.tankTh}>工作人员数</th>
							<th className={style.tankTh}>观众人数</th>
							<th className={style.tankTh}>活动地点</th>
							<th className={style.tankTh}>单位名称</th>
						</tr>
					</thead>
					<tbody>
						{this.getData()}
					</tbody>
				</table>
			</div>
		)
	}
}