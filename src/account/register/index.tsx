import {View} from '@tarojs/components';
import {AccountForm, TopLogo} from "../components";
import './index.scss'

const Index = () => {
  return (
    <View>
      <TopLogo />
      <AccountForm type='reg' btnText='注册' />
    </View>
  )
}

export default Index;
