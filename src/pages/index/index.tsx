import Taro, {useDidShow, useRouter} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss'
import CommonJsx from '@/components';
import {BaseWrapCommon} from "@/components/baseWrapCommon";

const Index = () => {
  const { path } = useRouter();

  const isWeixin = function () { //判断是否是微信
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
  };

  useDidShow(async () => {
    console.log('navigator.userAgent.toLowerCase()', navigator.userAgent.toLowerCase())
    console.log(13, '123123123页面重新加载', isWeixin(), Taro.getEnv());
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
