import React, { Component } from 'react'
export default class About extends Component{
    render(){
        var Mock = require('mockjs');
        var data = Mock.mock({
           "nmber|1-20": 20
        })
        console.log(data)
        return(
            <div>about page</div>
        )
    }
}