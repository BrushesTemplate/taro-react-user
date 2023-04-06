import {BaseWrapCommon} from "@/components/baseWrapCommon";
import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import {resetStatus} from '@brushes/request';
import CommonJsx from '../../components';
import './index.scss'

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  const { skuCode } = params;

  useDidShow(() => {
    resetStatus()
  })

  return (
    <View className='container'>
      <BaseWrapCommon>
        <CommonJsx route={path} skuCode={skuCode} />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
