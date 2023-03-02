import {useRouter} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {ExpressInfoTop} from './components';
import './index.scss';


const Index = () => {
  const { params } = useRouter();
  console.log(7, params)
  return (
    <View className='expressInfo'>
      <ExpressInfoTop code={params.code} />
    </View>
  )
}

export default Index;
