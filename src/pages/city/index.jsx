// @ts-nocheck
import { Button, Card, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import FilterForm from './FilterForm'
import CityForm from './CityForm'
import CityList from './CityList'
import { useDispatch, useSelector } from 'react-redux'
import { listData } from '../../store/cityForm'

export default function City() {
  const [modal,setModal] = useState(false)
//   1.使用useRef
//   const cityRefs = useRef()
//   2.使用redux(获取store里的状态)
    // const {cityForm} = useSelector((state)=>({
    //     cityForm:state.getCityForm.cityForm
    // }))
    // const {cityForm} = useSelector((state)=>(state.user))
//   3.rtk(redux toolkit)
//  不改变写法  拿数据
    const {cityForm} = useSelector(state => state.cityForm)
    const dispatch = useDispatch()

    const getData = ()=>{
        // console.log(cityRefs.current.formFields.getFieldsValue())
        console.log(cityForm);
        setModal(false)
    }

    useEffect(()=>{
        dispatch(listData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div style={{width:'100%'}}>
        <Card>
            <FilterForm/>
        </Card>
        <Card style={{
            height:470,
            marginTop:0
            }}
        >
            <Button
            type='primary'
            onClick={()=>{
                setModal(true)
            }}
            >开通城市</Button>
            <CityList/>
        </Card>
        <Modal
        title='开通城市'
        open={modal}
        onCancel={()=>{
            setModal(false)
        }}
        onOk={getData}
        // footer={null}
        >
            {/* <CityForm ref={cityRefs}/> */}
            <CityForm/>
        </Modal>
    </div>
  )
}
