import {BaseWrapCommon} from "@/components/baseWrapCommon";
import Taro, {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useState } from 'react';
import CommonJsx from '../../components';


const Index = () => {
  const { path } = useRouter();
  const [userNickname, setName] = useState(Taro.getStorageSync('userNickname'))
  const [userAvatar, setAvatar] = useState(Taro.getStorageSync('userAvatar'))
  useDidShow(() => {
    setName(Taro.getStorageSync('userNickname'))
    setAvatar(Taro.getStorageSync('userAvatar'))
  })
  return (
    <View className='container'>
      <BaseWrapCommon base>
        <CommonJsx route={path} topPage userNickname={userNickname} userAvatar={userAvatar}/>
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
