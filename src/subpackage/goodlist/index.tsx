import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index', params } = Taro.getCurrentInstance().router;
  const { classtreeCode } = params;
  console.log(8, path, params)
  return (
    <View className='container'>
      <CommonJsx route={path} classtreeCode={classtreeCode} />
    </View>
  )
}


export default Index;
