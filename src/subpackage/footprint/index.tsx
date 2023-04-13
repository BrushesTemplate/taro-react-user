
import { useRouter} from "@tarojs/taro";
import {View} from '@tarojs/components';

import CommonJsx from '../../components';


const Index = () => {
  const {path } =useRouter()
  
  return (
    <View className='container'>
      <CommonJsx route={path} />
    </View>
  )
}

export default Index;
