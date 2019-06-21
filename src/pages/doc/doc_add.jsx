import React from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css';
import './doc_add.scss'
// 配置marked
marked.setOptions({
  highlight (code) {
    return highlight.highlightAuto(code).value
  }
})
export default class DocAdd extends React.Component {

  constructor (...props) {
    super(...props)
    this.state = {
      input: "aaaa",
      scrollIndex: 0, // 当前滚动index
    }
  }

  componentDidMount(){
    // this.setRangeIndex()
  }
  // 展示html
  get showHtml() {
    return marked(this.state.input)
  }
  // 输入变化
  onContentChange = (e) => {
    this.setState({
      input: e.target.innerText
    })
  }
  //　设置当前index 用来判断是哪个滚动条在滚动
  setCurrentIndex = (index = 0) => {
    if (index !== this.state.scrollIndex) {
      this.setState({
        scrollIndex: index
      })
    }
  } 
  // 插入值之后重新光标位置 设置光标位置
  setRangeIndex = () => {
    const obj = document.getElementById('contenteditablediv')
    if (window.getSelection) {//ie11 10 9 ff safari
        obj.focus() //解决ff不获取焦点无法定位问题
        const range = window.getSelection()//创建range
        range.selectAllChildren(obj)//range 选择obj下所有子内容
        range.collapseToEnd()//光标移至最后
    }
    else if (document.selection) {//ie10 9 8 7 6 5
        const range = document.selection.createRange()//创建选择对象
        range.moveToElementText(obj)//range定位到obj
        range.collapse(false)//光标移至最后
        range.select()
    }
  }
  render() {
    return (<div className="doc-editor">
      <header className="doc-editor-header">
        header
      </header>
      {/* 内容部分 */}
      <div className="doc-editor-content">
        {/* 输入框部分 */}
        <div className="doc-editor" onMouseOver={() => this.setCurrentIndex(0)}>
          {/* <textarea className="doc_text-input" defaultValue={initialSource} /> */}
          {/* 自定义实现的部分 */}
          <div id="contenteditablediv" className="doc-text-input" dangerouslySetInnerHTML={{__html:this.state.input}} contentEditable="plaintext-only" onInput={this.onContentChange} />
        </div>
        {/* 预览部分 */}
        <section className="doc-preview" onMouseOver={() => this.setCurrentIndex(1)} dangerouslySetInnerHTML={{__html:this.showHtml}} />
      </div>
    </div>)
  }
}