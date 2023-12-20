/* eslint-disable array-callback-return */
// @ts-nocheck
import { LockOutlined, MailOutlined, UnlockOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import React, { useEffect, useState } from 'react'
import { request } from '../../../utils/request'


export default function Reg() {
  const [cityList,setCityList] = useState([])
  const [province,setProvince] = useState([])
  const [selectedCitys,setSelectedCitys]  = useState([])
  // 省份下拉同步更新城市-省市联动
  const [secondCity, setSecondCity] = useState()

  // 获取到全国城市列表
  const getCitys = async ()=>{
    try{
      const citys = await request('/citys')
      // setCityLoading(false)
      setCityList(citys.provinces)
      console.log(citys.provinces);
      }catch(error){
        throw new Error(error)
      }
  }
  // 获取到全国省份列表
  const getProvinces = async ()=>{
    try{
      const data = await request('/provinces')
      setProvince(data.provinces)
      console.log(data)
      }catch(error){
        throw new Error(error)
      }
  }
  // 执行获取省份、城市方法
  useEffect(()=>{
    getProvinces()
    getCitys()
  },[])
  useEffect(()=>{
    // setSelectedCitys([])
  },[selectedCitys])

  // 获取选中省份后对应的城市列表
  // 通过遍历城市列表的provinceName与选中的省份值进行比较，匹配对应的城市列表
  const getSelected =(value)=>{
    // setSelectedCitys([{value:'城市'}])
    cityList.map((item)=>{
      if(item.provinceName === value){
        setSelectedCitys(item.citys)
        setSecondCity(item.citys[0].value)
        console.log(item.citys[0].value);
        // console.log(selectedCitys)
      }
      // console.log(value)
      // console.log(item.provinceName);
    })
  }
  const onSecondCityChange = (value)=>{
    setSecondCity(value)
  }


  const register =(value)=>{
    console.log(value);
  }

  return (
      <div className="warpper">
         <Card title='注册表单' className='card-warp'>
          <Form
          name='register'
          onFinish={register}
          >
            <FormItem
            label='账号'
            name='username'
            rules={[
              {
                required:true,
                message:'请输入你的用户名'
              },
              {
                pattern:/\w+/,
                message:'请输入正确的用户名'
              }
            ]}
            >
              <Input
              prefix={<UserAddOutlined/>}
              placeholder='请输入你的用户名'/>
            </FormItem>
            <FormItem
            label='邮箱'
            name='email'
            rules={[
              {
                required:true,
                message:'请输入你的电子邮箱'
              },
              {
                type:'email',
                message:'请输入正确的邮箱'
              }
            ]}
            >
              <Input
              prefix={<MailOutlined/>}
              placeholder='请输入你的邮箱'/>
            </FormItem>
            <FormItem
            label='密码'
            name='password'
            rules={[
              {
                required:true,
                message:'请输入你的密码'
              },
              {
                min:5,
                max:12,
                message:'密码长度为5-12位'
              }
            ]}
            >
              <Input.Password
              prefix={<LockOutlined/>}
              placeholder='请输入密码'/>
            </FormItem>
            <FormItem
            label='密码'
            name='rePossword'
            dependencies={['password']}
            rules={[
              {
                required:true,
                // message:'请再次输入你的密码'
              },
              // 通过getFieldValue获取表单数据
              // 通过validator对rePossword的数据进行校验
              ({ getFieldValue })=>({
                validator(rule,value){
                  if(getFieldValue('password') === value){
                    return Promise.resolve()
                  }
                  return Promise.reject('两次输入的密码不一致')
                }
              })
            ]}
            >
              <Input.Password
              prefix={<UnlockOutlined/>}
              placeholder='再次输入密码'/>
            </FormItem>
            <FormItem
            label='所在省份'
            name='province'
            >
              <Select
                defaultValue='省份'
                style={{
                  // width: 140,
                }}
                options={province}
                onChange={getSelected}
                // onChange={}
              />
            </FormItem>
            <FormItem
            label='所在城市'
            name='city'>
              <Select
              value={secondCity ? secondCity : '城市'}
              options={selectedCitys}
              onChange={onSecondCityChange}
            />
            </FormItem>
            <Button
            type='primary'
            htmlType='submit'
            style={{width: '100%'}}
            >
              注册
            </Button>
          </Form>
         </Card>
      </div>
  )
}
