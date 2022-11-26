import Taro from '@tarojs/taro';

export const sucMessage = (res) => {
  Taro.showToast({
    title: res.msg,
    icon: 'success',
    duration: 1000
  })
}
