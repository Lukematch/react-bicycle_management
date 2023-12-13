import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Menu } from 'antd'
import './index.less'

export default function Naviator() {
  const [menu,setMenu] = useState([])

  const getMenu = async ()=>{
    try{
      const {data} = await axios.get(
        'https://www.fastmock.site/mock/2728fdedd7e9063e308598df4c68fe46/_api/menu'
      )
      setMenu(data.menu)
      console.log(menu);
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
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      />
    </>
  )
}
