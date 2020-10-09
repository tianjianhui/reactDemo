import React from 'react'
import style from '../style/rhombus.module.css'
import Card from '../../components/card.js'
function Rhombus(){
    let intro = `<div>
    <span>第一幅将外层div正向旋转45度，然后将里面的图片逆向旋转45度，这时要使图片铺满，因为最大宽度已经变成斜边了，至少要放大1.42倍</span><br>
    <span>还可用clip-path进行裁剪</span>
    </div>
        `
        let code = `
    <div className="example">
        <div className={style.box}>
            <img className={style.image} src={require('../../assets/img/test.png')}/>
        </div>
    </div>
    .box{
        width: 200px;
        height: 200px;
        margin-left: 50px;
        margin-top: 50px;
        transform: rotate(45deg);
        overflow: hidden;
    }
    .image{
        max-width: 100%;
        transform: rotate(-45deg) scale(2);
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className={style.box}>
                    <img className={style.image} src={require('../../assets/img/test.png')}/>
                </div>
            </div>
            <div className="code-box">
                <Card title="菱形" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Rhombus