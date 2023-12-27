import { Card } from 'antd'
import React, { useEffect } from 'react'
// import './App.less'

// @ts-ignore
import echarts from '../../../plugin/echarts'

export default function Line() {
  const baseOption = {
    title:{
      text:'用户骑行订单'
    },
    legend:{
      orient:'horizontal',
      top:'top'
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
        name:'订单量',
        type:'line',
        data:[1000,2000,1200,600,2800,3500,2300]
      }
    ]
  }
  function baseLine (){
    const Charts = echarts.init(document.getElementById('base_line'),null,{
      width:800,
      height:300
    })
    Charts.setOption(baseOption)
  }
  const highOption = {
  title:{
    text:'高级折线图'
  },
  legend:{
    orient:'horizontal',
    top:'top'
  },
  tooltip:{
    trigger:'item'
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
      type:'line',
      data:[1200,2000,1200,600,2800,3500,2300]
    },
    {
      name:'青桔',
      type:'line',
      data:[2500,3000,800,3200,1000,4000,3600]
    },
    {
      name:'美团',
      type:'line',
      data:[1000,1800,3000,1000,2000,6000,5000]
    }
  ]
}
  function highLine (){
    const Charts = echarts.init(document.getElementById('high_line'),null,{
      width:800,
      height:300
    })
    Charts.setOption(highOption)
  }
  useEffect(()=>{
    baseLine()
    highLine()
  //eslint-disable-next-line
  },[])
  return (
    <div style={{width:'100%'}}>
      <Card>
        <div id='base_line' style={{height:250}}></div>
      </Card>
      <Card>
        <div id='high_line' style={{height:250}}></div>
      </Card>
</div>
  )
}
