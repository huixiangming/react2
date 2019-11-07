import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Share from './Share';
import Job from './Job';
import Dev from './Dev';
import Ask from './Ask';
export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div class='top'>
                    <button><Link to={url+''}>全部</Link></button>
                    <button><Link to={url+'/good'}>精华</Link></button>
                    <button><Link to={url+'/share'}>分享</Link></button>
                    <button><Link to={url+'/ask'}>问答</Link></button>
                    <button><Link to={url+'/job'}>招聘</Link></button>
                    <button><Link to={url+'/dev'}>客户端测试</Link></button>
                </div>
                <div>
                    <Route exact path={`${url}`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/ask`} component={Ask} />
                    <Route path={`${url}/job`} component={Job} />
                    <Route path={`${url}/dev`} component={Dev} /> 
                </div>
            </div>
        )
    }
}