import { get, noop } from 'lodash-es';
import {View} from '@tarojs/components';
import * as materials from 's-material-react';
import {Fragment} from 'react';

const DynamicComponent = ({node, topPage, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          const MaterialsComponent = get(materials, type, noop);
          return (
            <Fragment key={id}>
              <MaterialsComponent {...props} {...rest} />
            </Fragment>
          );
        })
      }
    </>
  )
}

export default DynamicComponent;
