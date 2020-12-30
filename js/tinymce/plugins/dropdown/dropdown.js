const React = window.React
const ReactDOM = window.ReactDOM
const { Button } = window.antd

let index = 0

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 150,
      placeholder: '',
      items: [],
      itemName: '',
    }
  }

  handleLengthChange = evt => {
    this.setState({ width: evt.target.value || 150 })
  }

  handleTooltipChange = evt => {
    this.setState({ placeholder: evt.target.value || '' })
  }

  onNameChange = event => {
    this.setState({
      itemName: event.target.value,
    })
  }

  handleItemAdd = () => {
    const { items, itemName } = this.state

    if (!itemName || itemName === '') {
      return
    }

    this.setState({
      items: [...items, itemName || `新項目 ${index++}`],
      itemName: '',
    })
  }

  handleAdd = () => {
    const editor = window.parent.tinymce.activeEditor
    const { items, width, placeholder } = this.state

    const selectStyles = `
      height: 23px;
      margin-left: 4px;
      margin-right: 4px;
      padding-left: 8px;
      padding-right: 8px;
      border: none;
      border-bottom: 1px solid #4a4a4a;
    `

    // prettier-ignore
    editor.insertContent(`
      <select
        class="template-cloze__control"
        placeholder="${placeholder}"
        style="width: ${width}px; ${selectStyles}"
      >
        <option value="" ${placeholder ? '' : 'hidden'} disabled selected>${placeholder}</option>
        ${items.map(x => `<option>${x}</option>`)}
      </select>
    `)

    editor.undoManager.add()
    editor.windowManager.close()
  }

  handleDelete = idx => () => {
    this.setState(prev => ({
      ...prev,
      items: prev.items.filter((_, index) => index !== idx),
    }))
  }

  renderField(title) {
    return <div style={{ width: 80, display: 'inline-block' }}>{title}</div>
  }

  render() {
    const { width, placeholder, itemName, items } = this.state

    return (
      <div style={{ padding: 24, paddingTop: 32 }}>
        {this.renderField('長度：')}
        <input value={width} onChange={this.handleLengthChange} />
        <br />
        <br />
        {this.renderField('Tooltip：')}
        <input value={placeholder} onChange={this.handleTooltipChange} />
        <br />
        <br />
        {this.renderField('新增項目：')}
        <input value={itemName} onChange={this.onNameChange} />
        <a
          style={{
            cursor: 'pointer',
            marginLeft: 3,
          }}
          onClick={this.handleItemAdd}>
          新增
        </a>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          {this.renderField('預覽：')}
          <select
            style={{
              width,
              height: 32,
              paddingLeft: 8,
              paddingRight: 8,
              border: 'none',
              borderBottom: '1px solid #4a4a4a',
              marginBottom: 16,
            }}
            placeholder={placeholder}>
            <option value="" disabled selected>
              {placeholder}
            </option>
            {items.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {items.map((item, idx) => (
            <div key={item}>
              <span
                style={{ marginRight: 50, color: 'red', cursor: 'pointer' }}
                onClick={this.handleDelete(idx)}>
                x
              </span>
              {item}
            </div>
          ))}
        </div>
        <Button size="small" type="primary" onClick={this.handleAdd}>
          加入
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<Dropdown />, document.getElementById('root'))
