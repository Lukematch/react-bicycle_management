// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import './index.less'
import { request } from '../../utils/request'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Naviator() {
  // 声明获取菜单列表
  const [menu,setMenu] = useState([])
  const getMenu = async ()=>{
    try{
      const data = await request('/menu')
      setMenu(data.menu)
      console.log(data.menu[0]);
    } catch(error){
      throw new Error(error)
    }
  }
  // 获取当前路由
  const currentRoute = useLocation()
  const useNavigateTo = useNavigate()
  const menuClick = (e)=>{
    // console.log(e.key)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useNavigateTo(e.key)
  }
  useEffect(()=>{
    getMenu()
  },[])

  return (
    <>
    <div className='warpper__left__logo'>
      <img src='https://www.svgrepo.com/download/107532/bicycle.svg' alt=''/>
      <h1>自行车管理系统</h1>
    </div>
      <Menu
      items={menu}
      theme='dark'
      // 默认选中
      defaultSelectedKeys={['1']}
      // 默认展开
      // defaultOpenKeys={['sub1']}
      // mode="inline"
      onClick={menuClick}
      />
    </>
  )
}
