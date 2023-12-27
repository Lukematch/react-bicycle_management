import { Card } from 'antd'
import React, { useEffect } from 'react'
// import './App.less'
// @ts-ignore
import echarts from '../../../plugin/echarts'

// echarts
// 1.准备容器，具有宽高
// 2.获取容器，通过echarts.init()初始化echarts实例
// 3.根据需求配置图表
// 4.setOption()生成图标

export default function Bar() {
  const initBaseBarOption = {
    // 标题
    title:{
      text:'用户骑行订单'
    },
    // 提示框
    tooltip:{
      // 触发类型 轴触发
      trigger:'axis'
    },
    // x轴
    xAxis:{
      data:['周一','周二','周三','周四','周五','周六','周日']
    },
    // y轴
    yAxis:{
      type:'value'
    },
    // 配置y轴数据
    series:[
      {
        // y轴名称
        name:'订单量',
        // 图标类型
        type:'bar',
        // y轴value值，与x轴对应
        data:[1000,2000,3000,1000,2000,6000,5000]
      }
    ]
  }
  function initBaseBar() {
    const Charts = echarts.init(document.getElementById('base_bar'),null,{          width:500,
    height:300})
    Charts.setOption(initBaseBarOption)
  }
  const option = {
    title:{
      text:'高级柱状图表'
    },
    // 图例属性
    legend:{
      data:['饿了么','青桔','美团']
    },
    tooltip:{
      trigger:'axis'
    },
    xAxis:{
      data:['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis:{
      type:'value'
    },
    series:[
      {
        name:'饿了么',
        type:'bar',
        data:[1000,2000,1200,600,2800,3500,2300]
      },
      {
        name:'青桔',
        type:'bar',
        data:[2500,3000,800,3200,1000,4000,3600]
      },
      {
        name:'美团',
        type:'bar',
        data:[1000,2000,3000,1000,2000,6000,5000]
      }
    ]
  }
  function initHighBar() {
    const Charts = echarts.init(document.getElementById('high_bar'),null,{          width:800,
    height:300})
    Charts.setOption(option)
  }
  useEffect(()=>{
    initBaseBar()
    initHighBar()
  // eslint-disable-next-line
  },[])
  return (
    <div style={{width:'100%'}}>
      <Card>
        <div id='base_bar' style={{height:250}}></div>
      </Card>
      <Card>
      <div id='high_bar' style={{height:250}}></div>
      </Card>
    </div>
  )
}
