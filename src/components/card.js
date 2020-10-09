import React, { Component, useState } from 'react'
import { Icon } from 'antd'
import './style/card.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai.css';
// import PropTypes from 'prop-types';
// class Card extends Component{
//     constructor(props){
//         super(props)
//         // console.log('props', props)
//         this.state = {
//             text: '显示代码',
//             type: "caret-down",
//             height: 0
//         }
//     }
//     showCode(){
//         let type = this.state.type
//         this.setState({
//             text: type === 'caret-down' ? '隐藏代码' : '显示代码',
//             type: type === 'caret-down' ? 'caret-up' : 'caret-down',
//             height: type === 'caret-down' ? 'auto' : '0px'
//         })
//     }
//     render(){
//         marked.setOptions({  // 语法高亮
//             renderer: new marked.Renderer(),
//             gfm: true,
//             pedantic: false,
//             sanitize: false,
//             tables: true,
//             breaks: true,
//             smartLists: true,
//             smartypants: true,
//             highlight: function (code) {
//                     return hljs.highlightAuto(code).value;
//             }
//           }); 
//           let html = marked(this.props.code)
//         return(
//             <div className="card-box">
//                 <div className="card-title" style={{backgroundColor: this.props.headerBackground}}>{this.props.title}</div>
//                 <div className="card-body" style={{backgroundColor: this.props.bodyBackground}}>
//                     <div className="body-intro" dangerouslySetInnerHTML={{__html:this.props.intro}}></div>
//                     <div className="fold-box" onClick={this.showCode.bind(this)}><Icon type={this.state.type} theme="filled" /> {this.state.text}</div>
//                     <div className="body-code" style={{height: this.state.height, backgroundColor: this.props.codeBackground}} dangerouslySetInnerHTML={{__html:html}}></div>
//                 </div>
//             </div>
//         )
//     }
// }
// // 默认属性
// Card.defaultProps={
//     title: "title",
//     intro: "introduce",
//     code: "<>code</>",
//     headerBackground: "#e5e4cc",
//     bodyBackground: "#698474",
//     codeBackground: '#1a2849'
// }
// // 设置类型
// Card.propTypes={
//     title: PropTypes.string,  
//     intro: PropTypes.string,
//     code: PropTypes.string,
//     headerBackground: PropTypes.string,
//     bodyBackground: PropTypes.string,
//     codeBackground: PropTypes.string
// }

// 改造为React Hooks
const Card = function({title, intro, code, headerBackground='#e5e4cc', bodyBackground='#698474', codeBackground='#1a2849'}){
    marked.setOptions({  // 语法高亮
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
      }); 
    let html = marked(code)
    const [obj, changeObj] = useState({
        type: 'caret-down',
        text: '显示代码',
        height: '0px'
    })
    const showCode = () => {
        if(obj.type === 'caret-down'){
            changeObj({
                type: 'caret-up',
                text: '隐藏代码',
                height: 'auto'
            })
        }else{
            changeObj({
                type: 'caret-down',
                text: '显示代码',
                height: '0px'
            })
        }
    }
    return(
        <div className="card-box">
            <div className="card-title" style={{backgroundColor: headerBackground}}>{title}</div>
            <div className="card-body" style={{backgroundColor: bodyBackground}}>
                <div className="body-intro" dangerouslySetInnerHTML={{__html:intro}}></div>
                <div className="fold-box" onClick={showCode}><Icon type={obj.type} theme="filled" /> {obj.text}</div>
                <div className="body-code" style={{height: obj.height, backgroundColor: codeBackground}} dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
        </div>
    )
}
export default Card
