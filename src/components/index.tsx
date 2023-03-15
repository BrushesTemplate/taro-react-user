import {usePageConfig} from '@/hooks';
import {View} from '@tarojs/components';
import HeaderJsx from '@/components/header';
import DynamicComponent from './dynamicComponent';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  const node = usePageConfig(route);
  return (
    <View className='wrapper'>
      <HeaderJsx />
      <DynamicComponent node={node} {...rest} />
    </View>
  )
}

export default CommonJsx;
