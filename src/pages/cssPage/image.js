import React, { Component } from 'react'
import img from '../style/img.module.css'
import { Button } from 'antd'
import Card from '../../components/card'
class Image extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: require('../../assets/img/logo.png'),
            state: 'fill'
        }
    }
    changeStyle(type){
        this.refs.box.style.objectFit = type;
        this.setState({
            state: type
        })
        // console.log('target', this.refs.box.style.objectFit)
    }
    render(){
        let intro = `<div>object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框
        <br>object-fit : fill | contain | cover | none | scale-down
        <br>contain 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”
        <br>cover 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框
        <br>fill 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框
        <br>none 被替换的内容将保持其原有的尺寸
        <br>scale-down 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些</div>`
        let code = `
    <div style={{width: '400px', height: '400px', backgroundColor: '#f0cf85', objectFit: 'fill', marginBottom: '10px'}}>
        <img ref="box" style={{width: '100%', height: '100%', objectFit: 'fill'}} src={this.state.image}/>
    </div>`
        return(
            <div className="main-body">
                <div className="example">
                    <header className="header">object-fit:{this.state.state}</header>
                    <div style={{width: '400px', height: '400px', backgroundColor: '#f0cf85', objectFit: 'fill', marginBottom: '10px'}}>
                        <img ref="box" style={{width: '100%', height: '100%', objectFit: 'fill'}} src={this.state.image}/>
                    </div>
                    <Button type="primary" className={img.outline} onClick={this.changeStyle.bind(this,'fill')}>fill</Button>
                    <Button type="primary" className={img.outline} onClick={this.changeStyle.bind(this,'contain')}>contain</Button>
                    <Button type="primary" className={img.outline} onClick={this.changeStyle.bind(this,'cover')}>cover</Button>
                    <Button type="primary" className={img.outline} onClick={this.changeStyle.bind(this,'scale-down')}>scale-down</Button>
                </div>
                <div className="code-box">
                    <Card title="object-fit" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
}
export default Image