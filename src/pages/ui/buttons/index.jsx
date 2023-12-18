// @ts-nocheck
import React, { useState } from 'react'
import { Button, Card, Dropdown, Radio, Space, message } from 'antd'
import '../../index.less'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons'

export default function Buttons() {
  const [loading,setLoading] = useState(true)
  const [size,setSize] = useState('middle')

  const loadingChange = ()=>{
    setLoading(!loading)
  }
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    // console.log('click', e);
  }
  const change = (e)=>{
    setSize(e.target.value)
  }
  const items =[
    {
      key:1,
      label:'item1'
    },
    {
      key:2,
      label:'item2'
    },
    {
      key:3,
      label:'item3'
    }
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  return (
      <div>
        <Card title='基础按钮' className='card-warp'>
          <Button type='primary'>按钮</Button>
          <Button>按钮</Button>
          <Button type='dashed'>按钮</Button>
          <Button danger>按钮</Button>
          <Button disabled>按钮</Button>
        </Card>
        <Card title='图形按钮' className='card-warp'>
          <Button icon={<PlusOutlined/>}>按钮</Button>
          <Button icon={<EditOutlined/>}>按钮</Button>
          <Button icon={<DeleteOutlined/>}>按钮</Button>
          <Button
          type='primary'
          shape='circle'
          icon={<SearchOutlined/>}>
          </Button>
        </Card>
        <Card title='loading按钮' className='card-warp'>
          <Button type='primary' loading={loading} >loading </Button>
          <Button shape='circle' type='primary' loading={loading} ></Button>
          <Button onClick={loadingChange}>改变</Button>
        </Card>
        <Card title='按钮组(保持间距)' className='card-warp'>
            <Space>
              <Button type='primary' icon={<LeftOutlined/>}>前进</Button>
              <Button type='primary' icon={<RightOutlined/>}>返回</Button>
              {/* 下拉菜单 */}
              <Dropdown
              menu={menuProps}
              trigger={['click']}
              className='dropdown-button'
              >
                <Button>
                  <Space>
                      更多
                      <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </Card>
          <Card title='按钮尺寸' className='card-warp'>
            <Radio.Group
            value={size}
            onChange={e=>{
              change(e)
            }}
            >
              <Radio value='small'>小</Radio>
              <Radio value='middle'>中</Radio>
              <Radio value='large'>大</Radio>
            </Radio.Group>
          </Card>
      </div>
  )
}
