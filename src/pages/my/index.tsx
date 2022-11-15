import {View} from '@tarojs/components';
import CommonJsx from '../../common';
import Taro from '@tarojs/taro';

const Main = () => {
  const node = [{
    "type": "OrderEntry",
    "name": "订单入口",
    "icon": "icon-a-1",
    "props": {
      "backgroundColor": "#FFFFF",
      "titleTitle": "",
      "value": "请填写主标题或文本",
      "fontSize": 20,
      "textAlign": "left",
      "color": "#000000",
      "fontWeight": "normal",
      "textDecoration": "none",
      "fontStyle": "normal",
      "marginTop": 0,
      "marginBottom": 0,
      "defaultValue": []
    },
    "id": 4
  }]

  const switchImpl = () => {
    Taro.navigateTo({
      url: '/subpackage/order/index'
    })
  }
  return (
    <View onClick={switchImpl} className='container'>
      <CommonJsx node={node} />
    </View>
  )
}


export default Main;
