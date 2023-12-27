import React, { useEffect } from 'react'
// import './App.less'

// @ts-ignore
import echarts from '../../../plugin/echarts'
import { Card } from 'antd'

// echarts
// 1.准备容器，具有宽高
// 2.获取容器，通过echarts.init()初始化echarts实例
// 3.根据需求配置图表
// 4.setOption()生成图标

export default function Pie() {
  const baseOption = {
    title:{
      text:'基础饼图',

    },
    legend:{
      // 设置方向
      // horizontal
      orient:'vertical',
      // 偏移
      left:10,
      top:60,
      // 数据
      data:['周一','周二','周三','周四','周五','周六','周日']
    },
    tooltip:{
      trigger:'item'
    },
    // Axis:{
    //   type:'value'
    // },
    series:[
      {
        name:'订单量',
        type:'pie',
        data:[
          {
            value:1000,
            name:'周一'
          },
          {
            value:2000,
            name:'周二'
          },
          {
            value:1200,
            name:'周三'
          },
          {
            value:600,
            name:'周四'
          },
          {
            value:2800,
            name:'周五'
          },
          {
            value:3500,
            name:'周六'
          },
          {
            value:2300,
            name:'周日'
          }
        ]
      }
    ]
  }
  function initBasePie (){
    const Charts = echarts.init(document.getElementById('base_pie'),null,{          width:500,
    height:280})
      Charts.setOption(baseOption)
  }

  const highOption = {
    title:{
      text:'环型饼图',
    },
    legend:{
      // 设置方向
      // horizontal
      orient:'vertical',
      // 偏移
      left:10,
      top:60,
      // 数据
      data:['周一','周二','周三','周四','周五','周六','周日']
    },
    tooltip:{
      trigger:'item'
    },
    // Axis:{
    //   type:'value'
    // },
    series:[
      {
        name:'订单量',
        type:'pie',
        radius:['40%','80%'],
        itemStyle: {
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data:[
          {
            value:1000,
            name:'周一'
          },
          {
            value:2000,
            name:'周二'
          },
          {
            value:1200,
            name:'周三'
          },
          {
            value:600,
            name:'周四'
          },
          {
            value:2800,
            name:'周五'
          },
          {
            value:3500,
            name:'周六'
          },
          {
            value:2300,
            name:'周日'
          }
        ]
      }
    ]
  }
  function initHighPie (){
    const Charts = echarts.init(document.getElementById('high_pie'),null,{          width:500,
    height:280})
      Charts.setOption(highOption)
  }
  useEffect(()=>{
    initBasePie()
    initHighPie()
  // eslint-disable-next-line
  },[])


  return (
    <div style={{width:'100%'}}>
        <Card>
          <div id='base_pie' style={{height:250}}></div>
        </Card>
        <Card>
          <div id='high_pie' style={{height:250}}></div>
        </Card>
    </div>
  )
}
