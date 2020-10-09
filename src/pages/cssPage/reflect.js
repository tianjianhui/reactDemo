import React, { Component } from 'react'
import Card from '../../components/card'
import reflect from '../style/reflect.module.css'
class Reflect extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: require('../../assets/img/logo.png')
        }
    }
    render(){
        let intro = `<div>box-reflect：none | direction offset mask-box-image
        <br>direction = above | below | left | right
        <br>offset = length | percentage  //长度可为负值
        <br>mask-box-image = none | url | linear-gradient | radial-gradient | repeating-linear-gradient | repeating-radial-gradient</div>`
        let code = `
    html
    <div className="example">
        <div className="word-flect">hello world</div>
        <img className="img-flect" src={this.state.img}/>
    </div>
    css
    .word-flect{
        -webkit-box-reflect: below 0 -webkit-linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));
    }
    .img-flect{
        -webkit-box-reflect: below 0 -webkit-linear-gradient(rgba(255,255,255,0) 30%,rgba(255,255,255,1) 100%);
    }
        `
        return(
            <div className="main-body">
                <div className="example">
                    <div className={reflect.wordFlect}>hello world</div>
                    <img className={reflect.imgFlect} src={this.state.img}/>
                </div>
                <div className="code-box">
                    <Card title="box-reflect" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
}
export default Reflect