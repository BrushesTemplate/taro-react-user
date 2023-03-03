import {View} from '@tarojs/components';
import {useExpressInfo} from 'qj-mobile-store';
import {get} from "lodash-es";

export const ExpressInfoStep = ({code}) => {
  const { detail} = useExpressInfo(code);

  const message = get(detail, 'message');
  const list = get(detail, 'data');

  return (
    <View className='expressInfoStep'>
      {
        message === 'ok' ?
          list.map((item, index) => {
            return (
              <View key={index} className='step'>
                <View className='time'>{item.time}</View>
                <View >{item.context}</View>
              </View>
            )
          })
          :<View className='noInfo'>{message}</View>
      }
    </View>
  )
}
