import {View, Image, Checkbox} from '@tarojs/components';
import {navigatorImpl} from '@brushes/utils';

import '../index.scss';

const CollectItem = ({item, edit}) => {

  return (
    <View className='collectItem'>
      {
        edit?<Checkbox className='lPart' value={item.collectCode}></Checkbox>:null
      }
      <View className='rPart' onClick={() => navigatorImpl(`/subpackage/gooddetail/index?skuCode=${item.skuCode}`)}>
        <Image src={item.collectOppic} className='img' />
        <View className='info'>
          <View className='title'>{item.collectOpcont}</View>
          <View className='price'>{item.collectOpnum} 元</View>
        </View>
      </View>
    </View>
  )
}

export default CollectItem;
