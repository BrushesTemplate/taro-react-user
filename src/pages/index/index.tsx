import { View } from '@tarojs/components';
import * as materials from 's-material-react';
import get from 'lodash-es/get';
import noop from 'lodash-es/noop';
import './index.scss'

import {usePageConfig} from '../hooks';

const Index = () => {
  const node = usePageConfig()
  return (
    <View className={'container'}>
      {
        node.map(({id, props, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <View key={id} className={'monitor-node'}>
              <View className={'content'}>
                <MaterialsComponent {...props}/>
              </View>
            </View>
          );
        })
      }
    </View>
  )
}


export default Index;
