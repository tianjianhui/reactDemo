import React, { Component } from 'react'
export default class Home extends Component{
    render(){
        console.log('props', this.props)
        return(
            <div>
                <div style={{height:'1000px'}}>home page</div>
            </div>
        )
    }
}