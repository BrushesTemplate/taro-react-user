import Taro from '@tarojs/taro';
import {View, Button, Image, CheckboxGroup, Checkbox} from '@tarojs/components';
import {useState} from 'react';
import {saveUmuserPhoneByWX, warrantyLogin} from 'qj-b2c-api'
import './index.scss'
import logo from './logo.png';
import bg from './bg.png';
import {sucMessage} from '@/utils/message';
import {last, get} from 'lodash-es';

const Index = () => {
  const [agree, setAgree] = useState(false);

  const radioState = {
    value: 'agree',
    text: '阅读并同意用户协议',
  }

  const makeSureState = {
    title: '温馨提示',
    content: '请同意用户协议后授权登录'
  }

  const handleAgreement = (e) => {
    const arr = e.detail.value;
    if(arr.length) {
      setAgree(true);
    }else {
      setAgree(false);
    }
  }

  const makeSure = () => {
    const {title, content} = makeSureState;
    Taro.showModal({
      title,
      content,
      success: function (res) {
        if (res.confirm) {
          setAgree(true);
        } else if (res.cancel) {
          setAgree(false);
        }
      }
    })
  }

  const bindPhone = async (phone, code) => {
    try {
      const data = await saveUmuserPhoneByWX({
        userPhone: phone,
        code,
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
  }

  const getPhoneNumber = (e) => {
    console.log(888, e);
    Taro.login({
      success: async function (result: { code: string }) {
        const response = await warrantyLogin({
          js_code: result.code
        })
        const res = response.data;
        // 异常情况
        if (!res.dataObj) {
          // 登录错误
          Taro.showToast({
            title: '无法登录',
            icon: 'error',
            duration: 1500
          });
          return;
        }

        const isReister = get(res, 'dataObj.register', '') as string;
        const userOpenid = get(res, 'dataObj.userOpenid', '');
        Taro.setStorageSync('userOpenid', userOpenid);

        if (isReister === 'true') {
          // 去绑定
          bindPhone(12, 12)
          return;
        }

        const token = get(res, 'dataObj.userInfo', '{}');
        Taro.setStorageSync('saas-token', token);
      },
      complete: function () {
      }
    });
    console.log(e, e.detail.code)
  }

  return (
    <View className='bindPhone' style={{
      backgroundImage: `url(${bg})`
    }}
    >
      <View className='logoWrap'>
        <Image src={logo} className='logo' mode='widthFix' />
      </View>
      <View className='authorizationWrap'>
        <CheckboxGroup onChange={handleAgreement} className='agreement'>
          <Checkbox value={radioState.value} checked={agree}>{radioState.text}《一站式营销数字化》</Checkbox>
        </CheckboxGroup>
        {
          agree?
            <Button className='btn' openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>微信用户授权登录</Button>:
            <Button className='btn' onClick={makeSure}>微信用户授权登录</Button>
        }
        {/*<View className='tip'>输入手机号码登录/注册</View>*/}
      </View>
    </View>
  )
}


export default Index;
