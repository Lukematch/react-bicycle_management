// @ts-nocheck
import React from 'react'
import { Card, Carousel } from 'antd'
import '../../index.less'
// import './App.less'
// @ts-ignore

// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// }

export default function Carousels() {
  // const onChange = (currentSlide) => {
  //   // console.log(currentSlide);
  // };
  const imgStyle = {
    height:500,
    width:888,
    boxShadow: '2px 2px 50px rgba(0, 0, 0, 0.1)',
    borderRadius:20
  }
  return (
      <div className="warpper">
        {/* <Card className='card-warp'> */}
          <Carousel
          // afterChange={onChange}
          style={{
            height:500,
            width:888,
            boxShadow: '2px 2px 50px rgba(0, 0, 0, 0.8)',
            borderRadius:20
          }}
          effect='fade'
          autoplay
          dotPosition='right'
          >
            <div>
              <img
              style={imgStyle}
              alt='1.png'
              src='/gallery/1.png'/>
            </div>
            <div>
              <img
              style={imgStyle}
              alt='2.png'
              src='/gallery/2.png'/>
            </div>
            <div>
              <img
              style={imgStyle}
              alt='5.png'
              src='/gallery/5.png'/>
            </div>
            <div>
              <img
              style={imgStyle}
              alt='6.png'
              src='/gallery/6.png'/>
            </div>

          </Carousel>
        {/* </Card> */}
      </div>
  )
}
