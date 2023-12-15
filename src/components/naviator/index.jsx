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
  // 初始化首选项
  let firstOpenKey = ""
  // 声明函数获取当前路由的路径
  function findKey(obj){
    return obj.key === currentRoute.pathname
  }
  // 遍历菜单列表，找到带children属性的项
  // 将带子项的菜单项备份为首选项
  for(let i = 0;i<menu.length;i++){
    // 判断是否能找到children中的path
    if(menu[i]['children'] && menu[i]['children'].length>=1 && menu[i]['children'].find(findKey)){
        firstOpenKey=menu[i].key
        // console.log(menu[i].key)
        break;
    }
  }
  // 设置打开项
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  // 生成跳转方法，设置菜单项点击跳转
  const useNavigateTo = useNavigate()
  const menuClick = (e)=>{
    // console.log(e.key)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useNavigateTo(e.key)
  }
  // 对上一项展开的菜单进行回收
  const handleOpenChange = (key)=>{
    setOpenKeys([key[key.length
    -1]])
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
      onClick={menuClick}
      // 某项菜单展开回收的事件
      onOpenChange={handleOpenChange}
      // 当前展开项的key输出
      openKeys={openKeys}
      />
    </>
  )
}
