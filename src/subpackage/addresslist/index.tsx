import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useState } from 'react';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const [refreshNum, setRefreshNum] = useState(0);
  const { path } = useRouter();
  useDidShow(() => {
    setRefreshNum(prevState => ++prevState)
  })
  return (
    <View className='container'>
      <CommonJsx route={path} refreshNum={refreshNum} />
    </View>
  )
}


export default Index;
