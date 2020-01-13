import React from "react";
import style from "./HotPlace.module.css";
import data from "./place.json"
export default class TicketTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
	
	getDate=()=> {
		let table = [];
		for(let i=0;i<data.length;i++){
			table.push(
				<tr>
					<td style={(i%2 === 0 )?{}:{backgroundColor:'rgba(0,51,153,0.4)'}}>{data[i].rank}</td>
					<td style={(i%2 === 0 )?{border: '1px solid rgba(0,51,153,0.4)'}:{backgroundColor:'rgba(0,51,153,0.4)',border: '1px solid rgba(0,51,153,0.4)'}}>{data[i].place}</td>
					<td style={(i%2 === 0 )?{}:{backgroundColor:'rgba(0,51,153,0.4)'}}>{data[i].num}</td>
				</tr>
			);
		}
		return table;
	}
    render() {
        return (
			<table className={style.hotPlaceTable}>
				<thead>
					<tr style={{backgroundColor:'rgba(0,51,200,0.5)'}}>
						<th>排名</th>
						<th style={{border: '1px solid rgba(0,51,153,0.4)'}}>地区</th>
						<th>数量</th>
					</tr>
				</thead>
				<tbody >
					{this.getDate()}
				</tbody>
			</table>
        )
    }
}
