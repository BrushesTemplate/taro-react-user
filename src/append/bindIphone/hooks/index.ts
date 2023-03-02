import {saveUmuserPhoneByWX} from 'qj-b2c-api';
import Taro from '@tarojs/taro';
import {useCallback} from 'react';
import {sucMessage} from '@/utils/message';
// import { last } from 'lodash-es';

export const msgInfo = [
  {
    value: '1',
    text: '阅读并同意XXXXXX',
    checked: false
  }
];
export function useBindPhone() {
  return useCallback(async (callback, values: any) => {
    try {
      const data = await saveUmuserPhoneByWX({
        ...values,
        userOpenid: Taro.getStorageSync('userOpenid')
      })
      // 异常情况
      if (!data.dataObj) {
        // 登录错误
        Taro.showToast({
          title: '无法登录',
          icon: "error",
          duration: 1000
        })
        return;
      }

      if(data.success) {
        sucMessage(data);
      }

      Taro.setStorageSync('saas-token', JSON.stringify(data.dataObj));
      Taro.navigateBack({
        delta: 1,
        complete: () => {
          callback()
        }
      })
    } catch (err) {
      console.log(err)
    }
  }, [])
}
