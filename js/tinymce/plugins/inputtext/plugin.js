tinymce.PluginManager.add('inputtext', function (editor) {
  const basename = editor.getParam('env')
  editor.addButton('inputtext', {
    icon: 'fas fa-pencil-alt',
    tooltip: '新增輸入欄位',
    onclick: () => {
      editor.windowManager.open(
        {
          url: `${basename}/js/tinymce/plugins/inputtext/index.html`,
          width: 600,
          height: 150,
          title: '輸入欄位設定',
        },
        {
          // css_list: [innerCssPath],
          // template_list: [button, table],
          css_list: [],
          template_list: [],
        }
      )
    },
  })
})
