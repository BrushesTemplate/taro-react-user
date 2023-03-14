import {useState} from "react";
import {Form} from 'antd-mobile';
import Taro from '@tarojs/taro';
import {saveUmuserPhone, saveUmuserPhoneVCode} from 'qj-b2c-api';


export const UseAccountForm = (type) => {
  const [form] = Form.useForm();
  const [mobile, setMobile] = useState();
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
        delta: 1,
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
      console.log(51, result);
      Taro.navigateBack({
        delta: 1,
      })
      console.log(59, result.dataObj.ticketTokenid)
      Taro.setStorageSync('saasToken', result.dataObj.ticketTokenid);
    } catch (err) {
      console.log(27, err);
    } finally {
      setSubmitLock(false)
    }
  }


  return {
    mobile,
    setMobile,
    form,
    onFinish
  }
}
