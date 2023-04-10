import { menuDefaultValue } from './routerMap/basic'
// import { appendPath } from './routerMap/append'
import { routerMap } from '@brushes/routemap';

// 所有路由
const router = Object.values(routerMap) || [];
// tab
const list = Object.values(menuDefaultValue) || [];

export default defineAppConfig({
  pages: router,
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
    list
  }
})
