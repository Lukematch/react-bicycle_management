// @ts-nocheck
import { Button, Card, Form, Input, Modal, Select, Table, Tree, message } from 'antd'
import React, { useEffect, useState } from 'react'
// import './App.less'
import { request } from '../../utils/request'
// @ts-ignore

const FormItem = Form.Item
const Option = Select.Option

export default function Permission() {
  const [form] = Form.useForm()
  const [roleList,setRoleList] = useState([])
  const [showCreateModal,setShowCreateModal] = useState(false)
  const [showSetModal,setShowSetModal] = useState(false)
  const [menuList,setMenuList] = useState([])
  const [selectedRole,setSelectedRole] = useState({})
  const [menuItem,setMenuItem] = useState([])
  const getData = async ()=>{
    const {data} = await request('/role_list')
    setRoleList(data.item)
  }
  useEffect(()=>{
    getData()
  },[])
  const columns = [
    {
      title:'角色ID',
      dataIndex:'id',
      width:200
    },
    {
      title:'角色名称',
      dataIndex:'authorize_user_name',
      width:100
    },
    {
      title:'创建时间',
      dataIndex:'create_time',
      width:150
    },
    {
      title:'使用状态',
      dataIndex:'status',
      width:100
    },
    {
      title:'授权时间',
      dataIndex:'authorize_time',
      width:150
    },
    {
      title:'授权人',
      dataIndex:'role_name'
    }
  ]

  const formItemLayout = {
    labelCol:{span:6},
    wrapperCol:{span:14}
  }

  const createRole = ()=>{
    setShowCreateModal(true)
    console.log('创建角色');
  }
  const setRole = ()=>{
    if(selectedRole.id){
      setShowSetModal(true)
    }else{
      message.warning('请选择角色')
    }
  }
  const getRoleData = async ()=>{
    const {role_name,role_status} = form.getFieldsValue()
    if([role_name,role_status].includes(undefined)){
      return Modal.warning({
        title:'请完整输入角色信息'
      })
    }
    try{
      const {data} = await request({
        url:'/create_role',
        method:'post',
        data:{
          role_name,
          role_status
        }
      })
      if(data.code === 200){
        setShowCreateModal(false)
        message.success('添加成功')
        form.resetFields()
        getRoleData()
      }
    }catch(error){
      throw new Error(error)
    }
  }
  const getMenu = async() =>{
    try{
      const data = await request('/menu')
      console.log(data.menu);
      setMenuList(data.menu)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(()=>{
    getMenu()
  },[])
  const rowSelection = {
    type:'radio',
    onChange:(selectedRowKey,selectedRows)=>{
      console.log(selectedRows)
      setSelectedRole(selectedRows[0])
      // console.log(selectedRows[0].menu_item);
      setMenuItem(selectedRows[0].menu_item)
    }
  }
  const changeMenu = (values)=>{
    console.log(values);
    setMenuItem()
  }

  const setRoleData = async ()=>{
    try{
      const {data} = await request({
        url:'/set_permission',
        method:'post',
        data:{
          id:selectedRole.id,
          status:selectedRole.status,
          menuItem
        }
      })
      if(data.code===200){
        message.success(data.message)
        setShowSetModal(false)
        setMenuItem([])
        // getData()
      }


    }catch(error){
      throw new Error(error)
    }
  }
  return (
    <div style={{width:'100%'}}>
        <Card>
          <Button
          type='primary'
          style={{marginRight:10}}
          onClick={createRole}
          >创建角色</Button>
          <Button
          type='primary'
          onClick={setRole}
          >设置权限</Button>
        </Card>
        <Card>
          <Table
          columns={columns}
          dataSource={roleList}
          bordered
          pagination={{
            position:['bottomCenter']
          }}
          scroll={{
            x:'auto',
            y:300
          }}
          rowSelection={rowSelection}
          rowKey={item=>item.id}
          />
        </Card>
        <Modal
        title='创建角色'
        open={showCreateModal}
        cancelText='取消'
        okText='创建'
        onCancel={()=>{
          setShowCreateModal(false)
        }}
        onOk={getRoleData}
        >
          <Form
          form={form}
          >
            <FormItem
            label='角色名称'
            name='role_name'
            {...formItemLayout}
            >
              <Input placeholder='请输入角色名称'/>
            </FormItem>
            <FormItem
            label='角色状态'
            name='status'
            {...formItemLayout}
            >
              <Select>
                <Option value='0'>启用</Option>
                <Option value='1'>禁用</Option>
              </Select>
            </FormItem>
          </Form>
        </Modal>
        <Modal
        title='设置权限'
        open={showSetModal}
        cancelText='取消'
        okText='设置'
        onCancel={()=>{
          setShowSetModal(false)
        }}
        onOk={setRoleData}
        >
          <Form>
            <FormItem
            label='角色名称'
            name='role_name'
            {...formItemLayout}
            >
              <Input placeholder={selectedRole.authorize_user_name} disabled/>
            </FormItem>
            <FormItem
            label='状态'
            name='role_status'
            {...formItemLayout}
            >
              <Select
              // placeholder='请选择状态'
              placeholder={selectedRole.status === 0 ? '启用':'禁用'}
              >
                <Option value='0'>启用</Option>
                <Option value='1'>禁用</Option>
              </Select>
            </FormItem>
          </Form>
          <Tree
          checkable
          treeData={menuList}
          onCheck={changeMenu}
          defaultCheckedKeys={menuItem}
          fieldNames={{
            title:'label'
          }}
          >
          </Tree>
        </Modal>
    </div>
  )
}
