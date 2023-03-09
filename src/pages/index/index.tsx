import Taro, {useDidShow, useRouter} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss'
import { getEnv } from '@brushes/utils';
import CommonJsx from '@/components';
import {BaseWrapCommon} from "@/components/baseWrapCommon";

const Index = () => {
  const { path } = useRouter();
  console.log(10, path);
  useDidShow(async () => {
    console.log('navigator.userAgent.toLowerCase()', navigator.userAgent.toLowerCase())
    console.log(13, '123123123页面重新加载', getEnv(), navigator, Taro.getEnv(), Taro.ENV_TYPE);
  })

  return (
    <View className='container'>
      <BaseWrapCommon>
        <CommonJsx route={path} topPage base />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
