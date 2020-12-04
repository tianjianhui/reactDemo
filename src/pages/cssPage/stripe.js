import React, { Component } from 'react'
import Card from '../../components/card.js'
import stripe from '../style/stripe.module.css'
class Stripe extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let intro = `<div>
        <div>线性渐变<br>background: linear-gradient(color1,color2) //默认从上到下 0%-100%线性渐变</div>
        <div>background: linear-gradient(color1 a%,color2 b%) //0%-a% color1;a%-b% color1-color2线性渐变;b%-100% color2<br>要实现条纹就要去掉渐变，去掉渐变，就是让渐变区为0</div>
        <div>background: linear-gradient(color1 50%,color2 50%);background-size: 100% 30px; //0%-50% color1;50%-100% color2</div>
        <div>background: linear-gradient(color1 50%,color2 0);background-size: 100% 30px; //效果同上，后面颜色的起始设为0，将会默认从上一个颜色的结束处开始</div>
        <div>三种渐变色<br>background: linear-gradient(color1 33.3%,color2 0,color2 66.6%,color3 0);background-size: 100% 30px;</div>
        <div>垂直条纹<br>background: linear-gradient(90deg,color1 50%,color2 0);background-size: 30px 100%; // 从左到右渐变就好了，但是background在高度上要为100%，宽度上若条纹宽15，双色就一共30</div>
        <div>那如果要实现斜条纹怎么办呢？这种算background-size的方法很明显太不讨好了</div>
        <div>repeating-linear-gradient重复渐变就可以迎刃而解了</div>
        <div>background: repeating-linear-gradient(45deg,color1 0,color1 15px,color2 0,color2 30px);  //0-15px color1 15px-30px color2 然后重复直到铺满整个背景</div>
        </div>`
        let code = `
    <div className="example">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
    </div>
    <span>水平条纹</span>
    .box1{
        background: repeating-linear-gradient(#32ff6a 0,#32ff6a 10px,#a8ff3e 0,#a8ff3e 20px);
    }
    <span>双色斜条纹</span>
    .box2{
        background: repeating-linear-gradient(45deg,#89a3b2 0,#89a3b2 10px,#b2d3be 0,#b2d3be 20px);
    }
    <span>三色斜条纹</span>
    .box3{
        background: repeating-linear-gradient(45deg,#12d3cf 0,#12d3cf 10px,#67eaca 0,#67eaca 20px,#b0f4e6 0,#b0f4e6 30px);
    }
        `

        return(
            <div className="main-body">
                <div className="example">
                    <div className={stripe.box1}></div>
                    <div className={stripe.box2}></div>
                    <div className={stripe.box3}></div>
                    <div className={stripe.wrapBar}>
                        <div className={stripe.progressBar} style={{width: '80%'}}>
                            <div className={[stripe.contentBar, stripe.activeBar].join(' ')}>
                                <div className={stripe.colorBar}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="code-box">
                    <Card title="条纹背景" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
}
export default Stripe