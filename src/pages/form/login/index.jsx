// @ts-nocheck
import { Button, Card, Form, Input, message } from 'antd'
import React from 'react'
import '../../index.less'
import { UserOutlined , LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigateTo = useNavigate()
  const onFinish = values =>{
    // console.log(values)
    const {username,password} = values
    if(username==='admin' && password==='123456'){
      navigateTo('/home')
      message.success('登录成功！')
    }else{
      navigateTo('/form/reg')
      // navigateTo('/form/login')
      message.error('登录失败！')
      // window.location.reload()
    }
  }

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
          <Form
          style={{width:350}}
          name='login'
          onFinish={onFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required:true,
                  message:'请输入用户名'
                },
                {
                  pattern:/\w+/,
                  message:'用户名不合法'
                }
              ]}
            >
              <Input
              prefix={<UserOutlined/>}
              placeholder='请输入用户名'></Input>
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required:true,
                  message:'请输入密码'
                },
                {
                  min:5,
                  max:12,
                  message:'密码长度为5-12'
                }
              ]}
            >
              <Input.Password
              prefix={<LockOutlined/>}
              placeholder='请输入密码'></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button
              type='primary'
              htmlType='submit'
              style={{width: '100%'}}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
  )
}
