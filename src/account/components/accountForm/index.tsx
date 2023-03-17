import {View} from '@tarojs/components';
import {Form} from 'antd-mobile';

import {MobileItem, CodeItem, PasswordItem, SubmitBtn, AccountItem} from "./components";
import {useAccountForm} from "../../hooks";

export const AccountForm = ({type, btnText, txt}: {type: string; btnText: string; txt?: string}) => {
  const {form, onFinish} = useAccountForm(type)

  return (
    <View>
      <Form
        form={form}
        footer={
          <SubmitBtn btnText={btnText} />
        }
        onFinish={onFinish}
      >
        {
          type === 'accountLogin' ? <AccountItem /> : null
        }
        {
          ['forgetPwd', 'reg', 'mobileLogin'].includes(type) ? <MobileItem /> : null
        }
        {
          type === 'reg' || type === 'mobileLogin' || type === 'forgetPwd' ? <CodeItem form={form} type={type} /> : null
        }
        {
          type === 'reg' || type === 'accountLogin' || type === 'forgetPwd' ? <PasswordItem txt={txt} /> : null
        }
      </Form>
    </View>
  )
}
