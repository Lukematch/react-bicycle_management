//@ts-nocheck
import { Button, Card, Form, Select } from 'antd'
import React, { useState } from 'react'
// import './App.less'
const FormItem = Form.Item
const Option = Select.Option

export default function City() {
  const [form] = Form.useForm()

  const getData = (values)=>{
    console.log(values)
  }
  const onReset = ()=>{
    form.resetFields()
  }
  return (
    <>
        <Form
        layout='inline'
        onFinish={getData}
        form={form}
        >
          <FormItem label='城市' name='city'>
            <Select style={{'width':100}}>
              <Option value=''>全部</Option>
              <Option value='1'>北京市</Option>
              <Option value='2'>上海市</Option>
              <Option value='3'>深圳市</Option>
            </Select>
          </FormItem>
          <FormItem label='运营模式' name='op_mode'>
            <Select style={{'width':100}}>
              <Option value=''>全部</Option>
              <Option value='1'>自营</Option>
              <Option value='2'>加盟</Option>
            </Select>
          </FormItem>
          <FormItem label='授权状态' name='status'>
            <Select style={{'width':100}}>
              <Option value=''>全部</Option>
              <Option value='1'>已授权</Option>
              <Option value='2'>未授权</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type='primary' style={{
              margin:'0 20px'
            }}
            htmlType='submit'
            >
              查询
            </Button>
            <Button onClick={onReset}>重置</Button>
          </FormItem>
        </Form>
    </>
  )
}
