import {useEffect} from "react";
import {View} from '@tarojs/components';
import {pageStack} from "@/account/pageStack";
import {AccountForm, AgreementEntry, TopLogo} from "../components";

import {useAccountForm} from "../hooks";
import './index.scss'

const Index = () => {
  const {goMobileLogin} = useAccountForm();

  useEffect(() => {
    pageStack.pageNum += 1
  })


  return (
    <View>
      {pageStack.pageNum}
      <TopLogo />
      <AccountForm type='reg' btnText='注册' />
      <View className='tipWrap'>
        <View className='tip'>
          已有账号？ <View className='link' onClick={goMobileLogin}>去登录</View>
        </View>
      </View>
      <AgreementEntry />
    </View>
  )
}

export default Index;
