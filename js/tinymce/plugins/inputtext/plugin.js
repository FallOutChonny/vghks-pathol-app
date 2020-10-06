tinymce.PluginManager.add('inputtext', function (editor) {
  editor.addButton('inputtext', {
    icon: 'bold',
    tooltip: '新增輸入欄位',
    onclick: () => {
      editor.windowManager.open(
        {
          url: `/vghks-pathol-app/js/tinymce/plugins/inputtext/index.html`,
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
