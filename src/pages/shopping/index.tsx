import {useState} from 'react';
import {BaseWrapCommon} from "@/components/baseWrapCommon";
import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import { refreshCard } from 'qj-mobile-store';
import CommonJsx from '../../components';
import './index.scss'


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
      <BaseWrapCommon base>
        <CommonJsx refreshNum={refreshNum} route={path} topPage />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
