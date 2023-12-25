// @ts-nocheck
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import ReactDOM from 'react-dom/client';
import { Spin } from "antd";
import './load.less'
import { LoadingOutlined } from '@ant-design/icons'

const request = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})

let requestCount = 0
const showLoading = () =>{
    if(requestCount===0){
        const div = document.createElement('div')
        div.setAttribute('class','load')
        document.body.append(div)
        const render = ReactDOM.createRoot(div)
        render.render(
        <Spin
        indicator={<LoadingOutlined/>}
        ></Spin>
        )
    }
    requestCount++
}
const  hideLoading = ()=>{
    // 减少请求次数
    requestCount--
    if(requestCount === 0){
        document.body.removeChild(document.querySelector('.load'))
    }
}
// 请求响应（请求拦截器，响应拦截器）
request.interceptors.request.use(config=>{
    // 发送网络请求，显示Loading
    // 用户请求需要携带token
    // 参数的序列化操作
    // console.log('请求被拦截');
    showLoading()
    return config
},error=>{
    return error
  }
)

// 响应拦截器
request.interceptors.response.use(res=>{
    hideLoading()
    return res.data
},error=>{
    if(error && error.response){
        switch(error.response.status){
            case 400:
                console.log('响应错误');
                break
            case 401:
                console.log('未授权访问');
                break
            default:
                console.log('访问错误');
        }
    }
    return error
})

export {request}