import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { request } from '../../utils/request'


export default function Menu() {
    const [menu,setMenu] = useState([])

    const getMenu = async ()=>{
        try{
        const {data} = await request('/menu')
        setMenu(data.menu)
        console.log(menu);
        } catch(error){
        throw new Error(error)
        }
    }
    useEffect(()=>{
        getMenu()
      },[])

    // 递归实现
    const getMenuItem = (data)=>{
        return(
        <ul>
            {
                data.map((item)=>{
                    return(
                        <li key={item.key}>
                        {item.label}
                        {item.children?getMenuItem(item.children):''}
                    </li>
                    )
                })
            }
        </ul>
        )
    }
  return (
    <div>{getMenuItem(menu)}</div>
  )
}
