// @ts-nocheck
import { Button, Card, Form, Input, Modal, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
// import './App.less'
import { DeleteFilled, EditFilled, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { request } from '../../utils/request'
import CreateUser from './CreateUser'

import { useSelector } from 'react-redux'
// @ts-ignore

const FormItem = Form.Item
const Option = Select.Option

export default function User() {
  const [form] = Form.useForm()
  const [staffList,setStaffList] = useState([])
  const [staffStatusList,setStaffStatusList] = useState([])
  const [isModalOpen,setIsModalOpen] = useState(false)

  const getStaffList = async ()=>{
    const {data} = await request('/staff_list')
    console.log(data);
    setStaffList(data.item_list)
  }
  const getStaffStatusList = async ()=>{
    const {data} = await request('/staff_status')
    console.log(data);
    setStaffStatusList(data)
    // data.map((item,index)=>{
    //   console.log(item,index);
    // })
  }
  useEffect(()=>{
    getStaffList()
    getStaffStatusList()
  },[])

  const columns = [
    {
      title:'id',
      dataIndex:'id'
    },
    {
      title:'员工姓名',
      dataIndex:'staff_name'
    },
    {
      title:'性别',
      dataIndex:'staff_gender',
      render(staff_gender){
        return staff_gender === 1 ? '男' : '女'
      }
    },
    {
      title:'状态',
      dataIndex:'staff_status',
      render(staff_status){
        return {
          1:'在职',
          2:'事假',
          3:'病假',
          4:'产假',
          5:'年假',
          6:'离职'
        }[staff_status]
      }
    },
    {
      title:'基本工资',
      dataIndex:'staff_salary'
    },
    {
      title:'联系方式',
      dataIndex:'phone'
    },
    {
      title:'籍贯',
      dataIndex:'native_place'
    },
    {
      title:'入职时间',
      dataIndex:'entry_time'
    }
  ]

  const getData = (value)=>{
    console.log(value)
    // 获取到数据进行查询
  }
  const handleOperate = (type)=>{
    switch(type){
      case 'create':
        console.log('add');
        return setIsModalOpen(true)
      case 'delete':
        // Modal.confirm({
        //   title:'确认要删除吗?',
        //   onOk:()=>{
        //     // 确认删除
        //     const newStaffList = staffList.filter(staffList => staffList.id !== id)
        //     setStaffList(newStaffList)
        //     message.success(`${id}删除成功`)
        //   }
        // })
        console.log('删除');
        break
      case 'detail':
        console.log('详情');
        break
      case 'edit':
        console.log('修改');
        break
      default :
        console.log('操作错误');
    }
  }
  const {newUser} = useSelector(state => state.createUser)
  const createUser = ()=>{
    console.log(newUser);
    setIsModalOpen(false)
  }

  return (
    <div style={{width:'100%'}}>
      <Card style={{marginTop:0}}>
        <Form layout='inline'
        form={form}
        onFinish={getData}
        >
          <FormItem
          label='请输入员工姓名'
          name='staff_name'
          rules={[
            {
              required:true,
              message:'请输入员工姓名'
            }
          ]}
          >
            <Input
            placeholder='请输入员工姓名'
            style={{width:140}}/>
          </FormItem>
          <FormItem
          label='请选择员工状态'
          name='staff_status'
          >
            <Select
            options={staffStatusList.map((item)=>({
              label:item,
              value:item
            }))}
            style={{width:180}}
            placeholder='请选择员工状态'
            ></Select>
          </FormItem>
          <FormItem>
            <Button
            type='primary'
            style={{margin:'0 20px'}}
            htmlType='submit'
            >
              查询
            </Button>
            <Button>重置</Button>
          </FormItem>
        </Form>
      </Card>
      {/* <Card style={{marginTop:0}}> */}
      {/* </Card> */}
      <Card
      style={{
        marginTop:0
        }}
      >
        <Button
        type='primary'
        style={{
          marginRight:15,
          marginBottom:15
        }}
        icon={<PlusOutlined/>}
        onClick={()=>{
          handleOperate('create')
        }}
        >
          新增员工
        </Button>
        <Button
        type='primary'
        style={{marginRight:15}}
        icon={<DeleteFilled/>}
        onClick={()=>{
          handleOperate('delete')
        }}
        >
          删除员工
        </Button>
        <Button
        type='primary'
        style={{marginRight:15}}
        icon={<UnorderedListOutlined/>}
        onClick={()=>{
          handleOperate('detail',)
        }}
        >
          员工详情
        </Button>
        <Button
        type='primary'
        icon={<EditFilled/>}
        onClick={()=>{
          handleOperate('edit')
        }}
        >
          编辑员工信息
        </Button>
        <Table
        columns={columns}
        bordered
        dataSource={staffList}
        pagination={{
          position: ['bottomCenter'],
          // pageSize:['10']
        }}
        scroll={{
          x:'auto',
          y:280
        }}
        />
        <Modal
        title='新增员工'
        open={isModalOpen}
        width='400px'
        onCancel={()=>{
          setIsModalOpen(false)
        }}
        onOk={()=>{
          createUser()
        }}
        okText='提交'
        cancelText='取消'
        >
          <CreateUser/>
        </Modal>
      </Card>
    </div>
  )
}
