import {useRouter} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {ExpressInfoStep, ExpressInfoTop} from './components';
import './index.scss';


const Index = () => {
  const { params } = useRouter();
  return (
    <View className='expressInfo'>
      <ExpressInfoTop code={params.code} />
      <ExpressInfoStep code={params.code} />
    </View>
  )
}

export default Index;
