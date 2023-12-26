// @ts-nocheck
import React, { useState } from 'react'
// import './App.less'
import { Button, Card, DatePicker, Form, Modal, Select, Table, message } from 'antd'
import moment from 'moment'
import { request } from '../../utils/request'

const FormItem = Form.Item
const Option = Select.Option

export default function Detail() {

  const [form] = Form.useForm()
  const [detailInfo,setDetailInfo] = useState([])
  const [showDetailInfo,setShowDetailInfo] = useState(false)
  const [selectedDetail,setSelectedDetail] = useState({})
  const [closeDetail,setCloseDetail] = useState(false)

  const getDate =  async (values)=>{
    // console.log(values)
    const {start_time,end_time,status} = values
    const start = moment(start_time).format('X')
    const end = moment(end_time).format('X')
    console.log(start,end);
    const params = {start,end,status}

    try{
      const {data} = await request({
        url:'/detail',
        method:'get',
        params
      })
      // console.log(data.item_list);
      setDetailInfo(data.item_list)
    } catch (error) {
      throw new Error(error)
    }
  }
  const columns = [
    {
      title:'订单编号',
      dataIndex:'order_sn',
      width:120,
      align:'center',
      fixed: 'left',
    },
    {
      title:'车辆编号',
      dataIndex:'bike_sn',
      width:100,
      align:'center',
      // fixed: 'left',
    },
    {
      title:'用户名',
      dataIndex:'user_name',
      width:80,
      align:'center',
      // fixed: 'left',
    },
    {
      title:'手机号',
      dataIndex:'mobile',
      width:120,
      align:'center'
    },
    {
      title:'里程',
      dataIndex:'distance',
      align:'center',
      width:80,
      render(distance){
        return distance/1000+'Km'
      }
    },
    {
      title:'行驶时长',
      dataIndex:'total_time',
      width:100,
      align:'center'
    },
    {
      title:'状态',
      dataIndex:'status',
      align:'center',
      width:80,
      render(status){
        return status === 1 ? '进行中':'行程结束'
      }
    },
    {
      title:'开始时间',
      dataIndex:'start_time',
      width:110,
      align:'center'
    },
    {
      title:'结束时间',
      dataIndex:'end_time',
      width:110,
      align:'center'
    },
    {
      title:'订单金额',
      dataIndex:'total_fee',
      width:100,
      align:'center'
    },
    {
      title:'实付金额',
      dataIndex:'user_pay',
      width:100,
      align:'center'
    }
  ]

  const rowSelection ={
    type:'radio',
    onChange:(selectedRowKey,selectedRows)=>{
      console.log(selectedRows)
      setSelectedDetail(selectedRows[0])
    }
  }
  const showDetail = ()=>{
    if(selectedDetail.order_sn){
      setShowDetailInfo(true)
    }else{
      message.error('请选择订单')
    }
  }
  const closedDetail = ()=>{
    if(selectedDetail.order_sn){
      setCloseDetail(true)
    }else{
      message.error('请选择订单')
    }
  }


  return (
    <div style={{width:'100%'}}>
        <Card>
          <Form layout='inline'
          form={form}
          onFinish={getDate}
          >
            <FormItem name='start_time'>
              <DatePicker
              placeholder='请选择开始时间'
              style={{'width':160}}/>
            </FormItem>
            <FormItem name='end_time'>
              <DatePicker
                placeholder='请选择结束时间'
                style={{'width':160}}/>
            </FormItem>
            <FormItem
            name='status'
            label='订单状态'>
              <Select
              placeholder='请选择状态'
              style={{'width':120}}>
                <Option value='0'>全部</Option>
                <Option value='1'>进行中</Option>
                <Option value='2'>行程结束</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type='primary'
              style={{margin:'0 20px'}}
              htmlType='submit'
              >查询</Button>
              <Button type='primary'>重置</Button>
            </FormItem>
          </Form>
        </Card>
        <Card style={{
            height:500,
            marginTop:0
            }}
        >
          <Button type='primary'
          style={{
            marginBottom:10,
            marginRight:10
          }}
          onClick={()=>{
            showDetail()
          }}
          >订单详情</Button>
          <Button type='primary'
          onClick={()=>{
            closedDetail()
          }}
          >结束订单</Button>
          <Table
          columns={columns}
          dataSource={detailInfo}
          bordered
          pagination={{
            position: ['bottomCenter'],
            // pageSize:['10']
          }}
          scroll={{
            x:1400,
            y:300
          }}
          rowSelection={rowSelection}
          // 有个坑，后端数据没有标识符key的情况下需要手动添加rowKey作为表示，否则选择单项会全选，因为所有的项是同一个key，即null
          rowKey={detailInfo=>detailInfo.order_sn}
          ></Table>
          <Modal
          title='订单详情'
          open={showDetailInfo}
          keyboard
          centered
          cancelText='取消'
          okText='确定'
          onCancel={()=>{
            setShowDetailInfo(false)
          }}
          onOk={()=>{
            setShowDetailInfo(false)
          }}
          >
            <h3>基础信息</h3>
            <span>用车模式：{selectedDetail.mode === 1 ? '服务区' : (selectedDetail.mode === 0 ? '停车点' : '')}</span>
            <br></br>
            <span>订单编号：{selectedDetail.order_sn}</span>
            <br></br>
            <span>车辆编号：{selectedDetail.bike_sn}</span>
            <br></br>
            <span>用户姓名：{selectedDetail.user_name}</span>
            <br></br>
            <span>手机号码：{selectedDetail.mobile}</span>
            <br></br><br></br>
            <h3>行程轨迹</h3>
            <span>行程起点：{selectedDetail.start}</span>
            <br></br>
            <span>行程终点：{selectedDetail.end}</span>
            <br></br>
            <span>行程里程：{selectedDetail.distance}</span>
          </Modal>
          <Modal
          title='结束订单'
          open={closeDetail}
          cancelText='取消'
          okText='确定'
          keyboard
          centered
          onCancel={()=>{
            setCloseDetail(false)
          }}
          onOk={()=>{
            // setCloseDetail(false)
            Modal.confirm({
              title: '确定结束订单?',
              cancelText:'取消',
              okText:'确定',
              onOk(){
                setCloseDetail(false)
                message.success(`成功结束订单${selectedDetail.order_sn}`)
                setSelectedDetail('')
              },
              onCancel(){
                message.info('请重新确认')
              }
            })
          }}
          >
            <h3>订单编号：{selectedDetail.order_sn}</h3>
            <span>车辆编号：{selectedDetail.bike_sn}</span>
            <br></br>
            <span>订单金额：{selectedDetail.total_fee}</span>
            <br></br>
            <span>开始时间：{selectedDetail.start_time}</span>
            <br></br>
            <span>当前位置：{selectedDetail.location}</span>
            <br></br>
          </Modal>
        </Card>
    </div>
  )
}
