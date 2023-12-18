// @ts-nocheck
import { Alert, Button, Card, Space, Spin, Switch } from 'antd'
import React, { useState } from 'react'
// import './App.less'
import '../../index.less'

export default function Loading() {
  const [loading,setLoading] = useState(true)
  const changeLoading = ()=>{
    setLoading(!loading)
  }
  return (
      <div className="warpper">
        <Card title='Spin的使用' className='card-warp'>
          <Space>
            <Spin
            size='small'
            spinning={loading}
            >
              {/* 加载中 */}
            </Spin>
            <Spin
            size='default'
            spinning={loading}
            >
              {/* 加载中 */}
            </Spin>
            <Spin
            size='large'
            spinning={loading}
            >
              {/* 加载中 */}
            </Spin>
            <Button onClick={changeLoading}>
              改变状态
            </Button>
          </Space>
        </Card>
        <Card title='Spin-内容遮罩' className='card-warp'>
        <Spin spinning={loading}>
          <Alert
            message="我是谁"
            description="Lukematch"
            type="success"
            showIcon
          />
          </Spin>
          <div style={{marginTop: 16}}>
            Loading state：
            <Switch checked={loading} onChange={changeLoading} />
          </div>
        </Card>


      </div>
  )
}
