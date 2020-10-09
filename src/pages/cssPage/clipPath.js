import React from 'react'
import style from '../style/clipPath.module.css'
import Card from '../../components/card.js'
function Rhombus(){
    let intro = `<div>
    <span class="bigFont bold">语法</span><br>
    <div class="item"><span class="title">clip-path:</span> &lt;clip-source&gt;/&lt;basic-shape&gt/&lt;geometry-box&gt;</div>
    <div class="item"><span class="title">&lt;clip-source&gt;:</span> 用 url 表示剪切元素的路径</div>
    <div class="item"><span class="title">&lt;basic-shape&gt;:</span> 一种形状，其大小和位置由<几何盒>值定义。如果没有指定几何框，则边框将用作参考框</div>
    <div class="item"><span class="title">&lt;geometry-box&gt;:</span> 如果同 &lt;basic-shape&gt; 一起声明，它将为基本形状提供相应的参考框盒。通过自定义，它将利用确定的盒子边缘包括任何形状边角（比如说，被 border-radius 定义的剪切路径）。几何框盒可以有以下的值中的一个：
        <p><span class="title">margin-box:</span> 使用 margin box 作为引用框</p>
        <p><span class="title">border-box:</span> 使用 border box 作为引用框</p>
        <p><span class="title">padding-box:</span> 使用 padding box 作为引用框</p>
        <p><span class="title">content-box:</span> 使用 content box 作为引用框</p>
        <p><span class="title">fill-box:</span> 利用对象边界框作为引用框</p>
        <p><span class="title">stroke-box:</span> 使用笔触边界框（stroke bounding box）作为引用框</p>
        <p><span class="title">view-box:</span> 使用最近的 SVG 视口（viewport）作为引用框。如果viewBox 属性被指定来为元素创建 SVG 视口，引用框将会被定位在坐标系的原点，引用框位于由 viewBox 属性建立的坐标系的原点，引用框的尺寸用来设置 viewBox 属性的宽高值</p>
        <p><span class="title">none:</span> 不创建的剪切路径</p>
    </div>
    <span class="bigFont bold">用法</span>
    <p><span class="title bold">&lt;clip-source&gt;:</span><br>
    clip-path: url(#myPath)<br>
    &lt;svg&gt;
    &lt;clipPath id="myPath" clipPathUnits="objectBoundingBox"&gt;
        &lt;path d="M0.5,1
        C 0.5,1,0,0.7,0,0.3
        A 0.25,0.25,1,1,1,0.5,0.3
        A 0.25,0.25,1,1,1,1,0.3
        C 1,0.7,0.5,1,0.5,1 Z" /&gt;
    &lt;/clipPath&gt;
    &lt;/svg&gt;
    </p>
    <p>
    clip-path: path('M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z') //传入裁剪路径
    </p>
    <p>
    <span class="title bold">&lt;basic-shape&gt;:</span><br>
    <h3 class="h3">圆形</h3>
    clip-path: circle(25% at 25% 25%)  //（半径at圆心坐标）
    <h3 class="h3">椭圆形</h3>
    clip-path: ellipse(25% 50% at 50% 50%)  //（横轴半径、纵轴半径at圆心坐标）
    <h3 class="h3">内置矩形</h3>
    clip-path: inset(10px 20px 30px 10px round 20px 5px 50px 0)  //（上右下左的边距round上右下左圆角）
    <h3 class="h3">根据坐标点裁剪多边形</h3>
    clip-path: polygon(0% 100%, 50%  0%,100% 100%)  //（由三个坐标点绘制的三角形）
    clip-path: polygon(0% 0%, 0% 100%,100% 100%,100% 0%)  //（由四个坐标点绘制的正方形）
    clip-path: polygon(0% 38.31%, 50% 0%,100% 38.31%,80.86% 100%,19.14% 100%)  //（由五个坐标点绘制的五边形）
    </p>
    <p>
    <span class="title bold">&lt;geometry-box&gt;:</span><br>
    clip-path: border-box
    </p>
    </div>
        `
        let code = `
    <div className="example">
        <div className={style.box1}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
        <div className={style.box2}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
        <div className={style.box3}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
        <div className={style.box4}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
        <div className={style.box5}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
    </div>
    .box1{
        clip-path: circle(50% at 50% 50%);
        width: 200px;
        height: 200px;
    }
    .image{
        width: 100%;
        height: 100%;
    }
    .box2{
        width: 200px;
        height: 200px;
        clip-path: ellipse(50% 25% at 50% 50%);
    }
    .box3{
        width: 200px;
        height: 200px;
        clip-path: inset(10px 20px 30px 10px round 20px 5px 50px 0);
    }
    .box4{
        width: 200px;
        height: 200px;
        clip-path: polygon(0% 38.31%, 50% 0%,100% 38.31%,80.86% 100%,19.14% 100%);
    }
    .box5{
        width: 200px;
        height: 200px;
        margin: 10px;
        border: 4px solid #abc2e8;
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className={style.box1}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
                <div className={style.box2}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
                <div className={style.box3}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
                <div className={style.box4}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
                <div className={style.box5}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
            </div>
            <div className="code-box">
                <Card title="裁剪" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Rhombus