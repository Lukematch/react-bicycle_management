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
      key:'name'
    },
    {
      title:'年龄',
      dataIndex:'age',
      key:'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title:'所在ip',
      dataIndex:'ip',
      key:'ip'
    },
    {
      title:'时间',
      dataIndex:'datatime',
      key:'datatime'
    },
    {
      title:'标题',
      dataIndex:'title',
      key:'title'
    },
    {
      title:'描述',
      dataIndex:'descript',
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
      <div className="warpper">
        <Card className='card-warp'>
          <Table
          // loading
          // className='table'
          bordered='true'
          rowClassName = {(index)=>{
            let className = index % 2 ? 'shallow_gray': 'deep_gray';
            return className
          }}
          size='small'
          dataSource={dataSource}
          columns={columns}
          />
        </Card>
      </div>
  )
}
