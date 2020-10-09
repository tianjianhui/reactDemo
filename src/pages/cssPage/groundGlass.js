import React from 'react'
import Card from '@/components/card.js'
import '@/pages/style/groundGlass.scss'
function groundGlass(){
    let intro = `<div>
    利用filter的blur实现毛玻璃效果<br>
    <span class="bigFont bold">语法</span><br>
    <div class="item"><span class="title">filter:</span> blur(value)</div>
    </div>
        `
        let code = `
    <div className="example">
        <div className="box">
            <div className="textBox">
                君子忧道不忧贫<br/>
                君子谋道不谋食 
            </div>
        </div>
    </div>
    .box{
        background: url('../../assets/img/test.png') 0 / cover fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
       background-size: cover;
       .textBox::before{
           position: absolute;
           left: 0;
           right: 0;
           top: 0;
           bottom: 0;
           content: '';
           margin: -30px;
           background-color: rgba(225,225,225,0.5);
           filter: blur(10px);
       }
        .textBox{
            position: relative;
            font-size: 30px;
            overflow: hidden;
        }
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className="box">
                    <div className="textBox">
                        君子忧道不忧贫<br/>
                        君子谋道不谋食 
                    </div>
                </div>
            </div>
            <div className="code-box">
                <Card title="毛玻璃" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default groundGlass