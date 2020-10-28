
module.exports = {
  title: "ling-ui",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', important: true }, // 标签右上会有红点显示
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/foo/': [
        // ['one', 'page one'] /* /foo/one.html 或者 /foo 将会被重定向到 /foo/one */,
        // {'two'}, /* /foo/two.html */
        {
          title: 'Group 1',
          collapsable: false,
          children: [['one', 'group 1-1']]
        },
        {
          title: 'group 2',
          collapsable: false,
          children: [['two', 'group 2-1']]
        }
      ]
    },
    // 是否启用回到顶部按钮
    showBackToTop: true
  }
};