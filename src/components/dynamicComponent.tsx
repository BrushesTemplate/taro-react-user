import get from 'lodash-es/get';
import noop from 'lodash-es/noop';
import {View} from '@tarojs/components';
import * as materials from 's-material-react';

const DynamicComponent = ({node, ...rest}: { node : Array<any>; [v:string]: unknown}) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <View key={id} className='monitor-node'>
              <View className='content'>
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
