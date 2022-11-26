import Taro, {useDidShow} from '@tarojs/taro';
import { View } from '@tarojs/components';
import CommonJsx from '../../components';

const Index = () => {
  const { path, params } = Taro.getCurrentInstance().router;
  const { id = 0 } = params;

  return (
    <View className='container'>
      <CommonJsx route={path} defaultIndex={+id} />
    </View>
  )
}


export default Index;
