import {useState} from "react";
import { useRouter, useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const [refreshNum, setRefreshNum] = useState(0);
  const { path = '/pages/index/index', params } = useRouter();
  useDidShow(() => {
    setRefreshNum(prevState => ++prevState)
  })
  return (
    <View className='container-order'>
      <CommonJsx route={path} refreshNum={refreshNum} {...params} />
    </View>
  )
}


export default Index;
