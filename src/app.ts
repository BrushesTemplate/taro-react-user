import { Component, PropsWithChildren } from 'react'
import './app.scss'
import Taro from '@tarojs/taro';
import {safeArea} from "./utils";
import { fly } from "@brushes/request";
class App extends Component<PropsWithChildren> {

  componentDidMount () {
    fly.interceptors.request.use((config) => {
      //给所有请求添加自定义header
      config.headers = {
        'saas-token': Taro.getStorageSync('saas-token'),
      }
      if(Taro.getEnv() === 'WEAPP') {
        config.headers['Saas-Agent'] = 'qj-wemini';
        config.baseURL = 'https://b2cweapp40673927e2a14ea49df338dc06bd4e9a.saas.qjclouds.com/'
      } else {
        config.baseURL = process.env.REACT_APP_BASE_URL
      }
      return config;
    })
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
    safeArea()
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
