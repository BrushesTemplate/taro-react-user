import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index' } = Taro.getCurrentInstance().router;
  return (
    <View className='container'>
      <CommonJsx route={path} />
    </View>
  )
}


export default Index;