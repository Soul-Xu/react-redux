import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import WbItem from './WbItem'
import { freshComment, addAdmire } from '../store/actionCreators'

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="top-bar">
                    <Link className="top-bar-btn-compose" to='/compose'></Link>
                    <a href="javascript:;" className="top-bar-btn-refresh"
                        onClick={this.props.handleFresh}
                    ></a>
                </div>
                <div className="cont">
                    <div className="loading">
                        <span><i></i>加载中...</span>
                    </div>
                    <div className="wb-list">
                        {
                            this.props.userList.length === 0 ? (
                                <div className="wb-item wb-item-tips">
                                    <p>您还未发布任何信息哦</p>
                                </div>
                            ) : null
                        }
                        {
                            this.props.userList.map((item, index) => {
                                return (
                                    <WbItem key={index} item={item} index={index} addAdmire={this.props.addAdmire}></WbItem>
                                )
                            })
                        }
                    </div>
                    <div className="loading loading-more">
                        <span></span>
                    </div>
                    <div className="pop-menu">
                        <div className="pop-menu-list">
                            <a href="javascript:;" className="pop-menu-item">删除</a>
                            <a href="javascript:;" className="pop-menu-item pop-menu-item-cancel">取消</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        userList: state.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFresh() {
            const action = freshComment()
            dispatch(action)
        },
        addAdmire(index) {
            const action = addAdmire(index)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)