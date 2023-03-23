import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {queryProappEnvPage, saveUmuserPhoneNoCodeByWX, warrantyLogin} from 'qj-b2c-api';

export const useAuth = () => {
  const [bg, setBg] = useState('');
  const [logo, setLogo] = useState('');
  const [agree, setAgree] = useState(true);

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    try {
      const res = await queryProappEnvPage();
      const result = res.list[0];
      setBg(`https://www.${result.proappEnvDomain}${result.proappEnvIndexc}`);
      setLogo(`https://www.${result.proappEnvDomain}${result.proappEnvLogo}`);
    }catch (err) {
      console.log(err)
    }
  }

  const agreeFunc = (e) => {
    if(e.detail.value.length) {
      setAgree(true);
    }else {
      setAgree(false);
    }
  }

  const getPhone = async (e) => {
    Taro.login({
      success: async (res) => {
        const warrantyResult = await warrantyLogin({
          'js_code': res.code
        })
        const register = warrantyResult.dataObj.register;
        if(register === 'false') {
          const userInfo = JSON.parse(warrantyResult.dataObj.userInfo);
          Taro.setStorageSync('saas-token', userInfo.ticketTokenid);
        }else {
          const userOpenid = warrantyResult.dataObj.userOpenid;
          const result = await saveUmuserPhoneNoCodeByWX({
            code: e.detail.code,
            userOpenid
          })
          Taro.setStorageSync('saas-token', result.dataObj.ticketTokenid);
        }
      }
    })
  }

  return {
    bg,
    logo,
    agreeFunc,
    setAgree,
    agree,
    getPhone
  }
}
