import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'

const Index = () => {
  const { path = '/pages/index/index' } = useRouter();
  console.log(8, path)

  return (
    <View className='container'>
      123
    </View>
  )
}


export default Index;
