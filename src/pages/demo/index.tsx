import {useEffect, useState} from "react";
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import {Popup, Button} from 'antd-mobile';

import './index.scss';

const Demo = () => {

  const handle = (a) => {
    console.log(11, a);
  }


  return (
    <View>
      23
      <View className="section__title">省市区选择器</View>
      <picker mode="region" bindchange={handle}>
        <View className="picker">
          当前选择：123
        </View>
      </picker>
    </View>
  )
}

export default Demo;
