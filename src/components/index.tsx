import {usePageConfig} from '@/hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';
import {Fragment} from 'react';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  const node = usePageConfig(route);
  return (
    <Fragment>
      <HeaderJsx />
      <DynamicComponent node={node} {...rest} />
    </Fragment>
  )
}

export default CommonJsx;
