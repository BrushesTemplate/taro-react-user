export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shopping/index',
    'pages/classify/index',
    'pages/my/index',
     // 订单
    'subpackage/orderlist/index',
    'subpackage/orderdetail/index',

    'subpackage/search/index',

    // 商品
    'subpackage/goodlist/index',
    'subpackage/gooddetail/index',
    'subpackage/orderconfirm/index',
    'subpackage/result/index',
    'subpackage/rate/index',
    'subpackage/paymentmode/index',

    // demo
    'pages/demo/index',

    // 地址
    'subpackage/addresseditor/index',
    'subpackage/addresslist/index',



    // 后面需要扩充的页面
    'subpackage/bindPhone/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#444',
    selectedColor: '#DC143C',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/classify/index',
        selectedIconPath: 'images/tabbar_cate_on.png',
        iconPath: 'images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/shopping/index',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '个人中心'
      }
    ]
  }
})
