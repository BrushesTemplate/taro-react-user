import { View, Button } from '@tarojs/components';
import './index.scss'

const Index = () => {

  const getPhoneNumber = (e) => {
    console.log(e, e.detail.code)
  }

  return (
    <View className='bindPhone'>
      <Button openType='getPhoneNumber' onGetPhoneNumber={getPhoneNumber}>button</Button>
    </View>
  )
}


export default Index;
