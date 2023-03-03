import {View} from '@tarojs/components';
import {useExpressInfo} from 'qj-mobile-store';
import {get} from "lodash-es";

export const ExpressInfoStep = ({code}) => {
  const { detail} = useExpressInfo(code);

  const state = get(detail, 'message');

  return (
    <View className='expressInfoStep'>
      {state}
    </View>
  )
}
