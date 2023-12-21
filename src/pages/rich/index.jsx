// @ts-nocheck
import React, { useState } from 'react'
// import './App.less'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState , convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button, Card, Modal } from 'antd'

// draft-js react富文本编辑器框架
// draft-js提供convertToRaw用于把不可变的数据转换为js对象
// draftToHtml将不可变数据转换为纯Html的文本

export default function Rich() {

  const [editorState,setEditorState] = useState(EditorState.createEmpty())
  const [showText,setShowText] = useState(false)

  const getText = ()=>{
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setShowText(true)
  }
  return (
    <div style={{width:'100%'}}>
    <Card style={{
      'height':300,
      'width':900
      }}>
      <Editor
          editorState={editorState}
          onEditorStateChange={val=>setEditorState(val)}
        />
    </Card>
    <Button type='primary' onClick={getText}>提交</Button>
    <Modal
    title='富文本'
    open={showText}
    onCancel={()=>setShowText(false)}
    footer={null}
    >
      {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
    </Modal>
    </div>
  )
}
