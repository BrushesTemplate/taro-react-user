import {useDidShow, useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path } = useRouter();
  useDidShow(() => {
    console.log('9', path)
  })
  return (
    <View className='container'>
      <CommonJsx route={path} topPage />
    </View>
  )
}


export default Index;
