import {navigatorBackImpl} from '@brushes/utils';
import { IconMobile } from '@brushes/simulate-component';
import { View } from '@tarojs/components';
import Taro, {useRouter} from '@tarojs/taro';
import './header.scss';
import {ReactNode, useEffect, useMemo, useState} from 'react';
import { last } from 'lodash-es';

const env = Taro.getEnv()
const HeaderJsx = ({slot}: {slot?: ReactNode}) => {
  const [title, setTitle] = useState();
  const { path } = useRouter();

  const isHiddenHeader = useMemo(() => {
    if(env === 'WEAPP') return true;
    return /^\/pages/.test(path)
  }, [path])

  useEffect(() => {
    const lastConfig = last(Taro.getCurrentPages())
    const { navigationBarTitleText } = lastConfig.config;
    setTitle(navigationBarTitleText);
  }, [path])

  return (
    <>
      { isHiddenHeader ? null :
        <View className={'header'}>
          <IconMobile style={{fontSize: 20}} value={'xiangzuo'} onClick={() => navigatorBackImpl(-1)} />
          <View className={'title'}>{title}</View>
          <View>{slot}</View>
        </View>
      }
    </>
  )
}

export default HeaderJsx;
