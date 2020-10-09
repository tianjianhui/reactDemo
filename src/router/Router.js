import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Image from '../pages/cssPage/image'
import Word from '../pages/cssPage/word'
import Reflect from '../pages/cssPage/reflect'
import Stripe from '../pages/cssPage/stripe'
import Grid from '../pages/cssPage/grid'
import WavePoint from '../pages/cssPage/wavePoint'
import Chessboard from '../pages/cssPage/chessboard'
import ImgBorder from '../pages/cssPage/imgBorder'
import BorderRadius from '../pages/cssPage/borderRadius'
import Parallelogram from '../pages/cssPage/parallelogram'
import Rhombus from '../pages/cssPage/rhombus.js'
import ClipPath from '../pages/cssPage/clipPath.js'
import CornerCut from '../pages/cssPage/cornerCut.js'
import Tab from '../pages/cssPage/tab.js'
import Shadow from '../pages/cssPage/shadow.js'
import GroundGlass from '@/pages/cssPage/groundGlass.js'
import Typewriting from '@/pages/cssPage/typewriting.js'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
function router(){
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route> 
            <Route path="/css/image" component={Image}></Route>
            <Route path="/css/reflect" component={Reflect}></Route>
            <Route path="/css/word" component={Word}></Route>
            <Route path="/css/stripe" component={Stripe}></Route>
            <Route path="/css/grid" component={Grid}></Route>
            <Route path="/css/wavePoint" component={WavePoint}></Route>
            <Route path="/css/chessboard" component={Chessboard}></Route>
            <Route path="/css/imgBorder" component={ImgBorder}></Route>
            <Route path="/css/borderRadius" component={BorderRadius}></Route>
            <Route path="/css/parallelogram" component={Parallelogram}></Route>
            <Route path="/css/rhombus" component={Rhombus}></Route>
            <Route path="/css/clipPath" component={ClipPath}></Route>
            <Route path="/css/cornerCut" component={CornerCut}></Route>
            <Route path="/css/tab" component={Tab}></Route>
            <Route path="/css/shadow" component={Shadow}></Route>
            <Route path="/css/groundGlass" component={GroundGlass}></Route>
            <Route path="/css/typewriting" component={Typewriting}></Route>
        </Switch>
    )
}
export default router