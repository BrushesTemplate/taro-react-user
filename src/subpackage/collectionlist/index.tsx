import {useRef} from 'react';
import Taro from "@tarojs/taro";
import {View, ScrollView,  CheckboxGroup, Checkbox, Button, Image} from '@tarojs/components';
import {useCollectionList} from 'qj-mobile-store';
import HeaderJsx from "@/components/header";
import CollectItem from './components/collectItem';

import './index.scss';

const Index = () => {
  // @ts-ignore
  const {collectionList, edit, setEdit, getData, getSelectItem, delItem, init, checked, handleSelectAll, selectAllChecked} = useCollectionList();
  const SafeArea = useRef(Taro.getStorageSync('safeArea'));


  return (
    <View className='collectList'>
      <HeaderJsx />
      {
        collectionList.length === 0?
          <View className='noDate'>
            <Image className='img' src='https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/noCollection.png' />
          </View>:
          <View className='hasDate'>
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
              onScrollToUpper={init}
            >
              <CheckboxGroup onChange={getSelectItem}>
                {
                  collectionList.map(item => {
                    return <CollectItem key={item.collectId} item={item} edit={edit} checked={checked} />
                  })
                }
              </CheckboxGroup>
            </ScrollView>
            {
              edit?
                <View className='handleBar'>
                  <View className='checkAll'>
                    <CheckboxGroup onChange={handleSelectAll}>
                      <Checkbox value='1' checked={selectAllChecked}>全选</Checkbox>
                    </CheckboxGroup>
                  </View>
                  <Button className='btn' onClick={delItem}>删除</Button>
                </View>: null
            }
          </View>
      }
    </View>
  )
}

export default Index;
