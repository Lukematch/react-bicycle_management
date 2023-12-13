import React from 'react'
import { Row , Col } from 'antd'

// 全局样式
import './App.less'
import Header from './components/header'
import Footer from './components/footer'
import Naviator from './components/naviator'
import Menu from './components/naviator/menu'
import Home from './components/pages/home'


export default function App() {
  return (
    <div className='warpper'>
        <Row>
            <Col span="5" className='warpper__left'>
                <Naviator/>
            </Col>
            <Col
            span="19"
            className='warpper__right'
            >
                <Header/>
                <Row className='warpper__right__content'>
                  <Home/>
                </Row>
                <Footer/>
            </Col>
        </Row>
    </div>
  )
}
