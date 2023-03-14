import Taro from '@tarojs/taro';
import { warrantyLogin } from 'qj-b2c-api';
import {get} from 'lodash-es';

async function checkSession(){
  return new Promise((resolve, reject) => {
    Taro.checkSession({
      success() {
        return resolve(true)
      },
      fail() {
        return resolve(false)
      }
    })
  })
}

async function bindSeller() {
  const token = Taro.getStorageSync('saas-token')
  const referrer = Taro.getStorageSync('referrer')
  if (!token) {
    return
  }
  if (!referrer) {
    return
  }
  // const res = await WXAPI.bindSeller({
  //   token,
  //   uid: referrer
  // })
}

// 检测登录状态，返回 true / false
async function checkHasLogined() {
  const token = Taro.getStorageSync('saas-token')
  if (!token) {
    return false
  }
  const loggined = await checkSession()
  if (!loggined) {
    Taro.removeStorageSync('saas-token')
    return false
  }
  // const checkTokenRes = await WXAPI.checkToken(token)
  // if (checkTokenRes.code != 0) {
  //   wx.removeStorageSync('token')
  //   return false
  // }
  return true
}

async function wxaCode(){
  return new Promise((resolve, reject) => {
    Taro.login({
      success(res) {
        return resolve(res.code)
      },
      fail() {
        Taro.showToast({
          title: '获取code失败',
          icon: 'none'
        })
        return resolve('获取code失败')
      }
    })
  })
}

export function login(bindImpl){
  return new Promise((resolve, reject) => {
    Taro.login({
      success: function (result) {
        warrantyLogin({
          js_code: result.code
        }).then(function (res) {
          // 异常情况
          if (!res.dataObj) {
            // 登录错误
            Taro.showToast({
              title: '无法登录',
              icon: "error",
              duration: 1500
            })
            reject()
            return;
          }

          const isReister = get(res, 'dataObj.register', "");
          const userOpenid = get(res, 'dataObj.userOpenid', "");
          Taro.setStorageSync('userOpenid', userOpenid)

          if (isReister === "true") {
            // 去绑定
            bindImpl()
            return;
          }

          const token = get(res, 'dataObj.userInfo', "{}");
          Taro.setStorageSync('saas-token', token)
          resolve('')
        })
      }
    })
  })

}

async function authorize() {
  // const code = await wxaCode()
  // const resLogin = await WXAPI.login_wx(code)
  // if (resLogin.code == 0) {
  //   wx.setStorageSync('token', resLogin.data.token)
  //   wx.setStorageSync('uid', resLogin.data.uid)
  //   return resLogin
  // }
  return new Promise((resolve, reject) => {
    Taro.login({
      success: function (res) {
        const code = res.code
        let referrer = '' // 推荐人
        let referrer_storge = wx.getStorageSync('referrer');
        if (referrer_storge) {
          referrer = referrer_storge;
        }
        // 下面开始调用注册接口
        const extConfigSync = wx.getExtConfigSync()
        if (extConfigSync.subDomain) {
          WXAPI.wxappServiceAuthorize({
            code: code,
            referrer: referrer
          }).then(function (res) {
            if (res.code == 0) {
              wx.setStorageSync('token', res.data.token)
              wx.setStorageSync('uid', res.data.uid)
              resolve(res)
            } else {
              wx.showToast({
                title: res.msg,
                icon: 'none'
              })
              reject(res.msg)
            }
          })
        } else {
          WXAPI.authorize({
            code: code,
            referrer: referrer
          }).then(function (res) {
            if (res.code == 0) {
              wx.setStorageSync('token', res.data.token)
              wx.setStorageSync('uid', res.data.uid)
              resolve(res)
            } else {
              wx.showToast({
                title: res.msg,
                icon: 'none'
              })
              reject(res.msg)
            }
          })
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

function loginOut(){
  Taro.removeStorageSync('token')
  Taro.removeStorageSync('uid')
}

async function checkAndAuthorize (scope) {
  return new Promise((resolve, reject) => {
    Taro.getSetting({
      success(res) {
        if (!res.authSetting[scope]) {
          Taro.authorize({
            scope: scope,
            success() {
              resolve() // 无返回参数
            },
            fail(e){
              console.error(e)
              // if (e.errMsg.indexof('auth deny') != -1) {
              //   wx.showToast({
              //     title: e.errMsg,
              //     icon: 'none'
              //   })
              // }
              Taro.showModal({
                title: '无权操作',
                content: '需要获得您的授权',
                showCancel: false,
                confirmText: '立即授权',
                confirmColor: '#e64340',
                success(res) {
                  Taro.openSetting();
                },
                fail(e){
                  console.error(e)
                  reject(e)
                },
              })
            }
          })
        } else {
          resolve() // 无返回参数
        }
      },
      fail(e){
        console.error(e)
        reject(e)
      }
    })
  })
}

const mobileRex = /^1[3456789]\d{9}$/

export default {
  checkHasLogined,
  // wxaCode: wxaCode,
  // login: login,
  // loginOut: loginOut,
  checkAndAuthorize,
  // authorize: authorize,
  // bindSeller: bindSeller
  mobileRex
}
