import React from 'react'
import Card from '@/components/card.js'
import '@/pages/style/typewriting.scss'
function Typewriting(){
    let intro = `
        利用css动画，steps步进器
        `
        let code = `
    <div className="example">
        <div className="typingText">css is awesome!</div>
    </>
    @keyframes typing{ /* 宽度变大的动画 */
        from{
            width: 0;
        }
    }
    @keyframes caret{ /*右边框闪烁，模拟光标*/
        50%{
            border-color: currentColor;
        }
    }
    .typingText{
        width: 13ch; /* ch是0等宽度的单位 */
        font-size: 30px;
        font-weight: bold;
        color: #4cd3c2;
        overflow: hidden;
        white-space: nowrap;
        border-right: .05em solid transparent;
        animation: typing 6s steps(15),
                   caret 1s steps(1) infinite;
    }
       `
    return(
        <div className="main-body">
            <div className="example">
                <div className="typingText">css is awesome!</div>
            </div>
            <div className="code-box">
                <Card title="打字动画" intro={intro} code={code}></Card>
            </div>
        </div>
    )
}
export default Typewriting