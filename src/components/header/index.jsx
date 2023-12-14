import { Col, Row } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.less'
// 引入时间中文包
import 'moment/locale/zh-cn'

// 设置中文
moment.locale('zh-cn')
export default function Header() {
  const getTime = ()=>{
    return moment().format('dddd a h:mm:ss')
  }
  const getWeather = async()=>{
    await axios({
      url:'https://hmajax.itheima.net/api/weather',
      params:{
        // city:110000
        city:430100
      }
    }).then(res=>{
      const {data} = res.data
      // console.log(data);
      setWeather(data.weather)
      setArea(data.area)
    })
  }
  const [name,setName] = useState('管理员')
  const [time,setTime] = useState(getTime())
  const [weather,setWeather] = useState()
  const [area,setArea] = useState()

  useEffect(()=>{
    const timer = setInterval(()=>{
      const time = getTime()
      setTime(time)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[time])

  useEffect(()=>{
    getWeather()
  },[])

  return (
    <div className='warpper__right__header'>
      <Row className='warpper__right__top'>
        <Col span='24'>
          <span>欢迎,{name}</span>
          <a href='/#'>退出登录</a>
        </Col>
      </Row>
      <Row className='warpper__right__breadcrumb'>
        <Col span="4" className='breadcrumb__title'>首页</Col>
        <Col span="20" className='warpper__right__weather'>
          <span className='weather__date'>{time}</span>
          <span className='weather__area'>{area}</span>
          <span className='weather'>天气：{weather}</span>
        </Col>
      </Row>
    </div>
  )
}
