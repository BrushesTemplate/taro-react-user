import React from "react";
import Taro from "@tarojs/taro";

type BaseWrapCommonProps = {
  children: React.ReactNode;
};

export const BaseWrapCommon = (props: BaseWrapCommonProps) => {
  const safeArea = Taro.getStorageSync('safeArea');
  const tabBarH = Taro.getStorageSync('tabBarHeight');
  return (
    <view style={{
      paddingBottom: `${safeArea + tabBarH}px`
    }}
    >
      {props.children}
    </view>
  )
}
