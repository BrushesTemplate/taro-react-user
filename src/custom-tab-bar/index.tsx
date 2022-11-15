import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'

const Index = () => {
  const [list, ] = useState([
    // {
    //   pagePath: '/pages/index/index',
    //   selectedIconPath: '../images/tabbar_home_on.png',
    //   iconPath: '../images/tabbar_home.png',
    //   text: '首页'
    // },
    {
      pagePath: '/pages/cate/index',
      selectedIconPath: '../images/tabbar_cate_on.png',
      iconPath: '../images/tabbar_cate.png',
      text: '分类'
    },
    {
      pagePath: '/pages/cart/index',
      selectedIconPath: '../images/tabbar_cart_on.png',
      iconPath: '../images/tabbar_cart.png',
      text: '购物车'
    },
    {
      pagePath: '/pages/my/index',
      selectedIconPath: '../images/tabbar_my_on.png',
      iconPath: '../images/tabbar_my.png',
      text: '个人中心'
    }
  ]);
  const [activePath, setPath] = useState('/pages/index/index');
  const [color,] = useState('#444')
  const [selectedColor,] = useState('#DC143C')

  useEffect(() => {
    // @ts-ignore
    const { path = '/pages/index/index' } = Taro.getCurrentInstance().router;
    setPath(path)
  }, []);

  const switchTab = (url) => {
    Taro.switchTab({ url })
  }

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {list.map((item, index) => {
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
