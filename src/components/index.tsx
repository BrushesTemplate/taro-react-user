import {usePageConfig} from '../hooks';
import DynamicComponent from './dynamicComponent';

const CommonJsx = ({route}: { route : string}) => {
  const node = usePageConfig(route)
  return (
    <DynamicComponent node={node} />
  )
}

export default CommonJsx;
