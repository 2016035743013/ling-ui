
module.exports = {
  title: "ling-ui",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', important: true }, // 标签右上会有红点显示
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: {
      '/foo/': ['' /* /foo/ */, 'one' /* /foo/one.html */, 'two' /* /foo/two.html */],

      '/bar/': ['' /* /bar/ */, 'three' /* /bar/three.html */, 'four' /* /bar/four.html */]
    },
    // 是否启用回到顶部按钮
    showBackToTop: true
  }
};