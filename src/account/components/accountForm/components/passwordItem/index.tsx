import {View} from '@tarojs/components';
import {Form, Input} from 'antd-mobile'
import {IconMobile} from '@brushes/simulate-component';
import {useState} from "react";

export const PasswordItem = ({txt = '请输入密码'}) => {
  const [pwdType, setPwdType] = useState(true)

  return (
    <Form.Item
      name='password'
      extra={
        <View onClick={() => setPwdType(!pwdType)}>
          {
            pwdType ? <IconMobile value='yincang' /> : <IconMobile value='liulan' />
          }
        </View>
      }
    >
      <Input placeholder={txt} type={pwdType ? 'password' : 'text'} />
    </Form.Item>
  )
}
