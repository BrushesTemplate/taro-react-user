import { get, noop } from 'lodash-es';
import * as materials from 's-material-react';
import {Fragment, memo} from 'react';
import {useDataSource, useDataSourceWithContext} from '@brushes/taro-hooks';
import {View} from "@tarojs/components";
import {getStorage} from "@brushes/utils";

const ComponentWithContext = memo(
  ({
     component_devil_type,
     withPageStore,
     style,
     ...rest } : {
    component_devil_type: string;
    style: Object;
    withPageStore: Map<string, any>;
  }) => {
  const MaterialsComponent = get(materials, component_devil_type, noop);
  const storeProps = useDataSourceWithContext(withPageStore);
    return <View style={style}><MaterialsComponent {...rest} {...storeProps} /></View>
})

const ComponentNoContext = memo((
  {
    component_devil_type,
    style,
    ...rest
  } : {
    component_devil_type: string;
    style:Object
  }) => {
  const MaterialsComponent = get(materials, component_devil_type, noop);
  return <View style={style}><MaterialsComponent {...rest} /></View>
})

const ComponentItem = ({ type, props, style,  ...rest } : {type: string; props: Object; style: Object}) => {
  const {propsType, withPageStore} = useDataSource(type, props, rest);
  return (
    <Fragment>
      {
        withPageStore.size > 0 ? <ComponentWithContext {...{...propsType, style}} /> : <ComponentNoContext {...{...propsType, style}}  />
      }
    </Fragment>
  )
}

const DynamicComponent = ({node, topPage, base, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          let stickyDistance = '';

          if(props.sticky) {
            if(base) {
              stickyDistance = `${getStorage('safeArea') + getStorage('tabBarHeight')}px`
            }else {
              stickyDistance = `${getStorage('safeArea')}px`
            }
          } else {
            stickyDistance = '0'
          }
          return (
            <ComponentItem
              key={id}
              type={type}
              props={props}
              style={{
                marginBottom: stickyDistance,
                position: props.sticky? 'fixed': 'static',
                width: '100%',
                bottom: 0
              }}
              {...rest}
            />
          )
        })
      }
    </>
  )
}

export default DynamicComponent;
