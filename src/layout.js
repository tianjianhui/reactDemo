import React, { Component } from 'react'
import Router from './router/Router'
import { Link, HashRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class layout extends Component {
    render(){
        return (
            <HashRouter>
                <Layout>
                <Header>
                    <div className="logo"></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/home">home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about">about</Link></Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff', height: 'calc(100vh - 64px)' }}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                <span>
                                    <Icon type="chrome" />
                                    css
                                </span>
                                }
                            >
                                <Menu.Item key="1"><Link to='/css/image'>Image</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/css/reflect'>Reflect</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/css/word'>Word</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/css/stripe'>Stripe</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/css/grid'>Grid</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/css/wavePoint'>WavePoint</Link></Menu.Item>
                                <Menu.Item key="7"><Link to='/css/chessboard'>Chessboard</Link></Menu.Item>
                                <Menu.Item key="8"><Link to='/css/imgBorder'>ImgBorder</Link></Menu.Item>
                                <Menu.Item key="9"><Link to='/css/borderRadius'>BorderRadius</Link></Menu.Item>
                                <Menu.Item key="10"><Link to='/css/parallelogram'>Parallelogram</Link></Menu.Item>
                                <Menu.Item key="11"><Link to='/css/rhombus'>Rhombus</Link></Menu.Item>
                                <Menu.Item key="12"><Link to='/css/clipPath'>ClipPath</Link></Menu.Item>
                                <Menu.Item key="13"><Link to='/css/cornerCut'>CornerCut</Link></Menu.Item>
                                <Menu.Item key="14"><Link to='/css/tab'>Tab</Link></Menu.Item>
                                <Menu.Item key="15"><Link to='/css/shadow'>Shadow</Link></Menu.Item>
                                <Menu.Item key="16"><Link to='/css/groundGlass'>GroundGlass</Link></Menu.Item>
                                <Menu.Item key="17"><Link to='/css/typewriting'>Typewriting</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                <span>
                                    <Icon type="laptop" />
                                    subnav 2
                                </span>
                                }
                            >
                                <Menu.Item key="8">option5</Menu.Item>
                                <Menu.Item key="9">option6</Menu.Item>
                                <Menu.Item key="10">option7</Menu.Item>
                                <Menu.Item key="11">option8</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            maxHeight: 'calc(100vh - 64px)',
                            overflowY: 'auto'
                        }}
                    >
                    <Router></Router>  
                    </Content>
                </Layout>
            </Layout>
        </HashRouter>
        )
    }
}