'use strict'

const e = React.createElement

const Input = window.antd.Input

const Button = window.antd.Button

class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 150, placeholder: '' }
  }

  handleLengthChange = evt => {
    this.setState({ width: evt.target.value || 150 })
  }

  handleTooltipChange = evt => {
    this.setState({ placeholder: evt.target.value || '' })
  }

  handleAdd = () => {
    const editor = parent.tinymce.activeEditor

    const inputtextStyles = `
      border: none;
      border-bottom: 1px solid #38a8a9;
    `

    editor.insertContent(`
      <input
        class="ant-input antd-input-sm ant-input-borderless"
        placeholder="${this.state.placeholder}"
        style="${inputtextStyles}; width: ${this.state.width}px;"
        type="text"
        value="">
    `)

    editor.undoManager.add()
    editor.windowManager.close()
  }

  render() {
    const { width, placeholder } = this.state

    return (
      <div style={{ padding: 24, paddingTop: 32 }}>
        長度：
        <input
          style={{ marginRight: 8 }}
          value={width}
          onChange={this.handleLengthChange}
        />
        Tooltip：
        <input
          style={{ marginRight: 10 }}
          value={placeholder}
          onChange={this.handleTooltipChange}
        />
        <Button size="small" type="primary" onClick={this.handleAdd}>
          加入
        </Button>
        <div style={{ marginTop: 12 }}>
          預覽：
          <Input
            size="small"
            bordered={false}
            style={{ width, marginTop: 5, borderBottom: '1px solid #38a8a9' }}
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<InputText />, document.getElementById('root'))
