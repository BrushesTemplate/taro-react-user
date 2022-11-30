import {useState} from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'
import {useMenu} from '../hooks';

const Index = () => {
  const [color,] = useState('#444');
  const [selectedColor,] = useState('#DC143C');

  const { menuList, activePath } = useMenu();

  const switchTab = (url) => {
    Taro.switchTab({ url })
  }

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {menuList.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(item.menuJspath)}>
            <CoverImage className='tab-bar-item-img' src={activePath === item.menuJspath ? item.selectedIconPath : item.iconPath} />
            <CoverView className='tab-bar-item-view' style={{ color: activePath === item.menuJspath ? selectedColor : color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

export default Index;
