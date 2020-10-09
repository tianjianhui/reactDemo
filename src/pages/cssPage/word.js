import React, { Component } from 'react'
import Card from '../../components/card'
import word from '../style/word.module.css'
import { testData } from '@/services/test.js'
class Word extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('componentDidMount')
        testData().then(res => {
            console.log('res', res)
        })
    }
    render(){
        let intro = `<div>
        <div class="item"><span class="title">文字渐变：</span>利用css背景渐变，再利用背景裁剪露出文字轮廓背景，再将字体颜色设为透明，将背景色呈现出来</div>
        <div class="item"><span class="title">描边文字：</span>利用文本描边属性，目前仅支持谷歌内核浏览器</div>
        <div class="item"><span class="title">镂空文字：</span>将文字颜色设为透明，再加上描边</div>
        <div class="item"><span class="title">凸版字体：</span>没有模糊度的向下扩展的阴影，呈现凸的效果</div>
        <div class="item"><span class="title">发光字体：</span>添加两个往外扩的亮色阴影，模仿霓虹灯效果</div>
        </div>`
        let code = `
        <div className="example" style={{fontSize: '32px'}}>
            <div className={word.gradual}>这是渐变文字</div>
            <div className={word.contour}>这是描边文字</div>
            <div className={word.hollow}>这是镂空文字</div>
            <div className={word.box}>
                <span className={word.upShadow}>这是有阴影的字体</span><br/>
                <span className={word.downShadow}>这是有阴影的字体</span>
            </div>
            <div className={word.shiny}>Glow</div>
            <div className={word.shiny1}>Glow</div>
            <div className={word.shiny2}>Glow</div>
            <div className={word.bulge}>凸</div>
            <div className={word.retro}>RETRO</div>
        </div>
        .gradual{
            background: linear-gradient(to right,red, blue);     /*渐变背景*/
            background: -webkit-linear-gradient(to right,red, blue);
            background-clip: text;               /*背景裁剪*/
            -webkit-background-clip: text;
            color: transparent;     /*使文字颜色透明，露出背景色*/
            margin-bottom: 30px;
            display: inline-block;
        }
        .contour{
            -webkit-text-stroke: 1px gold;  /*文字描边*/
            margin-bottom: 30px;
        }
        .hollow{
            color: transparent;
            -webkit-text-stroke:1px #000;
        }
        .example{
            font-size: 32px;
        }
        .box{
            height: 200px;
            background-color: hsl(210,13%,60%);
            margin-top: 10px;
            text-align: center;
        }
        .upShadow{
            color: hsl(210,13%,30);
            text-shadow: 0 -2px 2px hsla(0,0%,100%,0.8);
        }
        .downShadow{
            color: hsl(210,13%,30);
            text-shadow: 0 2px 2px hsla(0,0%,100%,0.8);
        }
        .shiny{
            height: 200px;
            margin-top: 10px;
            line-height: 200px;
            text-align: center;
            font-size: 50px;
            background-color: #203;
            color: white;
            text-shadow: 0 0 0.1em, 0 0 0.3em; /* 添加两个往外扩的阴影，模仿霓虹灯效果 */
        }
        .shiny1{
            height: 200px;
            margin-top: 10px;
            line-height: 200px;
            text-align: center;
            font-size: 50px;
            background-color: #203;
            color: white;
            text-shadow: 0 1px hsl(0 0% 85%), /* hsl(色相，饱和度，亮度) */
                         0 2px hsl(0 0% 80%), /* 向下的阴影加上模糊度，呈现凸版字体发光效果*/
                         0 3px hsl(0 0% 75%),
                         0 4px hsl(0 0% 70%),
                         0 5px hsl(0 0% 65%),
                         0 0 0.1em,
                         0 0 0.3em;
        }
        .shiny2{
            height: 200px;
            margin-top: 10px;
            line-height: 200px;
            text-align: center;
            font-size: 50px;
            background-color: #203;
            color: transparent; /* 透明字体，只给阴影颜色呈现隐约的感觉*/
            text-shadow: 0 0 .1em white, 0 0 .3em white;
        }
        .bulge{
            height: 200px;
            margin-top: 10px;
            background-color: #58a;
            color: white;
            line-height: 200px;
            text-align: center;
            font-size: 50px;
            text-shadow: 0 1px hsl(0 0% 85%),  /* 没有模糊度的向下扩展的阴影，呈现凸的效果 */
                         0 2px hsl(0 0% 80%),
                         0 3px hsl(0 0% 75%),
                         0 4px hsl(0 0% 70%),
                         0 5px hsl(0 0% 65%),
                         0 5px 10px hsl(0 0% 0%);
        }
        .retro{
            height: 200px;
            margin-top: 10px;
            line-height: 200px;
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            background-color: hsl(0 50% 45%);
            color: white;
            text-shadow: 1px 1px black, /* 右下方的阴影扩展 */
                         2px 2px black,
                         3px 3px black,
                         4px 4px black,
                         5px 5px black,
                         6px 6px black,
                         7px 7px black,
                         8px 8px black,
                         9px 9px black,
                         10px 10px black;
        }
       `
        return(
            <div className="main-body">
                <div className="example" style={{fontSize: '32px'}}>
                    <div className={word.gradual}>这是渐变文字</div>
                    <div className={word.contour}>这是描边文字</div>
                    <div className={word.hollow}>这是镂空文字</div>
                    <div className={word.box}>
                        <span className={word.upShadow}>这是有阴影的字体</span><br/>
                        <span className={word.downShadow}>这是有阴影的字体</span>
                    </div>
                    <div className={word.shiny}>Glow</div>
                    <div className={word.shiny1}>Glow</div>
                    <div className={word.shiny2}>Glow</div>
                    <div className={word.bulge}>凸</div>
                    <div className={word.retro}>RETRO</div>
                </div>
                <div className="code-box">
                    <Card title="world" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
}
export default Word