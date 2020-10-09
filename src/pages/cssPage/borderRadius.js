import React, { Component } from 'react'
import Card from '../../components/card'
import style from '../style/borderRadius.module.css'
import { Slider } from 'antd'
class ImgBorder extends Component{
    constructor(props){
        super(props)
        this.state = {
            borderRadius: {
                borderRadius: 0
            },
            left_top_across: 0,    //左上角圆角的横向半径
            left_top_vertical: 0,   //左上角圆角的纵向半径
            right_top_across: 0,    //右上角圆角的横向半径
            right_top_vertical: 0,   //右上角圆角的纵向半径
            right_bottom_across: 0,   //右下角圆角的横向半径
            right_bottom_vertical: 0,   //右下角圆角的纵向半径
            left_bottom_across: 0,   //左下角圆角的横向半径
            left_bottom_vertical: 0   //左下角圆角的纵向半径
        }
    }
    render(){
        let intro = `
        <div>
        <span>border-radius: left_top_across right_top_across right_bottom_across left_bottom_across / left_top_vertical right_top_vertical right_bottom_vertical left_bottom_vertical
        圆角相当于在每个角上画一个圆弧，每个圆弧有横向半径和纵向半径，/前面是四个横向半径，/后面是四个纵向半径，顺序为 左上 → 右上 → 右下 → 左下</span><br>
        <span>border-radius: 10px 10px 10px 10px,为简写，相当于横向半径和纵向半径相等</span>
        </div>
        `
        let code = `
        <div className="example">
            <div className={style.box} style={this.state.borderRadius}></div>
            <Slider onChange={(val) => handleChange(val,1)} tipFormatter={formatter} />
            左上角圆角的横向半径
            <Slider onChange={(val) => handleChange(val,2)} tipFormatter={formatter} />
            左上角圆角的纵向半径
            <Slider onChange={(val) => handleChange(val,3)} tipFormatter={formatter} />
            右上角圆角的横向半径
            <Slider onChange={(val) => handleChange(val,4)} tipFormatter={formatter} />
            右上角圆角的纵向半径
            <Slider onChange={(val) => handleChange(val,5)} tipFormatter={formatter} />
            右下角圆角的横向半径
            <Slider onChange={(val) => handleChange(val,6)} tipFormatter={formatter} />
            右下角圆角的纵向半径
            <Slider onChange={(val) => handleChange(val,7)} tipFormatter={formatter} />
            左下角圆角的横向半径
            <Slider onChange={(val) => handleChange(val,8)} tipFormatter={formatter} />
            左下角圆角的纵向半径
        </div>
        // 更改圆角半径的函数
        var handleChange = (val,type) => {
            switch(type){
                case 1: 
                    this.setState({
                        left_top_across: val + '%'
                    })
                    break
                case 2: 
                    this.setState({
                        left_top_vertical: val + '%'
                    })
                    break
                case 3: 
                    this.setState({
                        right_top_across: val + '%'
                    })
                    break
                case 4: 
                    this.setState({
                        right_top_vertical: val + '%'
                    })
                    break
                case 5: 
                    this.setState({
                        right_bottom_across: val + '%'
                    })
                    break
                case 6: 
                    this.setState({
                        right_bottom_vertical: val + '%'
                    })
                    break
                case 7: 
                    this.setState({
                        left_bottom_across: val + '%'
                    })
                    break
                case 8: 
                    this.setState({
                        left_bottom_vertical: val + '%'
                    })
            }
            this.setState({
                borderRadius: {
                    borderRadius: "${this.state.left_top_across} ${this.state.right_top_across} ${this.state.right_bottom_across} ${this.state.left_bottom_across} / ${this.state.left_top_vertical} ${this.state.right_top_vertical} ${this.state.right_bottom_vertical} ${this.state.left_bottom_vertical}"
                }
            })
        `
        function formatter(value) {
            return `${value}%`;
        }
        var handleChange = (val,type) => {
            switch(type){
                case 1: 
                    this.setState({
                        left_top_across: val + '%'
                    })
                    break
                case 2: 
                    this.setState({
                        left_top_vertical: val + '%'
                    })
                    break
                case 3: 
                    this.setState({
                        right_top_across: val + '%'
                    })
                    break
                case 4: 
                    this.setState({
                        right_top_vertical: val + '%'
                    })
                    break
                case 5: 
                    this.setState({
                        right_bottom_across: val + '%'
                    })
                    break
                case 6: 
                    this.setState({
                        right_bottom_vertical: val + '%'
                    })
                    break
                case 7: 
                    this.setState({
                        left_bottom_across: val + '%'
                    })
                    break
                case 8: 
                    this.setState({
                        left_bottom_vertical: val + '%'
                    })
            }
            this.setState({
                borderRadius: {
                    borderRadius: `${this.state.left_top_across} ${this.state.right_top_across} ${this.state.right_bottom_across} ${this.state.left_bottom_across} / ${this.state.left_top_vertical} ${this.state.right_top_vertical} ${this.state.right_bottom_vertical} ${this.state.left_bottom_vertical}`
                }
            })
            console.log('borderRadius', this.state.borderRadius)
        }
        return(
            <div className="main-body">
                <div className="example">
                    <div className={style.box} style={this.state.borderRadius}></div>
                    <Slider onChange={(val) => handleChange(val,1)} tipFormatter={formatter} />
                    左上角圆角的横向半径
                    <Slider onChange={(val) => handleChange(val,2)} tipFormatter={formatter} />
                    左上角圆角的纵向半径
                    <Slider onChange={(val) => handleChange(val,3)} tipFormatter={formatter} />
                    右上角圆角的横向半径
                    <Slider onChange={(val) => handleChange(val,4)} tipFormatter={formatter} />
                    右上角圆角的纵向半径
                    <Slider onChange={(val) => handleChange(val,5)} tipFormatter={formatter} />
                    右下角圆角的横向半径
                    <Slider onChange={(val) => handleChange(val,6)} tipFormatter={formatter} />
                    右下角圆角的纵向半径
                    <Slider onChange={(val) => handleChange(val,7)} tipFormatter={formatter} />
                    左下角圆角的横向半径
                    <Slider onChange={(val) => handleChange(val,8)} tipFormatter={formatter} />
                    左下角圆角的纵向半径
                </div>
                <div className="code-box">
                    <Card title="圆角" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
} 
export default ImgBorder