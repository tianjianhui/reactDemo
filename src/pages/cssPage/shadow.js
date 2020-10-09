import React from 'react'
import Card from '@/components/card.js'
import '@/pages/style/shadow.scss'
function Shadow(){
    let intro = `<div>
    利用filter的drop-shadow实现不规则图形的阴影<br>
    <span class="bigFont bold">语法</span><br>
    <div class="item"><span class="title">filter:</span> drop-shadow(h-shadow v-shadow blur spread color)</div>
    <div class="item"><span class="title">h-shadow:</span> 设定水平方向距离,负值会使阴影出现在元素左边</div>
    <div class="item"><span class="title">v-shadow:</span> 设定垂直距离,负值会使阴影出现在元素上方</div>
    <div class="item"><span class="title">blur:</span> 值越大，越模糊，则阴影会变得更大更淡,不允许负值</div>
    <div class="item"><span class="title">spread:</span> Webkit, 以及一些其他浏览器 不支持这个值，如果加了也不会渲染</div>
    <div class="item"><span class="title">color:</span> 阴影颜色</div>
    <div class="item"><span class="warning">注意：</span>它也会给文字加阴影</div>
    </div>
        `
        let code = `
    <div className="example">
        <div className="box1"></div>
        <div className="box2"></div>
    </div>
    .box1{
        height: 200px;
        background: linear-gradient(-45deg,transparent 15px,#58a 0);
        margin-bottom: 50px;
        filter: drop-shadow(10px 10px 10px #ccc); // 分别水平阴影的位置（允许负值），垂直阴影的位置（允许负值），模糊距离，阴影的颜色
    }
    .box2{
        height: 100px;
        background: radial-gradient(circle at 0 50%, transparent 40px, #58a 0);
        filter: drop-shadow(0px 0px 10px #000);
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className="box1"></div>
                <div className="box2"></div>
            </div>
            <div className="code-box">
                <Card title="不规则图形阴影" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Shadow