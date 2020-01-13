import React, { PureComponent } from 'react';
import PointNavigation from './PointNavigation';

export default class HomeContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            picShow: true,
            lastShowPic: -1
        };
    }

    childTransMes(str) {
        if (str !== this.state.lastShowPic) {
            this.setState({
                picShow: !this.state.picShow,
                lastShowPic: str
            })
        }
        console.log(this.state);
    }


    render() {
        return (
            <div className="content">
                <PointNavigation picShow={this.state.picShow}/>
            </div>
        );
    }
}
