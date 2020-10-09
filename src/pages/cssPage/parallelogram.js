import React from 'react'
import Card from '../../components/card.js'
import style from '../style/parallelogram.module.css'
function Parallelogram () {
    let intro = `<div>把一个矩形进行拉伸可以得到一个平行四边形，但是矩形里的文字也会被拉伸，有两种方法可以得到正文字的平行四边形，一种是div里再套一个div外面的正向拉伸，里面的反向拉伸，另外一种是利用伪元素，仅仅拉伸伪元素</div>
        <br>如果你要做成可点击的平行四边形的话，我建议还是用第一种方法，最里面的div尽可能小包住字体即可，因为用第二种方法会使可点击范围变大，这是因为拉伸的只是伪元素，母元素还是正矩形，这就是说伪元素外母元素里的空隙也是点击范围
        `
        let code = `
    <div className="example">
        <div className={style.box}>test</div>
    </div>
    .box{
        position: relative;
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        z-index: 0;
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin-left: 40px;
        cursor: pointer;
    }
    .box::before{
        content: '';
        background: #58a;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transform: skew(-45deg);
        z-index: -1;  // 为了使伪元素在字体下面
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className={style.box}>test</div>
            </div>
            <div className="code-box">
                <Card title="平行四边形" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Parallelogram