// @ts-nocheck
import React, { useRef, useState } from 'react'
import { Card, Radio, Space, Tabs, message } from 'antd';
// import './App.less'
import '../../index.less'

export default function Tab() {
  const items=[
    {
      label: 'Tab 1',
      key: '1',
      children: 'Content of Tab Pane 1',
    },
    {
      label: 'Tab 2',
      key: '2',
      children: 'Content of Tab Pane 2',
      disabled: true,
    },
    {
      label: 'Tab 3',
      key: '3',
      children: 'Content of Tab Pane 3',
    },
  ]
  const [activeKey,setActiveKey] = useState(items[0].key)
  const [newItems,setNewItems] = useState(items)
  // 获取当前DOM元素，存索引数据
  const lastItem = newItems[newItems.length-1]
  const newTabIndex = useRef(lastItem.key)
  const [tabPosition, setTabPosition] = useState('top');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  }
  const onChange = (key,newActivekey)=>{
    console.log(key,newActivekey);
    message.success('Tab'+key)
    setActiveKey(newActivekey)
  }
  // 增加
  const add = ()=>{
    console.log('增加');
    // 保证索引唯一性，下面用反引号拼接tabs
    // newTabIndex从0累加
    const newActivekey = ++newTabIndex.current
    // console.log(newActivekey);
    // 获取items列表，并插入新的索引
    const newPanes = [...newItems]
    newPanes.push({
      label:`Tab ${newActivekey}`,
      key:newActivekey,
      children:`Content of Tab Pane ${newActivekey}`
    })
    // 更新标签页列表和索引
    setNewItems(newPanes)
    setActiveKey(newActivekey)
  }
  // 删除
  const remove = (targetKey)=>{
    // 获取当前打开的标签
    let newActiveKey = activeKey;
    // 生成索引(保存当前需要激活的key，删除当前key，激活的key会是被删除的key的前一个)
    let lastIndex = -1
    // 要删除的key和当前的key是否是同一个
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    })
    // 过滤掉删除的标签页
    const newPanes = items.filter((item) => item.key !== targetKey)
    // 对过滤后的新标签页列表判断并将当前索引保存
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    // 更新标签页列表和索引
    setNewItems(newPanes);
    setActiveKey(newActiveKey);
  }
  const onEdit = (targetKey,action)=>{
    if(action === 'add'){
      add()
    }
    if(action === 'remove'){
      remove(targetKey)
    }
  }
  return (
      <div className="warpper">
        <Card title='Tabs页签基础使用' className='card-warp' >
          <Tabs
          style={{ height: 100 }}
          defaultActiveKey="1"
          onChange={onChange}
          items={items}
          />
        </Card>
        <Card title='Tabs页签修改配置' className='card-warp'>
        <Space
        style={{
          marginBottom: 48,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
          <Tabs
          items={newItems}
          tabPosition={tabPosition}
          // 标签页为可修改样式
          type='editable-card'
          // 激活当前tabs面板的key
          activeKey={activeKey}
          // defaultActiveKey="1"
          onChange={onChange}
          onEdit={onEdit}
          />
        </Card>
      </div>
  )
}
