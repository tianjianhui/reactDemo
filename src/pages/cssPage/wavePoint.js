import React, { Component } from 'react'
import Card from '../../components/card'
import wavePoint from '../style/wavePoint.module.css'
class WavePoint extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let intro = `
        <div>波点<br> radial-gradient(#719192 30%,transparent 0) //径向渐变和线性渐变用法一样，只是径向渐变的一个值是颜色，一个是半径
        <br>第二幅错落的波点，是通过调第二个径向渐变的位置
        <br>第三幅树轮则是运用重复径向渐变
        <br>第四幅是给一个透明的径向渐变圆，每一块背景是一个正方形，相当于每块瓷砖只有中间的圆没有颜色，四个角有背景色从而拼成图案
        <br>第五幅是四个透明的圆环调整位置拼出的图案
        </div>
        `
        let code = `
    <div className="example">
        <div className={wavePoint.box1}></div>
        <div className={wavePoint.box2}></div>
        <div className={wavePoint.box3}></div>
        <div className={wavePoint.box4}></div>
        <div className={wavePoint.box5}></div>
    </div>
    .box1{
        height: 200px;
        background-color: #5f6769;
        background-image: radial-gradient(#719192 30%,transparent 0);
        background-size: 30px 30px;
        margin-bottom: 20px;
    }
    .box2{
        height: 200px;
        background-color: #5f6769;
        background-image: radial-gradient(#719192 30%,transparent 0),radial-gradient(#719192 30%,transparent 0);
        background-size: 30px 30px;
        background-position: 0 0,15px 15px;
        margin-bottom: 20px;
    }
    .box3{
        background-color: #dfcdc3;
        height: 400px;
        background-image: repeating-radial-gradient(#3c4245 0,#3c4245 10px,transparent 0,transparent 30px);
    }
    .box4{
        height: 200px;
        background: #eee;
        background-image: radial-gradient(transparent 80%, rgba(88,180,174,0.3) 0);
        background-size: 30px 30px;
        margin-bottom: 20px;
    }
    .box5{
        height: 200px;
        background: #eee;
        background-image: radial-gradient(transparent 24px, rgba(7,121,228,0.3) 0, rgba(7,121,228,0.3) 30px, transparent 0),
                          radial-gradient(transparent 24px, rgba(255,87,34,0.3) 0, rgba(255,87,34,0.3) 30px, transparent 0),
                          radial-gradient(transparent 24px, rgba(5,223,215,0.3) 0, rgba(5,223,215,0.3) 30px, transparent 0),
                          radial-gradient(transparent 24px, rgba(152,214,234,0.3) 0, rgba(152,214,234,0.3) 30px, transparent 0);
        background-size: 60px 60px;
        background-position: 0 0, 30px 30px, 0 30px, 30px 0;
    }
        `
        return(
            <div className="main-body">
                <div className="example">
                    <div className={wavePoint.box1}></div>
                    <div className={wavePoint.box2}></div>
                    <div className={wavePoint.box3}></div>
                    <div className={wavePoint.box4}></div>
                    <div className={wavePoint.box5}></div>
                </div>
                <div className="code-box">
                    <Card title="波点" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
} 
export default WavePoint