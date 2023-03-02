// import Taro from '@tarojs/taro';
import {useCallback} from 'react';
import {wxLogin} from '@brushes/request';

export function useLogin() {
  // const bindImpl = () => {
  //   Taro.navigateTo({ url: '/append/bindIphone/index' });
  // }
  return useCallback(() => {
    wxLogin()
    // login(bindImpl).then(() => {
    //   const [page] = Taro.getCurrentPages();
    //   page.onShow();
    // })
  }, []);
}
