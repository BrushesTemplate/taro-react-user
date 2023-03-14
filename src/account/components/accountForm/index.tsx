import {View} from '@tarojs/components';
import {Form} from 'antd-mobile';
import {MobileItem, CodeItem, PasswordItem, SubmitBtn} from "./components";
import {useAccountForm} from "./hooks";

export const AccountForm = ({type, btnText}) => {
  console.log(9, type)
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
          type === 'reg' || type ==='mobileLogin' ? <MobileItem /> : null
        }
        {
          type === 'reg' || type ==='mobileLogin' ? <CodeItem form={form} type={type} /> : null
        }
        {
          type === 'reg' ? <PasswordItem /> : null
        }
      </Form>
    </View>
  )
}
