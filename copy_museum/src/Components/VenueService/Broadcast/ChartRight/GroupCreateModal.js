import React from 'react';
import { Modal, Select } from 'antd';
import style from './../BroadcastTable.module.css';

const { Option } = Select;
export default class GroupCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.father = this.props.father;
    }
    closeModal = () => {
        this.father.setState({
            ModalVisible: false,
            chooseTerminal: [],
            checkedAll: false
        })
    }

    createLiveNameChange = (e) => {
        this.father.setState({
            createLiveName: e.target.value
        })
    }

    createLiveBroad = () => {
        this.father.state.createdLives.push({
            name: this.father.state.createLiveName,
            volume: this.father.state.ModalSliderValue,
            terminal: this.father.state.chooseTerminal
        });
        this.father.setState({
            ModalVisible: false,
            chooseTerminal: [],
            checkedAll: false
        })
    }
    selectOnChange = (value) => {
        if (value === "请选择" || value === "全部终端") {
            this.father.setState({
                selectChoice: this.father.state.wholeTerminalList
            })
        } else {
            this.father.setState({
                selectChoice: this.father.state.groupTerminalList
            })
        }
    }
    generateTerminalList = () => {
        return (
            <ul className={style.terminalListItems}>
                {this.father.state.selectChoice.map((item, index) => {
                    return (
                        <li key={index}>
                            <label
                                className={style.checkBoxLabel}
                                htmlFor={"checkbox" + index}
                            >
                                <input
                                    className={style.popPaneCheckbox}
                                    type="checkbox"
                                    id={"checkbox" + index}
                                    checked={(item.checked) ? true : false}
                                    onChange={(e) => {
                                        let flag = 0;
                                        for (let i = 0; i < this.father.state.chooseTerminal.length; i++) {
                                            if (this.father.state.chooseTerminal[i].name === item.name) {
                                                this.father.state.chooseTerminal.splice(i, 1);
                                                flag = 1;
                                            }
                                        }
                                        if (!flag) {
                                            this.father.state.chooseTerminal.push(item);
                                        }
                                        let arr = this.father.state.selectChoice;
                                        arr[index].checked = e.target.checked;
                                        this.father.setState({
                                            selectChoice: arr
                                        })
                                    }}
                                />
                            </label>
                            {item.name}
                            <span style={{ marginLeft: "40%" }}>ip:{item.ip}</span>
                        </li>
                    )
                })
                }
            </ul>)
    }
    selectWhole = () => {
        if (!this.father.state.checkedAll) {
            this.father.state.selectChoice.filter((item) => {
                item.checked = true;
                return 0;
            })
            this.father.setState({
                chooseTerminal: this.father.state.selectChoice,
                checkedAll: true
            })
        } else {
            this.father.setState({
                chooseTerminal: [],
                checkedAll: false
            })
            this.father.state.selectChoice.filter((item) => {
                item.checked = false;
                return 0;
            })
        }
    }
    render() {
        return (
            <Modal
                title="创建分组"
                visible={this.father.state.ModalVisible}
                onCancel={this.closeModal}
                className={style.LiveBroadcastModal}
                destroyOnClose={true}
                footer={null}
            >
                <div className={style.ModalWhole}>
                    <div>
                        <span className={style.ModalSectionName}>分组名称</span>
                        <input placeholder={"请输入分组名称"} onChange={this.createLiveNameChange} />
                    </div>
                    <div>
                        <div style={{ display: "flex", color: "white" }}>
                            <div className={style.ModalSectionName}>终端选择</div>
                            <Select
                                defaultValue={"请选择"}
                                onChange={this.selectOnChange}
                                style={{ marginTop: "0.5%" }}
                            >
                                <Option value="请选择">请选择</Option>
                                <Option value="全部终端">全部终端</Option>
                                <Option value="分组终端">分组终端</Option>
                            </Select>
                            <div style={{ margin: "0.5% 2% 0 45%" }}>
                                <label
                                    className={style.checkBoxLabel}
                                    htmlFor={"wholeChoose"}
                                >
                                    <input
                                        className={style.popPaneCheckbox}
                                        type="checkbox"
                                        id={"wholeChoose"}
                                        onClick={this.selectWhole}
                                    />
                                </label>
                            </div>全选
                            </div>
                    </div>
                    <div className={style.terminalList}>
                        {this.generateTerminalList()}
                    </div>
                    <div className={style.ModalButtonGroup}>
                        <button onClick={this.createLiveBroad}>创建</button>
                        <button onClick={this.closeModal}>取消</button>
                    </div>
                </div>
            </Modal>
        )
    }
}