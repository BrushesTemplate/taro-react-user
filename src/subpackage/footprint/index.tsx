// @ts-noCheck
import {useRef} from 'react';
import Taro from "@tarojs/taro";
import {View, ScrollView,  CheckboxGroup, Checkbox, Button, Image} from '@tarojs/components';
import {useFootprint} from 'qj-mobile-store';
import HeaderJsx from "@/components/header";
import CollectItem from './components/collectItem';
import {Footprint} from "./components/footprint";


import './index.scss';
import {FootprintGroup} from "./components/footprintGroup";


const Index = () => {
  // @ts-ignore
  const {footprintList, edit, setEdit, getData, getSelectItem, delItem, init, checked, handleSelectAll, selectAllChecked} = useFootprint();
  const SafeArea = useRef(Taro.getStorageSync('safeArea'));

  return (
    <View className='collectList'>
      <HeaderJsx />

      {
        footprintList.length === 0?
          <View className='noDate'>
            <Image
              className='img'
              src='https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/noCollection.png' />
          </View>:
          <View className='hasDate'>
            <View className='topBar'>
              <View className='edit' onClick={() => setEdit(!edit)}>{edit? '完成': '编辑'}</View>
            </View>
            <ScrollView
              style={{
                height: `calc(100vh - ${SafeArea.current}px - 50px - 54px)`,
                // height: `calc(100vh - ${SafeArea.current}px)`,
              }}
              scrollY
              scrollWithAnimation
              // onScrollToLower={getData}
            >
              <CheckboxGroup onChange={getSelectItem}>
                <FootprintGroup footprintList={footprintList} edit={edit} />
              </CheckboxGroup>
            </ScrollView>
            {
              edit?
                <View className='handleBar'>
                  <View className='checkAll'>
                    {/*<CheckboxGroup onChange={handleSelectAll}>*/}
                    {/*  <Checkbox value='1' checked={selectAllChecked}>全选</Checkbox>*/}
                    {/*</CheckboxGroup>*/}
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
