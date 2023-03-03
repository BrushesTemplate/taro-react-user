import {usePageConfig} from '@/hooks';
import DynamicComponent from './dynamicComponent';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  console.log(5, route);
  const node = usePageConfig(route)
  return (
    <DynamicComponent node={node} {...rest} />
  )
}

export default CommonJsx;
