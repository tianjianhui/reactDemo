import React, { useState, Children } from 'react'
import Card from '../../components/card.js'
import style from '../style/tab.module.css'
import Child1 from './child1.js'
import Child2 from './child2.js'
function Tab(){
    let intro = `<div>
    利用伪元素做变换形成梯形背景，元素本身放文字，这样就可以避免因变换使文字一起变形的问题，利用tansform的3D变换模拟出一个平面的梯形
    </div>
        `
        let code = `
    <div className="example">
        <div className={style.nav}>
            <div className={[style.link, active === 0 ? style.active : null].join(' ')} onClick={() => {changeTab(0)}}>home</div>
            <div className={[style.link, active === 1 ? style.active : null].join(' ')} onClick={() => {changeTab(1)}}>about</div>
            <div className={[style.link, active === 2 ? style.active : null].join(' ')} onClick={() => {changeTab(2)}}>intro</div>
        </div>
    </div>
    .link{
        position: relative;
        display: inline-block;
        padding: 0.3em 1em 0;
        z-index: 1;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    .link::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        transform: perspective(0.5em) rotateX(5deg); // perspective给一个视距，使其近大远小，rotate向前倾斜，正好利用近大远小形成一个看起来上窄下宽的梯形
        border: 1px solid rgba(0,0,0,0.6);
        background: linear-gradient(rgba(0,255,255,0.6),rgba(0,255,255,1));
        z-index: -1;
        border-radius: 0.5em 0.5em 0 0;
    }
    .active{  // 点击tab后的激活样式
        color: tomato;
        z-index: 2;
    }
       `
    const [active,changeActive] = useState(0)
    const changeTab = (val) => {
        changeActive(val)
    }
    return(
        <div className="main-body">
            <div className="example">
                <div className={style.nav}>
                    <div className={[style.link, active === 0 ? style.active : null].join(' ')} onClick={() => {changeTab(0)}}>home</div>
                    <div className={[style.link, active === 1 ? style.active : null].join(' ')} onClick={() => {changeTab(1)}}>about</div>
                    <div className={[style.link, active === 2 ? style.active : null].join(' ')} onClick={() => {changeTab(2)}}>intro</div>
                </div>
                <Child1></Child1>
                <Child2></Child2>
            </div>
            <div className="code-box">
                <Card title="梯形标签" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Tab