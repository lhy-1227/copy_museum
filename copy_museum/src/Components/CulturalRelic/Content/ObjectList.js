import React from "react";
import ReactEcharts from 'echarts-for-react';
import pic1 from './Image/pic1.png';
import pic2 from './Image/pic2.png';
import pic3 from './Image/pic3.png';
import bigPic from './Image/bigPic.png';
import List from './objectList.json';
import style from './Display.module.css';
import { Input,  Icon, Modal } from "antd";
const { Search } = Input;
export default class ObjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
			images: [pic1,pic2,pic3,pic3],
			lists: [],
            listNames: '',
			visible: false
        };
    }
	showModal = () => {
		this.setState({
		  visible: true,
		});
	  };
	  handleCancel = e => {
		console.log(e);
		this.setState({
		  visible: false,
		});
	  };
	getData = () => {
        return List.map((item, index) => {
            let change = (value) => {
                let listArray = this.state.lists;
                listArray[index] = value;
                this.setState({
                    listVolumes: listArray
                })
            }
            if (item["name"].indexOf(this.state.listNames) !== -1) {
                return (
                    <tr key={index}>
						<td className={style.tankTh}>{index}</td>
						<td className={style.tankTh}  style={{width:'5%'}}><a onClick={this.showModal}><img src={this.state.images[index]} alt="" style={{width:'100%'}}/></a></td>
						<Modal
						  title={item.name}
						  visible={this.state.visible}
						  onCancel={this.handleCancel}
						  footer={null}
						>
							<img src={bigPic} alt="" style={{width:'90%'}}/>
						</Modal>
						<td className={style.tankTh} style={{width:'13%'}}>{item.name}</td>
						<td className={style.tankTh} style={{width:'15%'}}>{item.id}</td>
						<td className={style.tankTh}>{item.num}</td>
						<td className={style.tankTh} style={{width:'13%'}}>{item.dynastic}</td>
						<td className={style.tankTh}>{item.type}</td>
						<td className={style.tankTh} style={{width:'13%'}}>{item.size}</td>
						<td className={style.tankTh}>{item.weight}</td>
						<td className={style.tankTh} style={{width:'13%'}}>{item.time}</td>
					</tr>
                )
            } else {
                return (null);
            }
        })
    }
	
	handleInput = (e) => {
        this.setState({
            selectedNameValue: e.target.value
        })
    }
	render(){
		return(
			<div>
				<Search className={style.rankSearch}
                        placeholder="请输入藏品名称"
                        onSearch={value => {this.setState({listNames: value})}}
                />
				<div className={style.rankTable}>
					<table style={{marginRight:'4%'}}>
						<thead>
							<tr className={style.tableTitle}>
								<th className={style.tankTh}>序号</th>
								<th className={style.tankTh}>缩略图</th>
								<th className={style.tankTh}>臧品名称</th>
								<th className={style.tankTh}>分类号</th>
								<th className={style.tankTh}>数量</th>
								<th className={style.tankTh}>年代</th>
								<th className={style.tankTh}>类别</th>
								<th className={style.tankTh}>尺寸</th>
								<th className={style.tankTh}>重量</th>
								<th className={style.tankTh}>创建时间</th>
							</tr>
						</thead>
						<tbody>
							{this.getData()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}