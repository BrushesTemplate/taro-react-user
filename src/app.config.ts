import { tabBarList } from './routerMap/basic'
import { appendPath } from './routerMap/append'
import { account } from './routerMap/account';
import { routerMap } from '@brushes/routemap';

// 所有路由
const router = Object.values(routerMap) || [];

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shopping/index',
    'pages/classify/index',
    'pages/my/index',
    'pages/dynamicTab/index',
    ...account,
    ...appendPath
],
  // subpackages: [
  //   {
  //     "root": "packageA",
  //     "pages": appendPath
  //   }
  // ],
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
    list: tabBarList
  }
})
