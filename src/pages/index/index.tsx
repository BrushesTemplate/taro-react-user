import {useDidShow, useRouter} from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss'
import { auth } from '@/utils'
import CommonJsx from '@/components';
import {BaseWrapCommon} from "@/components/baseWrapCommon";

const Index = () => {
  const { path } = useRouter();

  useDidShow(async () => {
    console.log(13, '页面重新加载', await auth.checkHasLogined())
  })

  const getPhoneNumber = (e) => {
    console.log(16, e);
  }

  return (
    <View className='container'>
      <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">微信授权登录</button>
      <BaseWrapCommon>
        <CommonJsx route={path} topPage base />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
