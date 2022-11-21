import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
import {getPfsModelTagValueByTginfo} from '../../../../qj/lerna-repo/packages/api';

export function usePageConfig(route: string) {
  const [node, setNode] = useState([]);

  console.log(6, route)

  useEffect(() => {
    const menu = Taro.getStorageSync('menu');
    const menuOpcode = menu.find(item => item.menuJspath === route).menuOpcode;
    (async () => {
      const pageConfig = await getPfsModelTagValueByTginfo({
        menuOpcode: menuOpcode
      });

      let data = JSON.parse(pageConfig.modelTagvalueJson);
      if(!data.hasOwnProperty('nodeGraph')) {
        Taro.showToast({
          title: '脏数据, 初始化默认数据',
          icon: 'error',
          duration: 1500
        });
        data = {
          nodeGraph: [],
          page: '',
          version: '',
          pageConfig: {}
        }
      }
      setNode(data.nodeGraph)
    })()
  }, [route]);

  return node
}
