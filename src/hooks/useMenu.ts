import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import {queryTginfoMenuTree} from 'qj-b2c-api';
import {menuDefaultValue} from '@/custom-tab-bar/basic';
import {errMessage} from '@/utils/message';

export function useMenu() {
  const [menuList, setMenuList] = useState([]);
  const [activePath, setPath] = useState();
  useEffect(() => {
    console.log(15);
    // @ts-ignore
    (async () => {
      const menuData = Taro.getStorageSync('taroMenu')
      if(menuData) {
        setMenuList(menuData);
        initPath()
        return;
      }
      try {
        const menu = await loadMenu()
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
  const result = await queryTginfoMenuTree({
    proappCode: '025',
    rows: 30,
    page: 1
  })
  const menu = result.map(item => {
    return {
      ...menuDefaultValue[item.menuJspath],
      text: item.tginfoMenuName,
      menuOpcode: item.menuOpcode
    }
  })
  if([[], undefined, null, ''].includes(menu)) {
    errMessage('租户菜单配置不正确')
    return;
  }
  Taro.setStorageSync('taroMenu', menu);
  Taro.setStorageSync('menu', menu.concat(result[0].children));
  return menu;
}
