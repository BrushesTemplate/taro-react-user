import {useDidShow, useRouter} from '@tarojs/taro';
import {Button, View} from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';
import {useLogin} from '../../hooks';
import {BaseWrapCommon} from "../../components/baseWrapCommon";

const Index = () => {
  const { path = '/pages/index/index' } = useRouter();
  const loginImpl = useLogin();

  useDidShow(() => {
    console.log(13, '页面重新加载',)
  })

  return (
    <View className='container'>
      <BaseWrapCommon>
        <Button onClick={loginImpl}>登录</Button>
        <CommonJsx route={path} topPage base />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
