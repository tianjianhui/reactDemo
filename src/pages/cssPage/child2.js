import React from 'react'
import myEventEmitter from '../../util/index.js'
const handler = function(params){
    console.log('tag', params)
}
function Child2(){
    // const globalEvent = window.myEvent
    // console.log('globalEvent', globalEvent)
    myEventEmitter.on('onTest',handler)
    // const jianting = () => {
    //     const globalEvent = window.myEvent
    //     console.log('globalEvent', globalEvent)
    //     globalEvent.on('onTest',handler)
    // }
    return(
        <div>Child2</div>
    )
}
export default Child2