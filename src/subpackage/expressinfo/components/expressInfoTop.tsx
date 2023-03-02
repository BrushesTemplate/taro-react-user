import {View} from '@tarojs/components';
import {useExpressInfo} from '../hooks';

export const ExpressInfoTop = ({code}) => {
  const {info} = useExpressInfo(code)


  return (
    <View className='expressInfoTop'>
      <View className='goodsImg'>
        <View className='tip'>共 20 件商品{info}</View>
      </View>
      <View className='list'>
        <View className='listItem'>物流状态：</View>
        <View className='listItem'>快递公司：</View>
        <View className='listItem'>快递单号：</View>
      </View>
    </View>
  )
}
