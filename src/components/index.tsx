import {TaroContextProvider, usePageConfig} from '@brushes/taro-hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';
import {useEffect} from 'react';
import Taro from '@tarojs/taro';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  const {node, initialValue, title} = usePageConfig(route);
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: title || '首页'
    });
  }, [title])
  return (
    <TaroContextProvider initialValue={initialValue}>
      <HeaderJsx navigationBarTitle={title}/>
      <DynamicComponent node={node} {...rest} />
    </TaroContextProvider>
  )
}

export default CommonJsx;
