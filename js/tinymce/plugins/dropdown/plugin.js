tinymce.PluginManager.add('dropdown', function (editor) {
  const prefix =
    window.location.host === 'falloutchonny.github.io'
      ? '/vghks-pathol-app'
      : ''

  editor.addButton('dropdown', {
    icon: 'bold',
    tooltip: '新增選單',
    onclick: () => {
      editor.windowManager.open(
        {
          url: `${prefix}/js/tinymce/plugins/dropdown/index.html`,
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
