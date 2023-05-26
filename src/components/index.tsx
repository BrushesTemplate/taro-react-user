import {TaroContextProvider, usePageConfig} from '@brushes/taro-hooks';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';

const CommonJsx = ({route, navigationBarTitle, ...rest}: { route : string; navigationBarTitle: string; [v:string]: any}) => {
  const {node, initialValue} = usePageConfig(route);
  return (
    <TaroContextProvider initialValue={initialValue}>
      <HeaderJsx navigationBarTitle={navigationBarTitle}/>
      <DynamicComponent node={node} {...rest} />
    </TaroContextProvider>
  )
}

export default CommonJsx;
