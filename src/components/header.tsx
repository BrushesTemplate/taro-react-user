import {ReactNode, useEffect, useMemo, useState} from 'react';
import {navigatorBackImpl, navigatorHandler} from '@brushes/utils';
import {IconMobile} from '@brushes/simulate-component';
import {View} from '@tarojs/components';
import Taro, {useRouter} from '@tarojs/taro';
import {last} from 'lodash-es';
import {isTopPage} from "@/utils";
import './header.scss';

const env = Taro.getEnv()
const HeaderJsx = ({slot}: { slot?: ReactNode }) => {
  const [title, setTitle] = useState();
  const {path} = useRouter();

  const isHiddenHeader = useMemo(() => {
    if (env === 'WEAPP') return true;
    return /^\/pages/.test(path)
  }, [path])

  useEffect(() => {
    const lastConfig = last(Taro.getCurrentPages())
    const {navigationBarTitleText} = lastConfig.config;
    setTitle(navigationBarTitleText);
  }, [path])

  const navigator = () => {
    const flag = isTopPage();
    if(flag) {
      navigatorHandler('index')
      return
    }
    navigatorBackImpl(-1)
  }

  return (
    <>
      {isHiddenHeader ? null :
        <View className='header'>
          <IconMobile style={{fontSize: 20}} value='xiangzuo' onClick={navigator} />
          <View className='title'>{title}</View>
          <View>{slot}</View>
        </View>
      }
    </>
  )
}

export default HeaderJsx;
