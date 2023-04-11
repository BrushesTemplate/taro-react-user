import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '@/components';
import {useState} from 'react';
import './index.scss'

const Index = () => {
  const [refreshNum, setRefresh] = useState(0);
  const { path = '/pages/index/index', params } = useRouter();
  useDidShow(() => {
    setRefresh(prevState => ++prevState)
  })
  return (
    <View className='container'>
      <CommonJsx route={path} {...params} refreshNum={refreshNum}/>
    </View>
  )
}


export default Index;
