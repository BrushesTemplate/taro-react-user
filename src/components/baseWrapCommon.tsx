import React from "react";
import Taro from "@tarojs/taro";
import {View, ScrollView} from "@tarojs/components";

type BaseWrapCommonProps = {
  children: React.ReactNode;
  base?: boolean
};

export const BaseWrapCommon = (props: BaseWrapCommonProps) => {
  const safeArea = Taro.getStorageSync('safeArea');
  const tabBarH = Taro.getStorageSync('tabBarHeight');
  return (
    <View>
      <ScrollView
        scrollY
        enhanced
        show-scrollbar={false}
        style={{
          height: `calc(100vh - ${safeArea}px - ${props.base ? tabBarH : 0}px)`
        }}
      >
        {props.children}
      </ScrollView>
    </View>
  )
}
