// @ts-nocheck
import { Button, Modal, Table , message } from 'antd'
import React, { useEffect, useState } from 'react'
import {request} from '../../../utils/request'

export default function High() {
  const [user,setUser] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const getUser = async() =>{
    try{
      const {data} = await request('/hightables')
      // console.log(data);
      setUser(data.user)
    } catch (error) {
      throw new Error(error)
    }
  }
  const removeItem = (id) =>{
    Modal.confirm({
      title:'确认要删除吗?',
      onOk:()=>{
        // 确认删除
        const newUser = user.filter(user => user.id !== id)
        setUser(newUser)
        message.success(`${id}删除成功`)
      }
    })
  }

  const columns = [
    {
      title:'姓名',
      dataIndex:'name',
      width:120,
      align:'center' ,
      key:'name',
      filters:[],
      filterSearch: true,
      fixed:'left'
    },
    {
      title:'年龄',
      dataIndex:'age',
      width:120,
      align:'center' ,
      fixed:'left',
      key:'age',
      sorter: (a, b) => a.age - b.age
    },
    {
      title:'性别',
      dataIndex:'isMale',
      width:100,
      align:'center' ,
      key:'isMale',
      render(isMale){
        return isMale === true ? '男':'女'
      }
    },
    {
      title:'地址',
      dataIndex:'address',
      width:300,
      align:'center' ,
      key:'address'
    },
    {
      title:'联系电话',
      dataIndex:'phone',
      width:200,
      align:'center' ,
      key:'phone'
    },
    {
      title:'邮箱',
      dataIndex:'email',
      width:300,
      align:'center' ,
      key:'email'
    },
    {
      title:'操作',
      key:'action',
      render:record=>(
        <Button type='primary'
        onClick={()=>{
          removeItem(record.id)
        }}
        >删除</Button>
      )
    }
  ]
  const onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,selectedRows);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      // selections: [
      //   Table.SELECTION_ALL,
      //   Table.SELECTION_INVERT,
      //   Table.SELECTION_NONE
      // ]
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <>
      <Table
      dataSource={user}
      columns={columns}
      bordered
      pagination={{
        position: ['bottomCenter'],
        // pageSize:['10']
      }}
      scroll={{
        x:'auto',
        y:480
      }}
      rowSelection={rowSelection}
      />
    </>
  )
}
