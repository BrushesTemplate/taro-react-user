import {useEffect, useState} from 'react';
import {isEmpty} from 'lodash-es';
import Taro from '@tarojs/taro';
import {getPfsModelTagValueByTginfo} from '@brushes/api';
import {useMenuGraph, menuGraph} from '../utils/menuData';

export function usePageConfig(route: string) {
  const [node, setNode] = useState([]);
  const menuRx = useMenuGraph(route);
  console.log(6, route)

  useEffect(() => {
    const menu = Taro.getStorageSync('menu');
    const {menuOpcode} = menu.find(item => item.menuJspath === route);

    if(!menuOpcode) {
      Taro.showToast({
        title: '菜单配置有问题',
        icon: 'error',
        duration: 1500
      });
      return;
    }

    (async () => {

      const isExister = menuGraph.get(route);

      if(isExister && !isEmpty(isExister.lowCodeGraph)) {
        const nodeResource = isExister.lowCodeGraph;
        setNode(nodeResource.nodeGraph)
        return;
      }

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
      menuRx.init(data);
      setNode(data.nodeGraph)
    })()
  }, [route]);

  return node
}
