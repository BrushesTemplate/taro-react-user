import React, {Fragment, useEffect, useMemo, useState} from "react";
import Taro, {useRouter} from "@tarojs/taro";
import {ScrollView} from "@tarojs/components";
import CommonJsx from '@/components/index';
import TabBarWeb from '@/custom-tab-web/index';
import { ApplicationContext, useApplicationContext } from 'qj-mobile-store';

type BaseWrapCommonProps = {
  base?: boolean
};

const BaseWrapCommonInner = (props: BaseWrapCommonProps) => {
  const {path, params} = useRouter();
  const [{scrollTop = 0}] = useApplicationContext();
  const [title, setTitle] = useState('');

  const {safeArea, tabBarH, menuOpcode, windowH} = useMemo(() => {
    const windowH = Taro.getSystemInfoSync().windowHeight;
    const menuOpcode = Taro.getStorageSync('menuOpcode');
    const safeArea = Taro.getStorageSync('safeArea');
    const tabBarH = Taro.getStorageSync('tabBarHeight');

    return {
      windowH,
      safeArea,
      tabBarH,
      menuOpcode
    }
  }, []);

  useEffect(() => {
    const routerMap = Taro.getStorageSync('routerMap');
    const {text = '首页'} = routerMap[menuOpcode] || {};
    Taro.setNavigationBarTitle({
      title: text
    });
    setTitle(text);
  }, [])

  return (
    <Fragment>
      <ScrollView
        scrollY
        enhanced
        scrollTop={scrollTop}
        scrollWithAnimation
        scrollAnimationDuration='800'
        show-scrollbar={false}
        style={{
          height: `calc(${windowH}px - ${safeArea}px - ${props.base ? tabBarH : 0}px)`
        }}
      >
        <CommonJsx navigationBarTitle={title} route={path} {...params} />
      </ScrollView>
      <TabBarWeb base={props.base || false}/>
    </Fragment>
  )
}

export const BaseWrapCommon = (props: BaseWrapCommonProps) => {
  return (
    <ApplicationContext>
      <BaseWrapCommonInner {...props}/>
    </ApplicationContext>
  )
}
