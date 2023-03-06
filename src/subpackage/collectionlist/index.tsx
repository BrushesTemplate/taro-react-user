import {useRef} from 'react';
import Taro from "@tarojs/taro";
import {View, ScrollView,  CheckboxGroup, Button} from '@tarojs/components';
import {useCollectionList} from 'qj-mobile-store';
import CollectItem from './components/collectItem';

import './index.scss';

const Index = () => {
  // @ts-ignore
  const {collectionList, edit, setEdit, getData, getSelectItem, delItem} = useCollectionList();
  const SafeArea = useRef(Taro.getStorageSync('safeArea'));

  return (
    <View className='collectList'>
      <View className='topBar'>
        <View className='edit' onClick={() => setEdit(!edit)}>{edit? '完成': '编辑'}</View>
      </View>
      <ScrollView
        style={{
          height: `calc(100vh - ${SafeArea.current}px - 50px - 54px)`,
        }}
        scrollY
        scrollWithAnimation
        onScrollToLower={getData}
      >
        <CheckboxGroup onChange={getSelectItem}>
          {
            collectionList.map(item => {
              return <CollectItem key={item.collectId} item={item} edit={edit} />
            })
          }
        </CheckboxGroup>
      </ScrollView>
      {
        edit?
          <View className='handleBar'>
            <View>
              <CheckboxGroup>
              </CheckboxGroup>
            </View>
            <Button className='btn' onClick={delItem}>删除</Button>
          </View>: null
      }
    </View>
  )
}

export default Index;
