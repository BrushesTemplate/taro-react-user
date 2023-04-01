import { get, noop } from 'lodash-es';
import {View} from '@tarojs/components';
import * as materials from 's-material-react';
import Taro from "@tarojs/taro";

const env = Taro.getEnv()
const DynamicComponent = ({node, base, topPage, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <View key={id} className='monitor-node'>
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
