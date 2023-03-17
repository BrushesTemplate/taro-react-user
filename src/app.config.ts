import {mine} from './routerMap/mine'
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

    'subpackage/expressinfo/index',
    'subpackage/collectionlist/index',
    'subpackage/footprint/index',
    'subpackage/ratedetail/index',
    'subpackage/agreementlist/index',
    'append/bindIphone/index',

    'account/register/index',
    'account/accountLogin/index',
    'account/mobileLogin/index',
    'account/forgetPwd/index',
    'account/agreement/index',
    // 收藏列表
    ...mine,
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
