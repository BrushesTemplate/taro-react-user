import { useRouter } from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '../../components';
import './index.scss'

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  return (
    <View className='container'>
      <CommonJsx route={path} {...params} />
    </View>
  )
}


export default Index;
