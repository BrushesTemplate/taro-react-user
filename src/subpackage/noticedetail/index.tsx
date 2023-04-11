import {useRouter} from '@tarojs/taro';
import {BaseWrapCommon} from "@/components/baseWrapCommon";
import { View } from '@tarojs/components';
import CommonJsx from '../../components';

import './index.scss'

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  return (
    <View className='container-goods-list'>
      <BaseWrapCommon>
        <CommonJsx route={path} {...params} />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
