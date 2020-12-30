tinymce.PluginManager.add('dropdown', function (editor) {
  const basename = editor.getParam('env')
  editor.addButton('dropdown', {
    icon: 'bold',
    tooltip: '新增選單',
    onclick: () => {
      editor.windowManager.open(
        {
          url: `${basename}/js/tinymce/plugins/dropdown/index.html`,
          width: 400,
          height: 350,
          title: '下拉選單設定',
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
