import { useRouter } from '@tarojs/taro';
import {View} from '@tarojs/components';
import './index.scss'
import CommonJsx from '@/components';
import {BaseWrapCommon} from "@/components/baseWrapCommon";

const Index = () => {
  const { path } = useRouter();
  return (
    <View className='container'>
      <BaseWrapCommon>
        <CommonJsx route={path} topPage base />
      </BaseWrapCommon>
    </View>
  )
}


export default Index;
