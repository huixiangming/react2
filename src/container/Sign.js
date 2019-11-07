import React, { Component } from 'react'

export default class Sign extends Component {
    render() {
        return (
            <div>
                 Sign
                 <div>
                     用户名：
                     <input></input>
                     <br/>
                     密码：&nbsp;&nbsp;&nbsp;
                     <input></input>
                     <br/>
                     <button onClick={() => this.props.history.push('/home')}>登录</button>
                 </div>
            </div>
        )
    }
}