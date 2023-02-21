import {saveUmuserPhoneByWX} from '@brushes/api';
import Taro from '@tarojs/taro';
import {useCallback} from 'react';
import {sucMessage} from '@/utils/message';
import { last } from 'lodash-es';

export const msgInfo = [
  {
    value: '1',
    text: '阅读并同意XXXXXX',
    checked: false
  }
];
export function useBindPhone() {
  return useCallback(async (values: any) => {
    console.log(13, values)
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
          const activePage = last(Taro.getCurrentPages())
          // @ts-ignore
          activePage.onLoad();
        }
      })
    } catch (err) {
      console.log(err)
    }
  }, [])
}
