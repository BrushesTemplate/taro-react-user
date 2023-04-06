import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  return (
    <View className='container-goods-list'>
      <CommonJsx route={path} {...params} />
    </View>
  )
}


export default Index;
