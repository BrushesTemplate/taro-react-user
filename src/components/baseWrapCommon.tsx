import React, {createContext, useEffect, useMemo, useState} from "react";
import Taro, {useDidShow, useRouter} from "@tarojs/taro";
import { get } from 'lodash-es'
import {View, ScrollView} from "@tarojs/components";
import CommonJsx from '@/components/index';
import {getPagesRefreshStore, updatePagesRefreshStore} from '@brushes/utils';
import TabBarWeb from '@/custom-tab-web/index';
import {useGoTop} from 'qj-mobile-store';

type BaseWrapCommonProps = {
  base?: boolean
};

export const allContext = createContext({});


export const BaseWrapCommon = (props: BaseWrapCommonProps) => {

  const {goTop, scrollTop} = useGoTop();
  const { path, params } = useRouter();
  const [title, setTitle] = useState('');
  const [refreshNum, setRefresh] = useState(0);
  const { safeArea, tabBarH, menuOpcode, windowH } = useMemo(() => {

    // h5环境特殊处理
    const isWeb = Taro.getEnv() === 'WEB';
    if(isWeb) {
      const taroMenu = Taro.getStorageSync('taroMenu') || [];
      const { menuOpcode } = taroMenu.find(item => path.includes(item.pagePath)) || {}
      if(menuOpcode) {
        Taro.setStorageSync('menuOpcode', menuOpcode)
      }
    }
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

  useDidShow(() => {
    const pagesRefreshStore = getPagesRefreshStore();
    const { num } = get(pagesRefreshStore, [menuOpcode], 0);
    console.log('menuOpcode', menuOpcode, num);
    if(num > 0) {
      updatePagesRefreshStore({
        [menuOpcode]: {
          num: 0
        }
      })
      setRefresh(prevState => prevState+1)
    }
  });

  return (
    <allContext.Provider
      value={goTop}
    >
      <ScrollView
        scrollY
        enhanced
        show-scrollbar={false}
        scrollTop={scrollTop}
        scrollWithAnimation
        scrollAnimationDuration='800'
        style={{
          height: `calc(${windowH}px - ${safeArea}px - ${props.base ? tabBarH : 0}px)`
        }}
      >
        <View>
          <CommonJsx navigationBarTitle={title} goTop={goTop} refreshNum={refreshNum} route={path} {...params} />
        </View>
      </ScrollView>
      <TabBarWeb base={props.base || false} />
    </allContext.Provider>
  )
}
