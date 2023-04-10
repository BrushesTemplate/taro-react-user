import {useState} from 'react'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.scss'
import {useMenu} from '@/hooks';
import {navigatorHandler} from '@brushes/utils';

const Index = () => {
  const [color,] = useState('#b8b8b8');
  const [selectedColor,] = useState('#000000');

  const { menuList, activePath } = useMenu();

  const switchTab = (menuOpcode) => {
    navigatorHandler(menuOpcode)
    // Taro.switchTab({ url: '/' + url })
  }

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {menuList.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(item.menuOpcode)}>
            <CoverImage className='tab-bar-item-img' src={activePath.includes(item.pagePath) ? '../' + item.selectedIconPath : '../' + item.iconPath} />
            <CoverView className='tab-bar-item-view' style={{ color: activePath.includes(item.pagePath) ? selectedColor : color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

export default Index;
