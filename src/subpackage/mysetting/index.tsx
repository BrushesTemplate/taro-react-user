import { View } from '@tarojs/components';
import HeaderJsx from "@/components/header";
import {IconMobile} from '@brushes/simulate-component';
import Taro from '@tarojs/taro';
import {miniLogout} from 'qj-b2c-api';
import './index.scss'

const Index = () => {

  const goBind = () => {
    Taro.navigateTo({
      url: `/account/confirmPhone/index`
    })
  }

  const logout = async () => {
    await miniLogout()
      Taro.switchTab({
        url: `/pages/index/index`
      })
  }

  return (
    <View className='mySetting'>
      <HeaderJsx />
      <View className='item' onClick={goBind}>
        <View>绑定手机</View>
        <View><IconMobile value='xiangyou1' /></View>
      </View>

      <View className='btn' onClick={logout}>退出登录</View>
    </View>

  )
}


export default Index;
