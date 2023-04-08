import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import { queryNewTginfoMenuTree as queryTginfoMenuTree} from 'qj-b2c-api';
import {appendPath, menuDefaultValue} from '@/routerMap';
import {errMessage} from '@/utils/message';

let appendPathMap = appendPath;
export function useMenu() {
  const [menuList, setMenuList] = useState([]);
  const [activePath, setPath] = useState();
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
    const {list: result} = await queryTginfoMenuTree({
      // proappCode: '025',
      rows: 50,
      dataState: 2,
      page: 1
    })

    // 重新弄一套组装pagePath
    const tabBarData = fetchTabBarPath(result);
    const menuPath = fetchMenuPath(result)

    if([[], undefined, null, ''].includes(tabBarData)) {
      errMessage('租户菜单配置不正确')
      return;
    }
    Taro.setStorageSync('taroMenu', tabBarData);
    Taro.setStorageSync('menu', tabBarData.concat(menuPath));
    return tabBarData;
  } catch (err) {
    return []
  }

}


//其他栏目
const fetchMenuPath = (list: Array<any>) => {
  const menuData = list.filter((item: any) => item.tginfoMenuPcode !== '-1');
  return menuData.map(item => ({
    pagePath: computedMenuPath(item),
    text: item.tginfoMenuName,
    menuOpcode: item.menuOpcode
  }))
}

// 兼容老的 以后改
export const computedMenuPath = ({ menuJspath, }) => {
  return menuJspath || appendPathMap.unshift();
}


// 底部菜单
const fetchTabBarPath = (list: Array<any>) => {
  const tabBarData = list.filter((item: any) => item.tginfoMenuPcode === '-1');
  return tabBarData.map(item => ({
    ...menuDefaultValue[computedTabBarPath(item.menuOpcode)],
    text: item.tginfoMenuName,
    menuOpcode: item.menuOpcode
  }))
}

// 兼容老的 以后改
export const computedTabBarPath = (menuOpcode: string) => {
  const flag = menuDefaultValue.hasOwnProperty(menuOpcode)
  return flag ? menuOpcode : 'five';
}
