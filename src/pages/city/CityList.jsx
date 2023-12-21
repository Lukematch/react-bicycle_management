// @ts-nocheck
import React, { useEffect, useState } from 'react'
import {request} from '../../utils/request'
import { Table } from 'antd'
import moment from 'moment'

export default function CityList() {
    const [cityList,setCityList] = useState([])
    const getCity = async ()=>{
        try{
            const {data} = await request('/open_city')
            setCityList(data.item_list)
            console.log(data.item_list);
        }catch(error){
            throw new Error(error)
        }
    }
    const columns = [
        {
            title:'id',
            dataIndex:'id',
            align:'center'
        },
        {
            title:'城市名称',
            dataIndex:'name',
            width:90,
            align:'center'
        },
        {
            title:'用车模式',
            dataIndex:'mode',
            width:90,
            align:'center',
            render(mode){
                return mode === 1 ? '停车点' : '禁停区'
            }
        },
        {
            title:'运营模式',
            width:90,
            align:'center',
            dataIndex:'op_mode',
            render(op_mode){
                return op_mode === 1 ? '自营' : '加盟'
            }
        },
        {
            title:'授权加盟商',
            width:105,
            align:'center',
            dataIndex:'franchisee_name'
        },
        {
            title:'城市管理员',
            width:105,
            align:'center',
            dataIndex:'city_admins',
            render(arr){
                return arr.map(item=>{
                    return item.user_name
                }).join('、')
            }
        },
        {
            title:'城市开通时间',
            dataIndex:'open_time',
            align:'center'
        },
        {
            title:'操作人',
            width:90,
            align:'center',
            dataIndex:'sys_user_name'
        },
        {
            title:'操作时间',
            dataIndex:'update_time',
            align:'center',
            render(update_time){
                return moment.unix(update_time).format('yyyy-MM-DD hh:mm:ss')
            }
        },
    ]

    useEffect(()=>{
        getCity()
    },[])

    return (
    <div>
        <Table
        dataSource={cityList}
        columns={columns}
        bordered
        pagination={{
          position: ['bottomCenter'],
          // pageSize:['10']
        }}
        scroll={{
          x:'auto',
          y:300
        }}
        >
        </Table>
    </div>
    )
}
