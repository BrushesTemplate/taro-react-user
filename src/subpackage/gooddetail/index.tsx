import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';
import {resetStatus} from '@brushes/request';

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  const { skuCode } = params;

  useDidShow(() => {
    resetStatus()
  })

  return (
    <View className='container'>
      <CommonJsx route={path} skuCode={skuCode} />
    </View>
  )
}


export default Index;
