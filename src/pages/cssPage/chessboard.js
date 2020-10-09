import React, { Component } from 'react'
import Card from '../../components/card'
import style from '../style/chessboard.module.css'
class Chessboard extends Component{
    render(){
        let intro = `
        <div>
            1.第一步获得三角形<br>
            2.移位，使两个三角形拼成一个正方形<br>
            3.移位正方形拼成棋盘
        </div>
        `
        let code = `
        <div className="example">
            <div className={style.box1}></div>
            <div className={style.box2}></div>
            <div className={style.box3}></div>
            <div className={style.box4}></div>
        </div>
        .box1{
            height: 200px;
            margin-bottom: 20px;
            background: #eee;
            background-image: linear-gradient(45deg, #bbb 25%, transparent 0),
                              linear-gradient(45deg, transparent 75%, #bbb 0);
            background-size: 30px 30px;
        }
        .box2{
            height: 200px;
            margin-bottom: 20px;
            background: #eee;
            background-image: linear-gradient(45deg, #bbb 25%, transparent 0),
                              linear-gradient(45deg, transparent 75%, #bbb 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
        }
        .box3{
            height: 200px;
            margin-bottom: 20px;
            background: #eee;
            background-image: linear-gradient(45deg, #bbb 25%, transparent 0),
                              linear-gradient(45deg, transparent 75%, #bbb 0),
                              linear-gradient(45deg, #bbb 25%, transparent 0),
                              linear-gradient(45deg, transparent 75%, #bbb 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px, 15px 15px, 30px 30px; 
        }
        .box4{
            height: 200px;
            background: #eee;
            background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.25) 0),
                              linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.25) 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
        }
        `
        return(
            <div className="main-body">
                <div className="example">
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                    <div className={style.box3}></div>
                    <div className={style.box4}></div>
                </div>
                <div className="code-box">
                    <Card title="棋盘" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
}
export default Chessboard