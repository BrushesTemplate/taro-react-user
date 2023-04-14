import {usePageConfig} from '@brushes/taro-hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';
import {Fragment} from 'react';

const CommonJsx = ({route, navigationBarTitle, ...rest}: { route : string; navigationBarTitle: string; [v:string]: any}) => {
  const node = usePageConfig(route);
  return (
    <Fragment>
      <HeaderJsx navigationBarTitle={navigationBarTitle}/>
      <DynamicComponent node={node} {...rest} />
    </Fragment>
  )
}

export default CommonJsx;
