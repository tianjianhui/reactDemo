import React, { Component } from 'react'
import Card from '../../components/card'
import grid from '../style/grid.module.css'
class Grid extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let intro = `<div>横竖条纹组合</div>`;
        let code = `
    <div className="example">
        <div className={grid.box1}></div>
        <div className={grid.box2}></div>
        <div className={grid.box3}></div>
    </div>
    .box1{
        height: 200px;
        background-color: #fcf9ec;
        background-image: linear-gradient(#b0f4e6 50%,transparent 0),linear-gradient(90deg,#67eaca 50%,transparent 0);
        background-size: 30px 30px;
        margin-bottom: 20px;
    }
    .box2{
        height: 200px;
        background-color: #4592af;
        /* background-image: linear-gradient(white 1px,transparent 0),linear-gradient(90deg,white 1px,transparent 0); */
        background-image: repeating-linear-gradient(white 0,white 1px,transparent 0,transparent 30px),
        repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 30px);
        /* background-size: 30px 30px; */
    }
    .box3{
        height: 200px;
        background-color: #5ca0d3;
        background-image: repeating-linear-gradient(rgba(0,0,255,0.3) 0,rgba(0,0,255,0.3) 1px,transparent 0,transparent 30px),
                          repeating-linear-gradient(90deg,rgba(0,0,255,0.3) 0,rgba(0,0,255,0.3) 1px,transparent 0,transparent 30px),
                          repeating-linear-gradient(white 0,white 2px,transparent 0,transparent 150px),
                          repeating-linear-gradient(90deg,white 0,white 2px,transparent 0,transparent 150px);
    }
        `
        return(
            <div className="main-body">
                <div className="example">
                    <div className={grid.box1}></div>
                    <div className={grid.box2}></div>
                    <div className={grid.box3}></div>
                </div>
                <div className="code-box">
                    <Card title="格子" intro={intro} code={code}></Card>
                </div>
            </div>
        )
    }
} 
export default Grid