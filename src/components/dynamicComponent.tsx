import get from 'lodash-es/get';
import noop from 'lodash-es/noop';
import {View} from '@tarojs/components';
import * as materials from 's-material-react';
import Taro from "@tarojs/taro";

const DynamicComponent = ({node, base, topPage, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  const safeArea = Taro.getStorageSync('safeArea');
  const tabBarH = topPage ? Taro.getStorageSync('tabBarHeight') : 0;
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
