import {useEffect, useState} from 'react';
import {isEmpty, get} from 'lodash-es';
import {getPfsModelTagValueByTginfo} from 'qj-b2c-api';
import {useMenuGraph, menuGraph} from '@/utils/menuData';
import {taroMessage} from '@brushes/utils';
import Taro from '@tarojs/taro';

export function usePageConfig(route: string) {
  const [node, setNode] = useState([]);
  const menuRx = useMenuGraph(route);

  useEffect(() => {
    (async () => {
      const isExister = menuGraph.get(route);

      if(isExister && !isEmpty(isExister.lowCodeGraph)) {
        const nodeResource = isExister.lowCodeGraph;
        setNode(nodeResource.nodeGraph)
        return;
      }
      const menuOpcode = Taro.getStorageSync('menuOpcode')

      console.log(23, menuOpcode)
      const pageConfig = await getPfsModelTagValueByTginfo({
        menuOpcode: menuOpcode,
        proappCode: '025',
        isNew: 1
      });

      const dataStr = get(pageConfig, 'modelTagvalueJson', '{}')
      let data = JSON.parse(dataStr);
      if(!data.hasOwnProperty('nodeGraph')) {
        taroMessage('脏数据, 初始化默认数据', 'error');

        data = {
          nodeGraph: [],
          page: '',
          version: '',
          pageConfig: {}
        }
      }
      menuRx.init(data);
      setNode(data.nodeGraph)
    })()
  }, [route]);


  return node
}

