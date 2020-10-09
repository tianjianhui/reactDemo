import React, { Component } from 'react'
export default class progressBar extends Component {
    constructor(props){
        super(props)
        console.log('props',props)
    }
    componentDidMount(){
        // console.log('123',this.props)
        let progressBar = this.refs.progressBar
        progressBar.style.backgroundColor = this.props.color
        window.onscroll = function(){
            let el = document.documentElement || document.body;
            console.log('height', el.scrollTop)
            console.log('scrollHeight', el.scrollHeight)
            console.log('client', el.clientHeight)
            // 页面已阅进度
            let percent = (el.scrollTop + el.clientHeight) / el.scrollHeight
            console.log('percent', percent)
            // let progressBar = this.refs.progressBar
            progressBar.style.width = `${percent*100}%`
        }
    }
    render(){
        const barStyles = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: 0,
            height: 3,
            borderRadius: 5,
            zIndex: 100
        }
        return(
            <div style={barStyles} ref="progressBar"></div>
        )
    }
}
