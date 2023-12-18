import { Button, Card, message } from 'antd'
import React from 'react'
import '../../index.less'
// import './App.less'
// @ts-ignore

export default function Messages() {
  const showMessage = (type)=>{
    message[type]('请加快开发进度！')
  }

  return (
      <div className="warpper">
        <Card title='全局提示框' className='card-warp'>
          <Button type='primary' onClick={()=>{showMessage('warning')}}>获取信息warning</Button>
          <Button type='primary' onClick={()=>{showMessage('error')}}>获取信息error</Button>
          <Button type='primary' onClick={()=>{showMessage('success')}}>获取信息success</Button>
          <Button type='primary' onClick={()=>{showMessage('loading')}}>获取信息loading</Button>
        </Card>
      </div>
  )
}
