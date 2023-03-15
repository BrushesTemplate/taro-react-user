import {View} from '@tarojs/components';
import {AccountForm, AgreementEntry, TopLogo} from "../components";
import {useAccountForm} from "../hooks";

import './index.scss'

const Index = () => {
  const {goAccountLogin} = useAccountForm()

  return (
    <View>
      <TopLogo />
      <AccountForm type='mobileLogin' btnText='登录' />
      <View className='tip'>
        <View onClick={goAccountLogin}>账号密码登录</View>
      </View>
      <AgreementEntry />
    </View>
  )
}

export default Index;
