import {View} from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Main = () => {
  const node = [{
    "type": "OrderList",
    "name": "订单列表",
    "icon": "icon-a-2",
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
    "id": 1
  }]

  return (
    <View className='container'>
      <CommonJsx node={node}/>
    </View>
  )
}


export default Main;
