import {useState} from "react";
import {Form} from 'antd-mobile';
import Taro from '@tarojs/taro';
import {saveUmuserPhone, saveUmuserPhoneVCode, login, updateUmuserPw} from 'qj-b2c-api';
import {errorCallback} from '@brushes/request';
import {setStorage} from '@brushes/utils';


export const useAccountForm = (type?: string) => {
  const [form] = Form.useForm();
  const [submitLock, setSubmitLock] = useState(false);

  const onFinish = async (formVal) => {
    if (submitLock) return;
    switch (type) {
      case 'reg':
        await regSubmit(formVal);
        break;
      case 'mobileLogin':
        await mobileLoginSubmit(formVal);
        break;
      case 'accountLogin':
        await accountLoginSubmit(formVal);
        break;
      case 'forgetPwd':
        await forgetPwdSubmit(formVal);
        break;
    }
  }

  const regSubmit = async (formVal) => {
    const params = {
      userPhone: formVal.mobile,
      code: formVal.code,
      userPwsswd: formVal.password,
      userinfoType: 1,
      userName: formVal.mobile
    }
    try {
      setSubmitLock(true)
      await saveUmuserPhone(params);
      Taro.navigateBack({
        delta: 1
      })
    } catch (err) {
      console.log(27, err);
    } finally {
      setSubmitLock(false)
    }
  }

  const mobileLoginSubmit = async(formVal) => {
    const params = {
      userPhone: formVal.mobile,
      code: formVal.code,
      userinfoType: 1,
    }
    try {
      setSubmitLock(true)
      const result = await saveUmuserPhoneVCode(params);
      setStorage('saas-token', result.dataObj.ticketTokenid)
      Taro.navigateBack({
        delta: stackLength(),
        success: (res) => {
          console.log('调用前', res);
          errorCallback();
        }
      })
    } catch (err) {
      console.log(27, err);
    } finally {
      setSubmitLock(false)
    }
  }

  const accountLoginSubmit = async (formVal) => {
    const params = {
      loginName: formVal.account,
      passwd: formVal.password,
      code: 1234
    }
    try {
      setSubmitLock(true)
      const result = await login(params);
      setStorage('saas-token', result.dataObj.ticketTokenid);
      Taro.navigateBack({
        delta: stackLength(),
        success: function () {
          errorCallback()
        }
      })
    } catch (err) {
      console.log(27, err);
    } finally {
      setSubmitLock(false)
    }
  }

  const forgetPwdSubmit = async (formVal) => {
    console.log(70, formVal)
    const params = {
      userPhone: formVal.mobile,
      code: formVal.code,
      userPwsswd: formVal.password,
    }
    try {
      setSubmitLock(true)
      await updateUmuserPw(params);
      Taro.navigateBack({
        delta: 1,
      })
    } catch (err) {
      console.log(27, err);
    } finally {
      setSubmitLock(false)
    }
  }

  const stackLength = () => {
    const arr = Taro.getCurrentPages();
    const obj = {
      pageIndex: 0
    }
    for(let i=0; i<arr.length; i++) {
      if(arr[i]['$taroPath'].indexOf('/account/')>=0) {
        if(i===0) {
          obj.pageIndex = 0
        }else {
          obj.pageIndex = arr.length-i
        }
        break
      }
    }
    return obj.pageIndex;
  }


  const goRegister = () => {
    Taro.navigateTo({
      url: 'account/register/index'
    })
  }

  const goAccountLogin = () => {
    Taro.navigateTo({
      url: 'account/accountLogin/index'
    })
  }

  const goMobileLogin = () => {
    Taro.navigateTo({
      url: 'account/mobileLogin/index'
    })
  }

  const goForgetPwd = () => {
    Taro.navigateTo({
      url: 'account/forgetPwd/index'
    })
  }


  return {
    form,
    onFinish,
    goRegister,
    goAccountLogin,
    goMobileLogin,
    goForgetPwd
  }
}
