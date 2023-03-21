import { useEffect, useState, useRef } from 'react';
import { queryContractPageC } from 'qj-b2c-api';
import {getEnv, useImmutableCallback} from '@brushes/utils';
import { ScrollView, View } from '@tarojs/components';
import { Item } from './orderItem';
import { isEmpty } from 'lodash-es'
const isTaro = getEnv();

function Index() {
  const isScroll = useRef(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const num = useRef(0);
  useEffect(() => {
    init();
  }, []);

  const init = useImmutableCallback(() => {
    num.current = 0;
    setData([]);
    onScroll();
  });

  const onScroll = useImmutableCallback(async (e = {}) => {
    if (isScroll.current) return;
    setLoading(true);
    ++num.current;
    try {
      const data = await queryContractPageC({
        page: num.current,
        rows: 10,
        isLocalMock: !isTaro,
        childFlag: true,
        dataStateStr: -1
      });
      isScroll.current = isEmpty(data.rows) || data.rows.length < 10;
      setData((val) => val.concat(data.rows || []));
      setLoading(false);
    } catch (err) {
      --num.current;
      console.log(30, err);
    }
  });
  const onScrollImpl = (e) =>{
    console.log(e.detail)
  }

  return (
    <View className={'orderListItemWrap'}>
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={0}
        style={{height: '90vh'}}
        lowerThreshold={50}
        upperThreshold={50}
        onScrollToUpper={onScroll} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={onScrollImpl}
        >
        <View>
          {data.map((item, index) => (
            <Item init={init} {...item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Index;
