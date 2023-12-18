// @ts-nocheck
import { Card, Col, Modal, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect, useState } from 'react'
import '../../index.less'

export default function Gallery() {
  const [visable,setVisable] = useState(false)
  const [img,setImg] = useState()
  const [content,setContent] = useState()
  const [title,setTitle] = useState()
  const imgs = [
    [{
      img:'1.png',
      name:'🌤|天',
      content:'云想衣裳花想容，春风拂槛露华浓。——李白《清平调·其一》'
    },
    {
      img:'2.png',
      name:'🌤|楼',
      content:'春宵一刻值千金，花有清香月有阴。——苏轼《春宵·春宵一刻值千金》'
    },
    {
      img:'3.png',
      name:'☁️|海',
      content:'雨打梨花深闭门，忘了青春，误了青春。——唐寅《一剪梅·雨打梨花深闭门》'
    }],[
    {
      img:'4.png',
      name:'啾啾',
      content:'人面不知何处去，桃花依旧笑春风。——崔护《题都城南庄》'
    },
    {
      img:'5.png',
      name:'Mix 4',
      content:'春风得意马蹄疾，一日看尽长安花。——孟郊《登科后》'
    },
    {
      img:'6.png',
      name:'🌤',
      content:'似此星辰非昨夜，为谁风露立中宵。——黄景仁《绮怀》'
    }],[
    {
      img:'7.png',
      name:'橙子',
      content:'林花谢了春红，太匆匆。无奈朝来寒雨晚来风。——李煜《相见欢·林花谢了春红》'
    },
    {
      img:'8.png',
      name:'冰妍',
      content:'今人不见古时月，今月曾经照古人。——李白《把酒问月·故人贾淳令予问之》'
    },
    {
      img:'9.png',
      name:'⛅',
      content:'自在飞花轻似梦，无边丝雨细如愁。——秦观《浣溪沙·漠漠轻寒上小楼》'
    }]
  ]
  const clickCard = item=>{
    console.log(item);
    setVisable(true)
    setImg(`/gallery/${item.img}`)
    setContent(`${item.content}`)
    setTitle(`${item.name}`)
  }
  // eslint-disable-next-line array-callback-return
  const imgList = imgs.map(list =>
    // eslint-disable-next-line array-callback-return
    list.map(item =>(
      <Card
      hoverable
      style={{width:220, height:200}}
      key={item.img}
      // 卡片封面
      cover={
      <img src={`/gallery/${item.img}`}
      alt={`/gallery/${item.img}`}
      style={{height:140,borderRadius:3}}
      onClick={()=>{
        clickCard(item)
      }}/>
      }
      >
        <Meta style={{textAlign:'center'}} description={item.name}/>
      </Card>
      // console.log(item)
    ))
    // console.log(list)
  )

  return (
      <div className="card-wrap">
          <Row gutter={80}>
          {/* <img src='./gallery/5.png' alt='5.png' height={300}/> */}
            <Col md={25}>{imgList[0]}</Col>
            <Col md={25}>{imgList[1]}</Col>
            <Col md={25}>{imgList[2]}</Col>
          </Row>
          <Modal
          open={visable}
          width={620}
          // height={100}
          footer={null}
          onCancel={()=>{
            setVisable(false)
          }}>
            <Card
            cover={
              <img src={img} alt='聚焦'
              style={{
                height:300,
                boxShadow: '2px 2px 50px rgba(0, 0, 0, 0.4)',
                borderRadius:6
              }}/>
            }
            >
            <Meta style={{textAlign:'center'}}
            title={title}
            description={content}/>
            </Card>
          </Modal>
      </div>
  )
}
