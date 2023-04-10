import {View, Image, Checkbox} from '@tarojs/components';
import {navigatorHandler} from '@brushes/utils';

import '../index.scss';

const CollectItem = ({item, edit, checked}) => {

  return (
    <View className='collectItem'>
      {
        edit?<Checkbox className='lPart' value={item.collectCode} checked={checked}></Checkbox>:null
      }
      <View className='rPart' onClick={() => navigatorHandler('gooddetail', {
        skuCode: item.collectOpcode,
      })}>
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
