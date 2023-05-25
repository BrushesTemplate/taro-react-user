import React, {Fragment, useEffect, useMemo, useState} from "react";
import Taro, {useRouter} from "@tarojs/taro";
import {ScrollView} from "@tarojs/components";
import CommonJsx from '@/components/index';
import TabBarWeb from '@/custom-tab-web/index';
import {TaroContextProvider} from '@brushes/taro-hooks'

type BaseWrapCommonProps = {
  base?: boolean
};


export const BaseWrapCommon = (props: BaseWrapCommonProps) => {
  const {path, params} = useRouter();
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
        show-scrollbar={false}
        style={{
          height: `calc(${windowH}px - ${safeArea}px - ${props.base ? tabBarH : 0}px)`
        }}
      >
        <TaroContextProvider>
          <CommonJsx navigationBarTitle={title} route={path} {...params} />
        </TaroContextProvider>
      </ScrollView>
      <TabBarWeb base={props.base || false}/>
    </Fragment>
  )
}
