// @ts-nocheck
import { Form, Input, Radio, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {createUser} from '../../store/createUser'

const FormItem = Form.Item
const Option = Select.Option

export default function AddUser() {
  const [form] = Form.useForm()


  const dispatch = useDispatch()
  const id = Form.useWatch('id',form)
  const name = Form.useWatch('name',form)
  const sex = Form.useWatch('sex',form)
  const status = Form.useWatch('status',form)
  const galary = Form.useWatch('galary',form)
  const phone = Form.useWatch('phone',form)
  const address = Form.useWatch('address',form)
  useEffect(()=>{
    dispatch(createUser({
        id:id,
        name:name,
        sex:sex,
        status:status,
        galary:galary,
        phone:phone,
        address:address
      }))
    console.log('dispatch|createUser被修改')
  },[address, dispatch, galary, id, name, phone, sex, status])

  return (
    <div>
        <Form
        form={form}
        >
            <FormItem
            label='ID'
            name='id'
            rules={[
                {
                    required:true,
                    message:'请输入员工id'
                }
            ]}
            >
                <Input
                placeholder='请输入员工id'
                style={{width:215}}/>
            </FormItem>
            <FormItem
            label='姓名'
            name='name'
            rules={[
                {
                    required:true,
                    message:'请输入员工姓名'
                }
            ]}
            >
                <Input
                placeholder='请输入员工姓名'
                style={{width:200}}/>
            </FormItem>
            <FormItem
            label='性别'
            name='sex'
            rules={[
                {
                    required:true,
                    message:'请选择性别'
                }
            ]}
            >
                <Radio.Group>
                    <Radio value='1'>男</Radio>
                    <Radio value='2'>女</Radio>
                </Radio.Group>
            </FormItem>
            <FormItem
            label='员工状态'
            name='status'
            >
                <Select style={{width:180}}>
                    <Option value='1'>在职</Option>
                    <Option value='2'>事假</Option>
                    <Option value='3'>病假</Option>
                    <Option value='4'>产假</Option>
                    <Option value='5'>年假</Option>
                    <Option value='6'>离职</Option>
                </Select>
            </FormItem>
            <FormItem
            label='基本工资'
            name='galary'
            >
                <Input placeholder='请输入员工基本工资'
                style={{width:180}}/>
            </FormItem>
            <FormItem
            label='联系方式'
            name='phone'
            >
                <Input placeholder='请输入员工联系电话'
                style={{width:180}}/>
            </FormItem>
            <FormItem
            label='籍贯'
            name='address'
            >
                <Input placeholder='请输入员工籍贯'
                style={{width:210}}/>
            </FormItem>
        </Form>
    </div>
  )
}
