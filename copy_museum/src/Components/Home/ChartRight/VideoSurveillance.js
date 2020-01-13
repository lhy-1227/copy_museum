import React from 'react';
import Unconnect from "../Image/unconnect.png"
import style from './VideoSurveillance.module.css';
class VideoSurveillance extends React.Component {

  render() {
    return (
		<div className={style.videoSurveillance}>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
			<img src={Unconnect} alt=""/>
		</div>
    )
  }
}
export default VideoSurveillance;