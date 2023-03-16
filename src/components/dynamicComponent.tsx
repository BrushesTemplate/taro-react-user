import { get, noop } from 'lodash-es';
import {View} from '@tarojs/components';
import * as materials from '@brushes/react-material';
import Taro from "@tarojs/taro";
import {useMemo} from 'react';

const env = Taro.getEnv()
const DynamicComponent = ({node, base, topPage, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  const safeArea = Taro.getStorageSync('safeArea');
  const tabBarH = useMemo(() => {
    let heightDefault = 0

    // h5 非tab页面
    if (env === 'WEB' && !topPage) {
      heightDefault = 37
    }

    return topPage ? Taro.getStorageSync('tabBarHeight') : heightDefault;
  }, [])

  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <View key={id} className='monitor-node' style={{
              height: base ? '' : `calc(100vh - ${safeArea}px - ${tabBarH}px)`
            }}
            >
              <View className='content' style={{height: '100%'}}>
                <MaterialsComponent {...props} {...rest} />
              </View>
            </View>
          );
        })
      }
    </>
  )
}

export default DynamicComponent;
