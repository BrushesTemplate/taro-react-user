import React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

type BaseWrapCommonProps = {
  children: React.ReactNode;
};

export const BaseWrapCommon = (props: BaseWrapCommonProps) => {
  const safeArea = Taro.getStorageSync('safeArea');
  const tabBarH = Taro.getStorageSync('tabBarHeight');
  return (
    <View style={{
      paddingBottom: `${safeArea + tabBarH}px`
    }}
    >
      {props.children}
    </View>
  )
}
