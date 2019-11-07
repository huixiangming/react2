import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Pages from './Pages'
export default class All extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    //装载完成请求All页
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=good')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    //分页
    Page=(idx)=>{
        this.setState({
            page:idx
        })
    }
    componentDidUpdate(prevState,prevProps){
        if(prevProps.page !== this.state.page){        
            fetch('https://cnodejs.org/api/v1/topics/?tab=good&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
        }
    }
    render() {
        return (
        <div>
            <ul>
                <div class="a">
                {
                    this.state.data.map((item)=><li class="c">
                        <div class="b">
                        <img src={item.author.avatar_url} class="touxiang"/>
                        <span class="reply">{item.reply_count}/</span>
                        <span class="visit">{item.visit_count}</span>
                        <sapn class="ask">问答</sapn>                               
                        <Link class="topic" to={'/topic/'+item.id}>{item.title}</Link>
                        <span class="time">10分钟前</span>
                        <img src={item.author.avatar_url} class="touxiang1"/>
                        </div></li>)
                }
                </div>
            </ul>
            <Pages getPages={this.Page}/>
        </div>
        )
    }
}