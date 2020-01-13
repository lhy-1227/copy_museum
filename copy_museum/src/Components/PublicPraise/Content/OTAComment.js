import React from "react";
import OTACommentImg from './OTACommentImg.js';
import { Carousel, Icon } from 'antd';

export default class OTAComment extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
		next() {
			this.slider.slick.slickNext();
		}
		prev() {
			this.slider.slick.slickPrev();
		}
    render() {
        return (
			<div> 
				<Carousel dots= 'false' autoplay = 'false' ref={el => (this.slider = el)}>
					<OTACommentImg></OTACommentImg>
					<OTACommentImg></OTACommentImg>	
				</Carousel>
				<a onClick={this.prev} ><Icon type="caret-left" style={{color:'#0066FF',position:'relative',bottom:'8rem'}}/></a>
				<a onClick={this.next}><Icon type="caret-right"  style={{color:'#0066FF',position:'relative',bottom:'8rem',left: '97%'}}/></a>
			</div>
        )
    }
}