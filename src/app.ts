import { Component, PropsWithChildren } from 'react'
import './app.scss'
import { setTaro } from '@brushes/utils';
import {safeArea} from "./utils";
import { requestInit } from "@brushes/request";
import { initApplication } from '@brushes/taro-hooks';
import {appendPath, tabBarList} from '@/routerMap';
import { queryNewTginfoMenuTree, getPfsModelTagValueByTginfo } from 'qj-b2c-api';
import Taro,
{ getStorageSync, setNavigationBarTitle, setStorageSync, showToast, removeStorageSync, createSelectorQuery }
from '@tarojs/taro';
class App extends Component<PropsWithChildren> {

  componentDidMount () {
    /**
     * 初始化
     * taro
     * request
     * 应用
     */
    setTaro(Object.assign(Taro,
      { getStorageSync, setNavigationBarTitle, setStorageSync, showToast, removeStorageSync, createSelectorQuery }
    ));

    requestInit({
      isWechat: Taro.getEnv() === 'WEAPP',
      baseUrl: Taro.getEnv() === 'WEAPP' ? process.env.WEAPP : process.env.WEB
    });

    initApplication({
      tabBar: tabBarList,
      subpackage: appendPath,
      menuTreeIo: queryNewTginfoMenuTree,
      pageInfoIo: getPfsModelTagValueByTginfo
    });
    safeArea()
    // if(process.env.NODE_ENV === 'development' || Taro.getEnv() === 'WEAPP') {
    //   return
    // }
    //
    // const fly = flyInit();
    // fly.interceptors.request.use((config) => {
    //   //给所有请求添加自定义header
    //   config.headers = {
    //     'saas-token': getStorage('saas-token'),
    //   }
    //   if(Taro.getEnv() === 'WEB') {
    //     config.baseURL = location.origin + '/'
    //   }
    //   return config;
    // })
    // /**
    //  * 初次加载判断网络情况
    //  * 无网络状态下根据实际情况进行调整
    //  */
    // wx.getNetworkType({
    //   success(res) {
    //     const networkType = res.networkType
    //     if (networkType === 'none') {
    //       // that.globalData.isConnected = false
    //       wx.showToast({
    //         title: '当前无网络',
    //         icon: 'loading',
    //         duration: 2000
    //       })
    //     }
    //   }
    // });
    // /**
    //  * 监听网络状态变化
    //  * 可根据业务需求进行调整
    //  */
    // wx.onNetworkStatusChange(function(res) {
    //   if (!res.isConnected) {
    //     // that.globalData.isConnected = false
    //     wx.showToast({
    //       title: '网络已断开',
    //       icon: 'loading',
    //       duration: 2000
    //     })
    //   } else {
    //     // that.globalData.isConnected = true
    //     wx.hideToast()
    //   }
    // })

  }

  componentDidShow () {
    console.log(63, Taro);
  }

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
