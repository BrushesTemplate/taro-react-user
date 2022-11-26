import {usePageConfig} from '../hooks';
import DynamicComponent from './dynamicComponent';

const CommonJsx = ({route, ...rest}: { route : string; [v:string]: any}) => {
  const node = usePageConfig(route)
  return (
    <DynamicComponent node={node} {...rest} />
  )
}

export default CommonJsx;
