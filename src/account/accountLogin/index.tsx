import {View} from '@tarojs/components';
import {AccountForm, TopLogo} from "../components";
import './index.scss'

const Index = () => {
  return (
    <View>
      <TopLogo />
      <AccountForm type='accountLogin' btnText='登录' />
    </View>
  )
}

export default Index;
