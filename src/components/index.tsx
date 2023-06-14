import {usePageConfig, FastContextProvider } from '@brushes/taro-hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';
// import { FastContextProvider } from '@brushes';

const CommonJsx = ({route, navigationBarTitle, ...rest}: { route : string; navigationBarTitle: string; [v:string]: any}) => {
  const {node, initialValue} = usePageConfig(route);
  console.log(7, initialValue);
  return (
    <FastContextProvider value={initialValue}>
      <HeaderJsx navigationBarTitle={navigationBarTitle}/>
      <DynamicComponent node={node} {...rest} />
    </FastContextProvider>
  )
}

export default CommonJsx;
