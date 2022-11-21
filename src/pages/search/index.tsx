import {View} from '@tarojs/components';
import './index.scss'
import CommonJsx from '../../components';

const Main = () => {
  const node = [{
    "type": "SearchPage",
    "name": "搜索页",
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

  return (
    <View className='container'>
      <CommonJsx node={node} />
    </View>
  )
}


export default Main;
