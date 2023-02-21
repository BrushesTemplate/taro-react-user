import {useState, useRef, useEffect} from 'react';
import Taro from "@tarojs/taro";
import {View, ScrollView, Button, CheckboxGroup, Checkbox} from '@tarojs/components';
import {queryCollectPage} from '@brushes/api';
import CollectItem from './components/collectItem';

import './index.scss';

const Index = () => {
  const SafeArea = useRef(Taro.getStorageSync('safeArea'));
  const row = 1;
  const collectType = 0;
  const [edit, setEdit] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState<Array<any>>([]);

  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    queryCollectPage({row, page, collectType}).then(res => {
      if(res.list.length) {
        list.push(...res.list)
        setList([...list]);
        setPage(page + 1)
      }
      console.log(res.list)
    })
  }


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
        <CheckboxGroup>
          {
            list.map(item => {
              return <CollectItem key={item.collectId} item={item}/>
            })
          }
        </CheckboxGroup>
      </ScrollView>
      {
        edit?
          <View className='handleBar'>
            <View>
              <CheckboxGroup>
                <Checkbox>1123</Checkbox>
              </CheckboxGroup>
            </View>
            <Button className='btn'>删除</Button>
          </View>: null
      }
    </View>
  )
}

export default Index;
