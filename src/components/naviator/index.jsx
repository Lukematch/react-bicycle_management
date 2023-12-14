import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Menu } from 'antd'
import './index.less'
import { request } from '../../utils/request'

export default function Naviator() {
  const [menu,setMenu] = useState([])

  const getMenu = async ()=>{
    try{
      const data = await request('/menu')
      setMenu(data.menu)
      console.log(data.menu);
    } catch(error){
      throw new Error(error)
    }

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
      mode="inline"
      />
    </>
  )
}
