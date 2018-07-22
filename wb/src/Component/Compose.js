import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addComment, changeInput } from '../store/actionCreators'
import './css/style.css'

class Compose extends Component {
    render() {
        return (
            <div className="wrapper compose">
                <div className="compose-top-bar">
                    <Link className="compose-btn-cancel" to='/'>取消</Link>
                    <span>发微博</span>
                    <a className="compose-btn-send" href="javascript:;"
                        onClick={this.props.handleSubmit}>发送</a>
                </div>
                <div className="compose-cont">
                    <textarea name="" id="" placeholder="分享新鲜事..."
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit () {
            const action = addComment()
            dispatch(action)
        },
        handleInputChange (event) {
            const value = event.target.value
            const action = changeInput(value)
            dispatch(action)
        }
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Compose)