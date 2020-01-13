import React from "react";
import ReactEcharts from 'echarts-for-react';
import Product from './Prouduct.json';
import style from './Ranking.module.css';

export default class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
			
        };
    }
	getData=()=>{
		 return Product.map((item, index) => {
            return (
                <tr className={style.parkingTableTr} key={index}>
                    <td className={style.tankTh} style={{width:'25%'}}>{item.name}</td>
                    <td className={style.tankTh}>{item.num}</td>
                    <td className={style.tankTh}>{item.type}</td>
                    <td className={style.tankTh}>{item.company}</td>
                    <td className={style.tankTh}>{item.sale}</td>
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
							<th className={style.tankTh}>名称</th>
							<th className={style.tankTh}>数量</th>
							<th className={style.tankTh}>类别</th>
							<th className={style.tankTh}>设计单位</th>
							<th className={style.tankTh}>厂商</th>
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