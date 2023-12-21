// @ts-nocheck
import { Button, Card, Modal } from 'antd'
import React, { useRef, useState } from 'react'
import FilterForm from './FilterForm'
import CityForm from './CityForm'
import CityList from './CityList'
import { useSelector } from 'react-redux'

export default function City() {
  const [modal,setModal] = useState(false)
//   1.使用useRef
//   const cityRefs = useRef()
//   2.使用redux(获取store里的状态)
    const {cityForm} = useSelector((state)=>({
        cityForm:state.getCityForm.cityForm
    }))

    const getData = ()=>{
        // console.log(cityRefs.current.formFields.getFieldsValue())
        console.log(cityForm);
        setModal(false)
    }

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
        >
            {/* <CityForm ref={cityRefs}/> */}
            <CityForm/>
        </Modal>
    </div>
  )
}
