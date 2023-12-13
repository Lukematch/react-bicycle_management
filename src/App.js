import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

// 全局样式
import './App.less'
// 局部样式=>css模块化
import style from './App.module.css'

function Son(){
    return(
        <div className={style.box}>
            Son组件
        </div>
    )
}

export default function App() {
  return (
    <div className='div1'>
        App<br></br>
        <Button type='primary'>按钮1</Button>
        <Button type='link'>按钮2</Button>
        <Button type='primary' icon={<DownloadOutlined/>} >Download</Button>
        <br></br>
        <Son/>
    </div>
  )
}
