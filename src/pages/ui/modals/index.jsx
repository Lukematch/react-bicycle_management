// @ts-nocheck
import { Button, Card, Modal } from 'antd'
import React, { Component } from 'react'
// import './App.less'
import '../../index.less'

export default class Modals extends Component {
  constructor(){
    super()
    this.state={
      showModal:false
    }
  }
  handleOpen = (type) => {
    this.setState({
      [type]:true
    })
  }

  render() {
    return (
      <div>
        <Card title='基础对话框(弹框)' className='card-warp'>
          <Button
          type='primary'
          onClick={()=>{
            this.handleOpen('showModal')
          }}
          >
            弹框
          </Button>
          <Modal
          title='基础弹窗'
          open={this.state.showModal}
          onOk={()=>{
            this.setState({
              showModal:false
            })
          }}
          onCancel={()=>{
            this.setState({
              showModal:false
            })
          }}
          >
            Continuous learning and progress.
          </Modal>
        </Card>
      </div>
    )
  }
}
