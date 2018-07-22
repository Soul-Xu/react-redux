import React, { Component } from 'react'

class WbItem extends Component {
    handleAdmire (index) {
        this.props.addAdmire(this.props.index)
    }
    render() {
        const {item, index} = this.props
        return (
            <div className="wb-item" key={index}>
                <div className="wb-item-hd">
                    <div className="wb-item-avatar">
                        <img src={require(`./pic/${item.avatar}.jpg`)} />
                    </div>
                    <div className="wb-item-user-info">
                        <div className="wb-item-user-name">{item.username}</div>
                        <div className="wb-item-user-time">
                            <span>{item.time}前</span>
                            <span>来自{item.plateform}</span>
                        </div>
                    </div>
                    <a className="wb-item-more" href="javascript:;"></a>
                </div>
                <div className="wb-item-details">
                    <p className="wb-default-txt">{item.comment}</p>
                </div>
                <div className="wb-item-footer" onClick={this.handleAdmire.bind(this)}>
                    <a className="wb-btn-like" href="javascript:;">
                        <i></i>
                        <span>{item.admire}</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default WbItem
