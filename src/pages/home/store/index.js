let home = {
  state: {
    navCardData: [
      {
        id: 1,
        title: "个人空间",
        url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1075582836,1925692375&fm=26&gp=0.jpg",
        details: "信息和经历",
        enterType: true,
        offset: 2,
        routerUrl:'/self',
      },
      {
        id: 2,
        title: "Vue.js",
        url: "https://cn.vuejs.org/images/logo.png",
        details:
          "Vue.js是一套用于构建用户界面的渐进式框架。",
        enterType: false,
        offset: 6,
        routerUrl:'/Vue',
      },
      {
        id: 3,
        title: "React.js",
        url:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        details: "React.js是一个用于构建用户界面的 JavaScript 库",
        enterType: true,
        offset: 4,
        routerUrl:'/React',
      },
      {
        id: 4,
        title: "components",
        url: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        details: "基于antd和element自己封装的一些组件",
        enterType: false,
        offset: 8,
        routerUrl:'/Components',
      }
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
}

export default home