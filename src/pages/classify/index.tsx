import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index' } = useRouter();
  console.log(8, path)
  return (
    <View className='container'>
      <CommonJsx route={path} topPage />
    </View>
  )
}


export default Index;
