import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import {usePageConfig} from '../../hooks';
import './index.scss'
import CommonJsx from '../../common';

const Index = () => {
  const node = usePageConfig();
  console.log(9, node);
  const switchImpl = () => {
    Taro.navigateTo({
      url: '/subpackage/goods/index'
    })
  }
  return (
    <View className='container'>
      <View onClick={switchImpl}>商品</View>
      {/*<Suspense fallback={<Text>Loading...</Text>}>*/}
        <CommonJsx node={node} />
      {/*</Suspense>*/}
    </View>
  )
}


export default Index;
