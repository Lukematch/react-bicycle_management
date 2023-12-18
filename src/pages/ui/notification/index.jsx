import { Button, Card, notification } from 'antd'
import React from 'react'
import '../../index.less'
// import './App.less'
// @ts-ignore

export default function Notification() {

  const openNotification = (type,direction)=>{
    if(direction){
      notification.config({
        placement:direction
      })
    }

    notification[type]({
      message:'加快项目完成速度！',
      description:'甲方在催了...'
    })
  }


  return (
      <div className="warpper">
          <Card title='通知提醒框' className='card-warp'>
            <Button type='primary' onClick={()=>openNotification('info')}>接收通知info</Button>
            <Button type='primary' onClick={()=>openNotification('success')}>接收通知success</Button>
            <Button type='primary' onClick={()=>openNotification('warning')}>接收通知warning</Button>
            <Button type='primary' onClick={()=>openNotification('error')}>接收通知error</Button>
          </Card>
          <Card title='通知提醒框' className='card-warp'>
            <Button type='primary' onClick={()=>openNotification('warning','bottomRight')}>接收通知info</Button>
            <Button type='primary' onClick={()=>openNotification('warning','bottomLeft')}>接收通知info</Button>
          </Card>
      </div>
  )
}
