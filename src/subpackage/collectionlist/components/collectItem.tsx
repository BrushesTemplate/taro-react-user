import {View, Image, Checkbox} from '@tarojs/components';
import {navigatorImpl} from '@brushes/qj-simulate-component';
// import {routerMap} from "../../../routerMap";
import '../index.scss';

const CollectItem = ({item}) => {
  return (
    <View className='collectItem'>
      <Checkbox className='lPart' value={'123'}></Checkbox>
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
