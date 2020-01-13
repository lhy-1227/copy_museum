import React from "react";
import style from './../BroadcastTable.module.css';
import { message, Popconfirm } from 'antd';
import TextCreateModal from './TextCreateModal'
import TextEditModal from './TextEditModal';
import { wholeTerminal, groupTerminal } from './../Terminals';

export default class LiveBroadcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createdLives: [
                { name: "寻人启示01", volume: 60, terminal: { name: "2-2油画展厅", ip: "10.81.180.5", checked: false } },
            ],
            //Modal共用
            wholeTerminalList: wholeTerminal,
            groupTerminalList: groupTerminal,
            selectChoice: wholeTerminal,
            checkedAll: false,
            chooseTerminal: [],
            ModalSliderValue: 50,
            //创建的Modal
            ModalVisible: false,
            createLiveName: "",
            //查看的Modal
            ModifyModalVisible: false,
            ModifyLiveId: 0
        };
    }
    handleCreateNewLiveButton = () => {
        this.setState({
            ModalVisible: true
        })
    }
    handleModifyModal = (index) => {
        this.setState({
            ModifyModalVisible: true,
            ModifyLiveId: index,
            ModalSliderValue: this.state.createdLives[index].volume
        })
    }
    deleteSuccessMsg = (index) => {
        let arr = this.state.createdLives;
        arr.splice(index, 1);
        this.setState({
            createdLives: arr,
            ModifyLiveId: 0
        })
        message.info("删除成功!");
    }
    generateTable = () => {
        if (this.state.createdLives.length === 0) {
            return (
                <tr>
                    <td colSpan={2} style={{ color: "white" }}>
                        暂无文本广播会话
                    </td>
                </tr>
            )
        } else {
            return this.state.createdLives.map((item, index) => {
                return (
                    <tr key={index} className={style.TableTr}>
                        <td className={style.broadcastNameItem}>{item.name}</td>
                        <td className={style.TableOperation}>
                            <div onClick={this.handleModifyModal.bind(this, index)}></div>
                            <Popconfirm placement="right" title={"您确定要删除吗?"} onConfirm={this.deleteSuccessMsg.bind(this, index)} okText="确认" cancelText="取消">
                                <div className={style.deleteIcon}></div>
                            </Popconfirm>
                        </td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div className={style.LiveBroadcastWhole}>
                <button
                    className={style.createNewLiveButton}
                    onClick={this.handleCreateNewLiveButton}
                >创建文本广播</button>
                <div style={{ width: "100%", height: "78%", overflow: "auto", scrollbarWidth: "thin", marginTop: "2%" }}>
                    <table className={style.LiveBroadcastTable}>
                        <thead>
                            <tr className={style.TableHeader}>
                                <th className={style.TableBorder}>广播名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable()}
                        </tbody>
                    </table>
                </div>
                <TextCreateModal
                    father={this}
                >
                </TextCreateModal>
                <TextEditModal
                    father={this}
                ></TextEditModal>
            </div>
        )
    }
}