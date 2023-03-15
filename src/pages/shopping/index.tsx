import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import { refreshCard } from 'qj-mobile-store';
import CommonJsx from '../../components';
import {useState} from 'react';

const Index = () => {
  const [refreshNum, setRefresh] = useState(0);
  const { path } = useRouter();
  useDidShow(() => {
    console.log('refreshCard.num', refreshCard.num);
    if(refreshCard.num > 0) {
      refreshCard.num = 0
      setRefresh(prevState => prevState+1)
    }
  })
  return (
    <View className='container'>
      <CommonJsx refreshNum={refreshNum} route={path} topPage />
    </View>
  )
}


export default Index;
