import React, { Component } from 'react'
import Card from '../../components/card'
import imgBorder from '../style/imgBorder.module.css'
class ImgBorder extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let intro = `
        <div>第一个是利用两张背景图，大背景用图片，小背景用用白色到白色的渐变模拟纯白实色背景（只能在多重背景色的最底层设置背景色）
        <br>第二个是利用图像边框属性
        <br>第三幅只是把背景图换成斜纹渐变背景（老式信封样式）
        <br>第四幅是在第二幅的基础上将图片换成斜纹渐变
        <br>第五幅是蚂蚁行军边框，在信封的基础上将虚线变细，再加上一个设置背景位置的动画
        </div>
        `
        let code = `
    <div className="example">
        <div className={imgBorder.box1}></div>
        <div className={imgBorder.box2}></div>
        <div className={imgBorder.box3}></div>
        <div className={imgBorder.box4}></div>
    </div>
    .box1{
        height: 200px;
        background: linear-gradient(white, white), url(../../assets/img/test.png);
        background-clip: padding-box, border-box;
        background-size: cover;
        border: 10px solid transparent;
        background-origin: border-box;
        margin-bottom: 20px;
    }
    .box2{
        height: 200px;
        border: 10px solid transparent;
        border-image: url(../../assets/img/test.png) 30 stretch;
    }
    .box3{
        height: 200px;
        border: 10px solid transparent;
        background: linear-gradient(white, white), repeating-linear-gradient(-45deg, red 0, red 10px,transparent 0, 
            transparent 20px, #58a 0, #58a 30px, transparent 0, transparent 40px);
        background-clip: padding-box, border-box;
        margin-bottom: 20px;
        background-size: cover;
        background-origin: border-box;
    }
    .box4{
        height: 200px;
        border: 10px solid transparent;
        border-image: repeating-linear-gradient(-45deg, red 0, red 10px, transparent 0, transparent 20px,
            #58a 0, #58a 30px, transparent 0, transparent 40px) 10 round;
    }
    @keyframes ants {
        to{
            height: 200px;
            background-position: 100%; // 默认值是 0%
        }
    }
    .box5{
        height: 200px;
        border: 2px solid transparent;
        background: linear-gradient(white, white), repeating-linear-gradient(-45deg, black 0,black 25%, white 0, white 50%);
        background-clip: padding-box, border-box;
        animation: ants 12s linear infinite;
        background-size: 10px 10px;
    }
        `
        return(
            <div className="main-body">
                <div className="example">
                    <div className={imgBorder.box1}></div>
                    <div className={imgBorder.box2}></div>
                    <div className={imgBorder.box3}></div>
                    <div className={imgBorder.box4}></div>
                    <div className={imgBorder.box5}></div>
                </div>
                <div className="code-box">
                    <Card title="边框" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
} 
export default ImgBorder