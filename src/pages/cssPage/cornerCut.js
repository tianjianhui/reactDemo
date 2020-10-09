import React from 'react'
import Card from '../../components/card.js'
import style from '../style/cornerCut.module.css'
function CornerCut(){
    let intro = `<div>
    <p>第一幅使用斜纹渐变，让一个角为透明</p>
    <p>第二幅使用两个斜纹渐变，分别调整两个背景在左右两部分从而获得两个切角</p>
    <p>第三幅使用四个径向渐变，径向渐变的圆心分别是矩形的四个顶点，分别调整四个背景的位置从而得到四个弧形切角</p>
    </div>
        `
        let code = `
    <div className="example">
        <div className={style.box1}></div>
        <div className={style.box2}></div>
        <div className={style.box3}></div>
    </div>
    .box1{
        height: 200px;
        background: linear-gradient(-45deg,transparent 15px,#58a 0);
        margin-bottom: 10px;
    }
    .box2{
        height: 200px;
        background: linear-gradient(-45deg,transparent 15px,#900c3f 0) right,
                    linear-gradient(45deg,transparent 15px,#58a 0) left;
        background-size: 50% 100%;
        background-repeat: no-repeat;
    }
    .box3{
        height: 200px;
        background: radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
                    radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
                    radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left,
                    radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right;
        background-size: 50% 50%;
        background-repeat: no-repeat;
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
                <Card title="切角" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default CornerCut