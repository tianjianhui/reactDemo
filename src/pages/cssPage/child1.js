import React from 'react'
import myEventEmitter from '../../util/index.js'
function Child1(){
    const gotoEmit = ()=>{
        // const globalEvent = window.myEvent
        // console.log('yes')
        myEventEmitter.emit('onTest','ok')
    }
    return(
        <div onClick={gotoEmit}>Child1</div>
    )
}
export default Child1