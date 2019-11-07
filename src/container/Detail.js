import React, { Component } from 'react'
export default class Chapter extends Component {
    constructor(props){
        super(props);
        this.state = {
        }}
    componentDidMount(){
        var id = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    content:res.data.content,
                    title:res.data.title,
                    create_at:res.data.create_at,
                })
            })
        }
    render() {
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html:this.state.title}}></h1>
                <h3 dangerouslySetInnerHTML={{__html:this.state.create_at}}></h3>
                <h2 dangerouslySetInnerHTML={{__html:this.state.content}}></h2>
            </div>
        )
    }
}