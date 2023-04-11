import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index' } = useRouter();

  return (
    <View className='container'>
      <CommonJsx route={path} />
    </View>
  )
}


export default Index;
