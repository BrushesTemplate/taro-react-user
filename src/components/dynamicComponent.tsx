import { get, noop } from 'lodash-es';
import * as materials from 's-material-react';
import {Fragment, memo} from 'react';
import {useDataSource, useDataSourceWithContext} from '@brushes/taro-hooks';

const ComponentWithContext = memo(
  ({ component_devil_type, withPageStore, ...rest } : {component_devil_type: string; withPageStore: Map<string, any>;}) => {
  const MaterialsComponent = get(materials, component_devil_type, noop);
  const storeProps = useDataSourceWithContext(withPageStore);
  return <MaterialsComponent {...rest} {...storeProps} />
})

const ComponentNoContext = memo(({ component_devil_type, ...rest } : {component_devil_type: string;}) => {
  const MaterialsComponent = get(materials, component_devil_type, noop);
  return <MaterialsComponent {...rest} />
})

const ComponentItem = ({ type, props, ...rest } : {type: string; props: Object;}) => {
  const {propsType, withPageStore} = useDataSource(type, props, rest);
  return (
    <Fragment>
      {
        withPageStore.size > 0 ? <ComponentWithContext {...propsType} /> : <ComponentNoContext {...propsType} />
      }
    </Fragment>
  )
}

const DynamicComponent = ({node, topPage, ...rest}: { node: Array<any>; [v: string]: unknown }) => {
  return (
    <>
      {
        node.map(({id, props = {}, type}) => {
          return (
            <ComponentItem
              key={id}
              type={type}
              props={props}
              {...rest}/>
          )
        })
      }
    </>
  )
}

export default DynamicComponent;
