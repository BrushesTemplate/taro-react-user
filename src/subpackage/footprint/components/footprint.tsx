import {View, Image, CheckboxGroup, Checkbox} from '@tarojs/components';
import {navigatorImpl} from "@brushes/utils";

export const Footprint = ({item, edit}) => {
  return (
    <View className='footPrint'>
      <>
        <View className='title' style={{paddingLeft: '20px', paddingTop: '30px', paddingBottom: '10px'}}>{item.title}</View>
      </>
      {
        item.option.map((footprintItem: any, index) => {
          return (
            // <CheckboxGroup key={index}>
              <View className='footprintItem' key={index}>
                {
                  edit?
                    <View className='lPart'>
                      <Checkbox value={footprintItem.footprintCode}></Checkbox>
                    </View> : null
                }
                <View className='rPart' onClick={() => navigatorImpl(`/subpackage/gooddetail/index?skuCode=${footprintItem.footprintOpcode}`)}>
                  <Image src={footprintItem.footprintOppic} className='img' />
                  <View className='info'>
                    <View className='title'>{footprintItem.footprintOpcont}</View>
                    <View className='price'>{footprintItem.footprintOpnum} 元</View>
                  </View>
                </View>
              </View>
            // </CheckboxGroup>
          )
        })
      }
    </View>
  )
}

