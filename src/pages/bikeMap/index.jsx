// @ts-nocheck
import { Button, Card, Form, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
// import './App.less'
import {request} from '../../utils/request'

// @ts-ignore
const BMapGL = window.BMapGL
const FormItem = Form.Item

export default function BikeMap() {
  const [form] = Form.useForm()
  const [cityList,setCityList] = useState([])
  const [point,setPoint] = useState({
    lng:113.035850,
    lat:28.179680
  })
  const [bikeList,setBikeList] = useState([])

  const getCityList = async ()=>{
    try{
      const {data} = await request('/bike_city')
      if(!data){
        return Modal.error({
          title:'数据加载出错'
        })
      }
      if(data.code === 200){
        console.log(data);
        setCityList(data.city)
      }
    }catch(error){
      throw new Error(error)
    }
  }
  useEffect(()=>{
    getCityList()
  },[point,bikeList])
  const selected = (index)=>{
    console.log(cityList[index].point);
    setPoint({
      lng:cityList[index].point.lng,
      lat:cityList[index].point.lat
    })
  }
  const initMap = ()=>{
    // 创建地图实例 传入容器 全局对象
    const map = new BMapGL.Map('container')
    // 设置中心点坐标
    // const point = new BMapGL.Point(113.035550,28.179380)
    // const bikePoint1 = new BMapGL.Point(113.035850,28.179680)
    // 初始化地图 设置展示级别
    map.centerAndZoom(point,12)
    // 添加地图控件
    // 比例尺
    map.addControl(new BMapGL.ScaleControl({
      // eslint-disable-next-line no-undef
      anchor:BMAP_ANCHOR_BOTTOM_RIGHT
    }))
    // 缩放
    map.enableScrollWheelZoom(true)
    map.addControl(new BMapGL.ZoomControl())
    // 城市列表
    map.addControl(new BMapGL.CityListControl())
    // 定位
    map.addControl(new BMapGL.LocationControl())
    // 设置标志点
    // map.addOverlay(new BMapGL.Marker(point))
    //bike
    const icon = new BMapGL.Icon('/assets/bike.jpg',new BMapGL.Size(36,42),{
      imageSize:new BMapGL.Size(36,42)
    })
    // const marker = new BMapGL.Marker(point,{icon})
    // map.addOverlay(marker)
    bikeList.forEach((item)=>{
      const bikePoint = new BMapGL.Point(item.lng,item.lat)
      const bikeMarker = new BMapGL.Marker(bikePoint,{icon})
      map.addOverlay(bikeMarker)
    })
  }
  useEffect(()=>{
    initMap()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[point,bikeList])

  const getCityId = async (values)=>{
    console.log(values);
    const {city_id} = values
    if(city_id===undefined){
      Modal.warning({
        title:'请选择城市'
      })
    }
    // 发送请求获取车辆坐标信息
    try{
      const {data} = await request({
        url:'/bike_map',
        method:'post',
        data:{city_id}
      })
      if(data.code===200){
        setBikeList(data.bike_list)
      }
    } catch (error){
      throw new Error(error)
    }
  }
  return (
    <div style={{width:'100%'}}>
      <Card style={{height:80}}>
        <Form
        layout='inline'
        form={form}
        onFinish={getCityId}
        >
          <FormItem
          label='请选择城市'
          name='city_id'
          >
            <Select
            style={{width:200}}
            placeholder='请选择城市'
            options={cityList.map((item,index)=>({
              label:item.name,
              value:index
            }))}
            onSelect={selected}
            >
            </Select>
          </FormItem>
          <FormItem>
            <Button
            htmlType='submit'
            type='primary'>查询</Button>
          </FormItem>
          <FormItem>
            <Button type='primary'
            onClick={()=>{
              form.resetFields()
            }}
            >重置</Button>
          </FormItem>
        </Form>
      </Card>
      <Card>
        <div id='container' style={{height:450}}>
        </div>
      </Card>
    </div>
  )
}
