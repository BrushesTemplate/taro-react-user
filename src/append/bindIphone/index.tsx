import {
  Form,
  Input,
  Button,
} from 'antd-mobile'
import './index.scss';
import {checkMobile} from '@/utils';
import CodeJsx from '../components/code';
import {useBindPhone} from './hooks';

export default () => {
  const [form] = Form.useForm();
  const onFinish = useBindPhone()
  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item
          name='userPhone'
          label='手机号'
          rules={[{validator: checkMobile}]}
        >
          <Input placeholder='请输入手机号' />
        </Form.Item>
        <Form.Item
          label='短信验证码'
          name='code'
          rules={[{required: true, message: '验证码不能为空'}]}
          extra={
            <div className='extraPart'>
              <CodeJsx form={form}/>
            </div>
          }
        >
          <Input placeholder='请输入验证码' clearable/>
        </Form.Item>
      </Form>
    </>
  )
}
