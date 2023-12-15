import React, { useState } from 'react'
import { Row , Col, Layout } from 'antd'
// 全局样式
import './App.less'

import Naviator from './components/naviator'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import router from './router'
// 建立映射

export default function App() {
  const outlet = useRoutes(router)
  return (
    <div className='warpper'>
      <Row>
        <Col span={4}
        className='warpper__left'
        >
          <Naviator/>
        </Col>
        <Col span={20}
        className='warpper__right'
        >
          <Header/>
          <div className='warpper__right__content'>
          {outlet}
          </div>
          <Footer/>
        </Col>
      </Row>
    </div>
  )
}
