import { Button, Card, Form, Input } from 'antd'
import React from 'react'
import '../../index.less'
import { UserOutlined , LockOutlined } from '@ant-design/icons'

export default function Login() {
  return (
      <div className="warpper">
        <Card title='行内表单' className='card-warp'>
          <Form layout='inline'>
            <Form.Item
              name='username'
              rules={[
                {
                  required:true,
                  message:'请输入用户名'
                }
              ]}
            >
              <Input placeholder='请输入用户名'></Input>
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required:true,
                  message:'请输入密码'
                }
              ]}
            >
              <Input.Password  placeholder='请输入密码'></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>提交</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title='水平表单' className='card-warp'
        style={{marginTop:10}}>
            <Form style={{width:350}}>
            <Form.Item
              name='username'
              rules={[
                {
                  required:true,
                  message:'请输入用户名'
                }
              ]}
            >
              <Input prefix={<UserOutlined/>} placeholder='请输入用户名'></Input>
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required:true,
                  message:'请输入密码'
                }
              ]}
            >
              <Input.Password prefix={<LockOutlined/>} placeholder='请输入密码'></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>提交</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
  )
}
