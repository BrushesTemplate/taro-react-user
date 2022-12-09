import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index' } = Taro.getCurrentInstance().router;
  console.log(8, path)
  return (
    <View className='container'>
      <CommonJsx route={path} topPage />
    </View>
  )
}


export default Index;
