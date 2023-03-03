//@ts-nocheck
import {View} from '@tarojs/components';
import {useExpressInfo} from 'qj-mobile-store';
import {get} from 'lodash-es';


export const ExpressInfoTop = ({code}) => {
  const {info, detail} = useExpressInfo(code)

  const bg = get(info, 'packageList[0].contractGoodsList[0].dataPic');
  const num = get(info, 'packageList.length');
  const company = get(info, 'packageList[0].expressName');
  const expressNO = get(info, 'packageList[0].packageBillno');
  const state = get(detail, 'result');

  return (
    <View className='expressInfoTop'>
      <View
        className='goodsImg'
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <View className='tip'>共 {num} 件商品</View>
      </View>
      <View className='list'>
        {state}
        <View className='listItem'>物流状态：{state? state: '暂时无法获取物流状态'}</View>
        <View className='listItem'>快递公司：{company}</View>
        <View className='listItem'>快递单号：{expressNO}</View>
      </View>
    </View>
  )
}
