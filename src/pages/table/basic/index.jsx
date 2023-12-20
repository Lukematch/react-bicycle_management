// @ts-nocheck
import { Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import '../../index.less'
import {request} from '../../../utils/request'

export default function Basic() {
  const [dataSource,setDataSource] = useState([])

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
      title:'所在ip',
      dataIndex:'ip',
      width:200,
      align:'center' ,
      key:'ip'
    },
    {
      title:'时间',
      dataIndex:'datatime',
      width:200,
      align:'center' ,
      key:'datatime'
    },
    {
      title:'标题',
      dataIndex:'title',
      width:200,
      align:'center' ,
      key:'title'
    },
    {
      title:'描述',
      dataIndex:'descript',
      width:500,
      align:'center' ,
      key:'descript'
    }
  ]
  const getTables = async()=>{
    try{
      const tables = await request('/tables')
      setDataSource(tables)
      console.log(dataSource)
      }catch(error){
        throw new Error(error)
      }
  }

  useEffect(()=>{
    getTables()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
      <>
          <Table
          // loading
          bordered
          pagination={{
            position: ['bottomCenter'],
            // pageSize:['9']
          }}
          // size='large'
          dataSource={dataSource}
          columns={columns}
          scroll={{
            x:'auto',
            y:480
          }}
          />
      </>
  )
}
