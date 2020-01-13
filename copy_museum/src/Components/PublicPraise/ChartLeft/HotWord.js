import React from "react";

import WorldCloud from './worldcloud.js';
import Echarts from './echart3.js';

export default class ScenicComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   

  getOption = () => {
	 
		let op = {
		series: [{
          type: 'wordCloud',
          sizeRange: [15, 80],
          rotationRange: [0, 0],
          rotationStep: 45,
          gridSize: 8,
          shape: 'pentagon',
          width: '100%',
          height: '100%',
          textStyle: {
            normal: {
              fontWeight: 'bold',
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            }
          },
          data: [
			  {name: '科技', value: 22199},
			  {name: '卫生', value: 10288},
			  {name: '教育', value: 620},
			  {name: '文化', value: 74470},
			  {name: '工业', value: 12311},
			  {name: '农业', value: 1206},
			  {name: '能源', value: 4885},
			  {name: '旅游', value: 22199},
			  {name: '统计', value: 18574},
			  {name: '体育', value: 38929},
			  {name: '医疗', value: 969},
			  {name: '环境', value: 37517},
			]
		} ]

		}
		return op;		
	}
    render() {
         return (
            <Echarts option={this.getOption()} style={{ height: "90%", width: "100%" }}/>
        )
    }
}
