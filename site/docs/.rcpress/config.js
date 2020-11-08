
module.exports = {
  title: "ling-ui",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', important: true }, // 标签右上会有红点显示
    ],
    sidebar: {
      // '/foo/': [
      //   // ['one', 'page one'] /* /foo/one.html 或者 /foo 将会被重定向到 /foo/one */,
      //   // {'two'}, /* /foo/two.html */
      //   {
      //     title: 'Alert 警告提示',
      //     collapsable: false,
      //     children: [['one', 'group 1-1']]
      //   },
      //   {
      //     title: 'group 2',
      //     collapsable: false,
      //     children: [['two', 'group 2-1']]
      //   }
      // ]
      '/guide/': [
        // {
        //   title: 'Alert 警告提示',
        //   collapsable: false,
        //   to: 'alert'
        // },
        ['alert', 'Alert 警告提示'],
        ['button', 'Button 按钮'],
        ['Input', 'Input 输入框'],
        ['message', 'Message 消息提示']
      ]
    },
    // 是否启用回到顶部按钮
    showBackToTop: true,
    maxTocDeep: 4 // 右侧目录嵌套的标题链接
  }
};