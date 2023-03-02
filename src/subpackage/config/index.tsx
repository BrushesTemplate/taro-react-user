import {View} from '@tarojs/components';

import './index.scss';

const Index = () => {
  const configArr = [
    {
      key: 1,
      text: '绑定手机'
    }
  ]

  return (
    <View className='configWrap' >
      <ul className='configArr'>
        {
          configArr.map(item => {
            return (
              <li key={item.key}>{item.text}</li>
            )
          })
        }
      </ul>
    </View>
  )
}


export default Index;
