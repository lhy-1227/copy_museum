import React from "react";
import JingDong from "./Image/jingDong.png"
import MaFeng from "./Image/maFeng.png"
import MeiTuan from "./Image/meiTuan.png"
import QuNa from "./Image/quNa.png"
import TongCheng from "./Image/tongCheng.png"
import TuNiu from "./Image/tuNiu.png"
import XieCheng from "./Image/xieCheng.png"
import style from "./otaComment.module.css";


export default class OTACommentImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
			data:[387017, 283809, 214887, 256545 ,58561, 21206, 20731],
			image: [ QuNa, XieCheng, MeiTuan, MaFeng, TongCheng, JingDong, TuNiu ]
        };
    }
	
    render() {
		const content = this.state.data.map((item,index)=>{
		return (
			<div >
				<img src={this.state.image[index]} alt="" style={{width:'80%'}}/>
				<div >口碑热度</div>
				<div style={{paddingTop:'2px',backgroundColor:'#0066FF',width:'40px',margin:'auto'}}></div>
				<div >{item}</div>
				<div style={{color:'#00FFFF'}}>满意度</div>
			</div>
		)
		});
        return (
			<div className={style.otaTotal}>
				{content}
			</div>
        )
    }
}
