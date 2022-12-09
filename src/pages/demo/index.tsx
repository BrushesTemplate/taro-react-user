import {useEffect, useState} from "react";
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import {Popup, Button} from 'antd-mobile';

import './index.scss';

const Demo = () => {
  const [visible1, setVisible1] = useState(false)

  useEffect(() => {
    savaSafeArea()
  }, [])

  const savaSafeArea = () => {
    try {
      const systemInfo = Taro.getSystemInfoSync();
      const screenHeight = systemInfo.screenHeight;
      const safeHeight = systemInfo.safeArea?.bottom || 0;
      Taro.setStorageSync('safeArea', screenHeight-safeHeight);
    }catch (e) {
      console.log(e)
    }
  }
  return (
    <View
      className={'demo'}
      style={{
        height: `calc(100vh - ${Taro.getStorageSync('safeArea')}px)`
      }}
    >123

      {/*<Button onClick={() => {*/}
      {/*  setVisible1(true)*/}
      {/*}}>ant</Button>*/}
      {/*<Popup*/}
      {/*  visible={visible1}*/}
      {/*  onMaskClick={() => {*/}
      {/*    setVisible1(false)*/}
      {/*  }}*/}
      {/*  bodyStyle={{ height: '40vh' }}*/}
      {/*>*/}
      {/* 123123123123123123123123123123123123123123123123123123123123123*/}
      {/*</Popup>*/}

    </View>
  )
}

export default Demo;
