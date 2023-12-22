// @ts-nocheck
import { Form, Button, Card, Select } from 'antd'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { setCityForm } from '../../store/cityForm'

const FormItem = Form.Item
const Option = Select.Option

// function CityForm(props,ref) {
export default function CityForm() {
  const [form] = Form.useForm()

  // useImperativeHandle(ref, ()=>({
  //   formFields : form
  // }))

  // 使用react-redux的两条思路(这次使用1了)
  // 1.使用useWatch监视各个元素同步dispatch给store，然后在index基组件确认提交给后台,这样会dispatch多次（每次修改数据就会dispatch一次）
  // 2.将确认提交方法放在这个子组件，选择完后再进行校验获取表单数据，将表单数据dispatch给store，这就只需要一次数据获取和dispatch(但是提交后基组件的卡片样式不方便做事件回调)
  const dispatch = useDispatch()
  const city_id = Form.useWatch('city_id',form)
  const mode_id = Form.useWatch('mode_id',form)
  const op_mode = Form.useWatch('op_mode',form)
  useEffect(()=>{
    dispatch(setCityForm({
        city_id:city_id,
        mode_id:mode_id,
        op_mode:op_mode
      }))
    console.log('dispatch|cityForm被修改')
  },[city_id,mode_id,op_mode,dispatch])

  return (
    <div>
        <Form
        form={form}
        layout='horizontal'
        initialValues={{
            city_id:'北京',
            mode_id:'自营',
            op_mode:'指定停车点模式'
        }}
        >
        <FormItem label='城市' name='city_id'>
            <Select style={{'width':230}}>
              <Option value='北京市'>北京市</Option>
              <Option value='上海市'>上海市</Option>
              <Option value='深圳市'>深圳市</Option>
            </Select>
          </FormItem>
          <FormItem label='运营模式' name='mode_id'>
            <Select style={{'width':200}}>
              <Option value='自营'>自营</Option>
              <Option value='加盟'>加盟</Option>
            </Select>
          </FormItem>
          <FormItem label='用车模式' name='op_mode'>
            <Select  style={{'width':200}}>
              <Option value='指定停车点模式'>指定停车点模式</Option>
              <Option value='禁停区模式'>禁停区模式</Option>
            </Select>
          </FormItem>
        </Form>
    </div>
  )
}
// export default forwardRef(CityForm)
