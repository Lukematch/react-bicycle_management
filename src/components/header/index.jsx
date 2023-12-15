import { Breadcrumb, Col, Row } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import './index.less'
// 引入时间中文包
import 'moment/locale/zh-cn'
import { Link, useLocation } from 'react-router-dom'
import { request } from '../../utils/request'
import routes from '../../router'
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
  // const [title,setTitle] = useState('首页')
  const [time,setTime] = useState(getTime())
  const [weather,setWeather] = useState()
  const [area,setArea] = useState()
  const [menuList,setMenuList] = useState([])
   // 存放路由和标题对应信息
//  const [breadcrumbNameMap, setbreadcrumbNameMap] = useState([])

// 获取菜单列表
 const getMenu = async ()=>{
  try{
    const data = await request('/menu')
    setMenuList(data.menu)
    // console.log(data.menu[0]);
  } catch(error){
    throw new Error(error)
  }
}
// 声明路由匹配路径
const breadcrumbNameMap = {
  '/home': '首页',
  '/ui':'UI',
  '/ui/buttons':'按钮',
  '/ui/modals':'弹窗',
  '/ui/loadings':'Loading',
  '/ui/notification':'通知提醒',
  '/ui/messages':'全局Message',
  '/ui/tabs':'Tab页签',
  '/ui/gallery':'图片画廊',
  '/ui/carousel':'轮播图',
  '/form':'表单',
  '/form/login':'登录',
  '/form/reg':'注册',
  '/table':'表格',
  '/table/basic':'基础表格',
  '/table/high':'高级表格',
  '/rich':'富文本',
  '/city':'城市管理',
  '/detail':'订单管理',
  '/user':'员工管理',
  '/bikeMap':'车辆地图',
  '/charts':'图标',
  '/charts/bar':'柱状图',
  '/charts/pie':'饼图',
  '/charts/line':'折线图',
  '/permission':'权限设置',
}
// 获取当前位置，生成面包屑内容
const location = useLocation();
const pathSnippets = location.pathname.split('/').filter((i) => i);
const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  // console.log(url);
  return (
    <Breadcrumb.Item key={url}>
      <Link to={url}>{breadcrumbNameMap[url]}</Link>
    </Breadcrumb.Item>
  )
})
// 拼接默认Home和面包屑列表
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

// 获取时间信息
  useEffect(()=>{
    const timer = setInterval(()=>{
      const time = getTime()
      setTime(time)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[time])
// 获取天气信息
  useEffect(()=>{
    getWeather()
  },[])

  return (
    <div className='warpper__right__header'>
      <Row className='warpper__right__top'>
        <Col span="4" className='warpper__right__top__time'>
          <h4 className='weather__date'>{time}</h4>
        </Col>
        <Col span="20" className='warpper__right__top__text'>
          <span>欢迎,{name}</span>
          <a href='/#'>退出登录</a>
        </Col>
      </Row>
      <Row className='warpper__right__breadcrumb'>
        <Col span="4" className='breadcrumb__title'>
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </Col>
        <Col span="20" className='warpper__right__weather'>
          <span className='weather__area'>{area}</span>
          <span className='weather'>天气：{weather}</span>
        </Col>
      </Row>
    </div>
  )
}
