import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import { menuDefaultValue } from './basic';
import './index.scss'
import {queryTginfoMenuTree} from '@brushes/api';

const Index = () => {
  const [menuList, setMenuList] = useState([]);
  const [activePath, setPath] = useState('/pages/index/index');
  const [color,] = useState('#444')
  const [selectedColor,] = useState('#DC143C')

  useEffect(() => {
    // @ts-ignore
    (async () => {
      const menuData = Taro.getStorageSync('taroMenu')
      if(menuData) {
        setMenuList(menuData);
        initPath()
        return;
      }
      try {
        const result = await queryTginfoMenuTree({
          tginfoCode: '6f91dfb2775547aea82eca67bd568239',
          rows: 30,
          page: 1
        })
        const menu = result.map(item => {
          return menuDefaultValue[item.menuJspath]
        })
        console.log(26, menu, result)
        if([[], undefined, null, ''].includes(menu)) {
          Taro.showToast({
            title: '租户菜单配置不正确',
            icon: 'error',
            duration: 1500
          });
          return;
        }
        setMenuList(menu);
        Taro.setStorageSync('taroMenu', menu);
        Taro.setStorageSync('menu', result.concat(result[0].children));
        initPath()
      } catch (err) {

      }

    })()

  }, []);

  const initPath = () => {
    const { path = '/pages/index/index' } = Taro.getCurrentInstance().router;
    setPath(path)
  }

  const switchTab = (url) => {
    Taro.switchTab({ url })
  }

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {menuList.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(item.pagePath)}>
            <CoverImage className='tab-bar-item-img' src={activePath === item.pagePath ? item.selectedIconPath : item.iconPath} />
            <CoverView className='tab-bar-item-view' style={{ color: activePath === item.pagePath ? selectedColor : color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

export default Index;
