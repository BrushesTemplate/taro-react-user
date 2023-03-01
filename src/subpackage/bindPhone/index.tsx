import Taro from '@tarojs/taro';
import {View, Button, Image, CheckboxGroup, Checkbox} from '@tarojs/components';
import {useState} from 'react';
import './index.scss'

const logo = 'https://b2cweapp7f8524e86a9049b5a18ac4176a51f672.weidian.cdinghuo.com/paas/shop-master/c-static/images/wx/au.png';

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

  const getPhoneNumber = (e) => {
    console.log(e, e.detail.code)
  }

  return (
    <View className='bindPhone'>
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
