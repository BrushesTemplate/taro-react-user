import {useRouter} from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Index = () => {
  const { path = '/pages/index/index', params } = useRouter();
  console.log(8, path, params)
  return (
    <View className='container'>
      <CommonJsx route={path} {...params} />
    </View>
  )
}


export default Index;
