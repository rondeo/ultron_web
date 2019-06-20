import React from 'react'
import ReactMarkdown from 'react-markdown'
import './doc_add.scss'
// 字符串
const initialSource = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## Tables?
| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [Espen Hovlandsdal](https://espen.codes/)
`

export default class DocAdd extends React.Component {

  constructor (...props) {
    super(...props)
    this.state = {
      input: initialSource
    }
  }
  // 输入变化
  onContentChange = (e) => {
    this.setState({
      input: e.target.innerText
    })
  }

  render() {
    return (<div className="doc-editor">
      <header className="doc-editor-header">
        header
      </header>
      {/* 内容部分 */}
      <div className="doc-editor-content">
        {/*  */}
        <div className="doc-editor">
          {/* <textarea className="doc_text-input" defaultValue={initialSource} /> */}
          <div className="doc-text-input" contentEditable="plaintext-only" onInput={this.onContentChange} />
        </div>
        {/* 预览部分 */}
        <section className="doc-preview">
          <ReactMarkdown source={this.state.input} />,
        </section>
      </div>
    </div>)
  }
}