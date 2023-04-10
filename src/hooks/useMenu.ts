import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import { queryNewTginfoMenuTree as queryTginfoMenuTree} from 'qj-b2c-api';
import {appendPath, tabBarList} from '@/routerMap';
import {taroMessage, setRouterMap} from '@brushes/utils';

let appendPathMap = appendPath;
export function useMenu() {
  const [menuList, setMenuList] = useState([]);
  const [activePath, setPath] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const menu = Taro.getStorageSync('taroMenu') || await loadMenu()
        setMenuList(menu);
        initPath();
      } catch (err) {

      }

    })()

  }, []);

  const initPath = () => {
    const { path = '/pages/index/index' } = Taro.getCurrentInstance().router;
    setPath(path)
  }

  return {
    menuList,
    activePath
  }
}


export async function loadMenu() {
  try {
    console.log(39, 'queryTginfoMenuTree')
    const {list: result} = await queryTginfoMenuTree({
      // proappCode: '025',
      rows: 50,
      dataState: 2,
      page: 1
    })

    // 重新弄一套组装pagePath
    const tabBarData = fetchTabBarPath(result);
    if([[], undefined, null, ''].includes(tabBarData)) {
      taroMessage('租户菜单配置不正确', 'error')
      return;
    }
    Taro.setStorageSync('taroMenu', tabBarData);
    return tabBarData;
  } catch (err) {
    return []
  }

}

const routerMapInit = (list: Array<any>) => {
  const routerMap = {}

  list.forEach((item: any) => {
    routerMap[item.menuOpcode] = computedMenuPath(item)
  })

  setRouterMap(routerMap)
}

const computedMenuPath = ({ tginfoMenuPcode, tginfoMenuName }) => {
  return {
    text: tginfoMenuName,
    level: tginfoMenuPcode === '-1' ? 1 : 2,
    pagePath: tginfoMenuPcode !== '-1' ? appendPathMap.shift() : tabBarList.shift()?.pagePath
  }
}

// 底部菜单
const fetchTabBarPath = (list: Array<any>) => {
  const tabBarData = list.filter((item: any) => item.tginfoMenuPcode === '-1');

  console.log(82, tabBarData[0].menuOpcode)
  //初始化menuOpcode
  Taro.setStorageSync('menuOpcode', tabBarData[0].menuOpcode)

  const result = tabBarData.map((item, indx) => ({
    ...tabBarList[indx],
    level: 1,
    menuOpcode: item.menuOpcode,
    text: item.tginfoMenuName,
  }))

  // 初始化routerMap
  routerMapInit(list);

  return result
}
