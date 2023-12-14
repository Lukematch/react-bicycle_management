import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Menu() {
    const [menu,setMenu] = useState([])

    const getMenu = async ()=>{
        try{
        const {data} = await axios.get(
            'https://www.fastmock.site/mock/2728fdedd7e9063e308598df4c68fe46/_api/menu'
        )
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
