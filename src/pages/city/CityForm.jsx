import { Form, Button, Card, Select } from 'antd'
import React, { forwardRef, useImperativeHandle } from 'react'

const FormItem = Form.Item
const Option = Select.Option

function CityForm(props,ref) {
  const [form] = Form.useForm()

  useImperativeHandle(ref, ()=>({
    formFields : form
  }))

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
              <Option value='1'>北京市</Option>
              <Option value='2'>上海市</Option>
              <Option value='3'>深圳市</Option>
            </Select>
          </FormItem>
          <FormItem label='运营模式' name='mode_id'>
            <Select style={{'width':200}}>
              <Option value='1'>自营</Option>
              <Option value='2'>加盟</Option>
            </Select>
          </FormItem>
          <FormItem label='用车模式' name='op_mode'>
            <Select  style={{'width':200}}>
              <Option value='1'>指定停车点模式</Option>
              <Option value='2'>禁停区模式</Option>
            </Select>
          </FormItem>
        </Form>
    </div>
  )
}
export default forwardRef(CityForm)
