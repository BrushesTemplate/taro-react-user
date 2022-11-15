import get from 'lodash-es/get';
import noop from 'lodash-es/noop';
import {View} from '@tarojs/components';
import * as materials from 's-material-react';

const CommonJsx = ({node}: { node : Array<any>}) => {

  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <View key={id} className='monitor-node'>
              <View className='content'>
                <MaterialsComponent {...props} />
              </View>
            </View>
          );
        })
      }
    </>
  )
}

export default CommonJsx;
