import Taro, {useDidShow} from '@tarojs/taro';
import {Button, View} from '@tarojs/components';
import {wxLogin} from '@brushes/api';

import './index.scss'
import CommonJsx from '../../components';
// import {useLogin} from '../../hooks';

const Index = () => {
  const { path } = Taro.getCurrentInstance().router;
  console.log('11============>', path, Taro);
  useDidShow(() => {
    console.log(13, '页面重新加载',)
  })

  return (
    <View className='container'>
      <Button onClick={wxLogin}>登录</Button>
      <CommonJsx route={path} />
    </View>
  )
}


export default Index;
